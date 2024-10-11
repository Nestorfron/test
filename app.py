from flask import Flask
from dotenv import load_dotenv
from models import db, User  # Importa el modelo
import os

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')

# Iniciar la base de datos
db.init_app(app)

@app.route('/')
def home():
    return "Hello, Flask con .env y Modelos!"

@app.route('/users')
def get_users():
    users = User.query.all()
    return { "users": [user.name for user in users] }

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Crear las tablas
    app.run()
