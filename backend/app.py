from flask import Flask, request, jsonify
from flask_cors import CORS , cross_origin

app = Flask(__name__)
CORS(app , supports_credentials=True)  # This will enable CORS for all routes

stored_data = []

@app.route('/api/storeData', methods=['POST'])
@cross_origin(supports_credentials=True)
def store_data():
    data = request.json.get('data')
    stored_data.append(data.strip())
    return jsonify({'message': 'Data stored successfully'})

@app.route('/api/showData')
@cross_origin(supports_credentials=True)
def show_data():
    return jsonify({'data': stored_data})

if __name__ == '__main__':
    app.run(host = "0.0.0.0", port = 5000 ,debug=True)
