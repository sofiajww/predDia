from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

# Load model & scaler
model = joblib.load('C:/Users/sofia/model_diabetes.pkl')
scaler = joblib.load('C:/Users/sofia/scaler_diabetes.pkl')

@app.route('/')
def home():
    return "API Klasifikasi Diabetes Aktif!"

@app.route('/predict', methods=['POST'])
def predict_diabetes():
    data = request.get_json()

    features = np.array([
        data['Pregnancies'],
        data['Glucose'],
        data['BloodPressure'],
        data['SkinThickness'],
        data['Insulin'],
        data['BMI'],
        data['DiabetesPedigreeFunction'],
        data['Age']
    ]).reshape(1, -1)

    features_scaled = scaler.transform(features)
    prediction = model.predict(features_scaled)[0]

    result = 'Positif Diabetes' if prediction == 1 else 'Negatif Diabetes'
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(port=5000)
