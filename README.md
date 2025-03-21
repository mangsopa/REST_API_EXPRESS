## Screenshot Testing Postman

**GET ALL USERS**
![image](https://github.com/user-attachments/assets/744de7a9-1e28-4c45-ba0e-c07baf7553c0)

**CREATE USERS**
![image](https://github.com/user-attachments/assets/c44af151-7792-4583-90be-0d8cad8e0a68)

**UPDATE USERS**
![image](https://github.com/user-attachments/assets/da9eb72d-a68f-4eb7-b780-8ef3a8a59290)

**DELETE USERS**
![image](https://github.com/user-attachments/assets/0f7f19a0-1398-4c70-b6b1-65e1588c71fa)

<hr>

### Steps

**Clone the repository**
   ```bash
   git clone https://github.com/mangsopa/REST_API_EXPRESS.git rest_api_express
   ```

## **Install Backend (Express.js)**

1. Masuk ke folder yang sudah di clone
   ```bash
    cd rest_api_express
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Buat file .env
   ```bash
   cp .env.example .env
   ```

4. Edit file .env (isi sesuai database kamu)
   ```env
    PORT=xxxx
    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=
   ```

5. Jalankan server backend
   ```bash
   npm run dev / nodemon index.js
   ```

