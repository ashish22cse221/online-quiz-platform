from flask import Flask, render_template, request
import subprocess

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        code = request.form['code']

        # Write code to a file
        with open('temp.c', 'w') as f:
            f.write(code)

        # Compile and execute the code
        compile_process = subprocess.Popen(['gcc', '-o', 'temp', 'temp.c'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        compile_output, compile_errors = compile_process.communicate()

        if compile_process.returncode == 0:
            execute_process = subprocess.Popen(['./temp'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            execute_output, execute_errors = execute_process.communicate()
            output = execute_output.decode() if execute_output else execute_errors.decode()
        else:
            output = compile_errors.decode()

        return output

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
