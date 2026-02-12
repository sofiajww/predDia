from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

# Load pipeline (scaler + logistic regression)
pipeline = joblib.load('C:/Users/sofia/model_final.pkl')

@app.route('/')
def home():
    return "API Klasifikasi Diabetes Aktif!"

@app.route('/predict', methods=['POST'])
def predict_diabetes():
    data = request.get_json()

    features = np.array([
        data['Pregnancies'],
        data['Glucose'],
        data['BMI'],
        data['DiabetesPedigreeFunction'],
        data['Age']
    ]).reshape(1, -1)

    prediction = pipeline.predict(features)[0]

    result = 'Positif Diabetes' if int(prediction) == 1 else 'Negatif Diabetes'
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(port=5000) 
