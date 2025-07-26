# Car Rental Website 🚗

A full-stack Car Rental Website developed with:

- 🖥️ **Frontend**: Angular  
- 🛠️ **Backend**: Django (REST API)  
- 💾 **Database**: MySQL  

---

## 📝 Features

- 🚘 Car Listings & Booking  
- 🔐 User Authentication (Login/Signup)  
- 📄 Car Details & About Page  
- 📦 RESTful API Integration  

---

## 📸 Screenshots

### 🔹 Homepage
![Homepage](images/Home_page.png)

### 🔹 Cars Page
![Cars](images/Cars_details.png)

### 🔹 About Page
![About](images/About_page.png)

### 🔹 Login Page
![Login](images/Login_page.png)

### 🔹 Signup Page
![Signup](images/SignUp_page.png)

---

## 📂 Folder Structure
frontend/ → carRental_frontend  
backend/ → carRental_backend

---

## 🛠️ Requirements

- Python 3.x  
- Django 3.x  
- Django REST Framework  
- Angular CLI  
- MySQL  

---

## 💻 How to Run

### 🔧 Backend (Django)

```bash
cd backend/carRental_backend
python -m venv env
# Windows:
env\Scripts\activate
# macOS/Linux:
source env/bin/activate

pip install -r requirements.txt

# Create .env file and add your DB credentials

python manage.py makemigrations
python manage.py migrate
python manage.py runserver

cd frontend/carRental_frontend
npm install
ng serve
