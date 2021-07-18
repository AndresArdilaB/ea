from flask import Flask, request
from flask_cors import CORS

from algorithm import findIndex


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/api/find/index')
def callAlgorithm():
    string = request.args['str']
    return findIndex(string)
