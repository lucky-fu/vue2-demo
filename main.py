from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='dist/static')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path != "" and os.path.exists("dist/" + path):
        return send_from_directory('dist', path)
    else:
        return send_from_directory('dist', 'index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
