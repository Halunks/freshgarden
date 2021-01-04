# Purpose
Freshgarden is the result of a three week sprint with 3 junior web developers.
Freshgarden resolves around the idea of trading food from consumer to consumer. A key feature is to let people connect to like-minded people via a social board and a chat.
This repository is the foundation for a minimal viable product (MVP).

# Impressions
![Homepage](./frontend/src/assets/freshgarden_homepage.png "Home Page")

![Sign In](./frontend/src/assets/signin.PNG "Sign In Page")

![FAQ](./frontend/src/assets/freshgarden_about.png "FAQ")

# Setup Guide 
<strong>Prerequisites and Frontend</strong>

1. Install node: https://nodejs.org/en/download/
2. Update npm: <code>$ sudo npm install -g npm@latest</code>
3. Install Docker: https://docs.docker.com/get-docker/
4. Clone the repository: <code>$ git clone</code>
5. Install all dependencies: <code>$ cd frontend/ $ npm i</code> 
6. Start the frontend React app: <code>$ cd frontend/ $ npm start</code>
7. Test if the React app is running correctly by accessing "http://localhost:3000/"

<strong>Docker and Backend</strong>

8. Build the docker image: <code>$ docker build -t registry_name .</code>
    * Troubleshoot dockerify: <code>$ docker builder prune -a </code> Repeat step 8.</br>
9. Setup PyCharm with a remote interpreter for the docker container:
    * PyCharm settings > Build, Execution, Deployment > Docker > virtual path "/backend" and local path "C:\Users\MyUser\PycharmProjects\project-name\backend"
    * PyCharm settings > Project > Add Interpreter > Docker Compose > Service: "backend" + Python interpreter path "/opt/conda/envs/backend/bin/python"
    * Make PyCharm Run/Debug configurations > 
        * Script path: "C:\Users\MyUser\PycharmProjects\project-name\backend\manage.py"
        * Command: <code>runserver 0.0.0.0:8000</code>
        * Path mapping: "C:/Users/alex_/PycharmProjects/project-name/backend=/backend"
    * Make PyCharm Run/Debug configurations > Same as above with command <code>makemigrations</code>
    * Make PyCharm Run/Debug configurations > Same as above with command <code>migrate</code>
10. Test if the server is running correctly by accessing "http://localhost:8000/backend/api/admin/" 
11. Start the frontend React app <code>$ cd frontend/ $ npm start</code> and access it on "https://localhost:3000/"

# Architecture
![Architecture](./frontend/src/assets/architecture.png "Architecture")

# Endpoints
<strong>Registration</strong>

<code>api/auth/registration/</code> POST: Register a new user by asking for an email (send email validation code)

<code>api/auth/registration/validation/</code> POST: Validate a new registered user with a validation code sent by email

<strong>Auth</strong>

<code>api/auth/token/</code> POST: Get a new JWT by passing username and password.

<code>api/auth/token/refresh/</code> POST: Get a new JWT by passing an old still valid JWT.

<code>api/auth/token/verify/</code> POST: Verify a token by passing the token in the body.

<code>api/auth/password-reset/</code> POST: Reset users password by sending a validation code in a email.

<code>api/auth/password-reset/validate/</code> POST: Validate password reset token and set new password for the user.

<strong>Search</strong>

<code>api/search/</code> GET: Search for ‘products’, or ‘users’. {type: ‘products’, ‘search_string’

<strong>Search</strong>

<strong>Home</strong>

<code>api/home/</code> GET: Get a list of the newest products. (might me not /home)

<strong>Products</strong>

<code>api/products/</code> GET: Get the list of all the products.

<code>api/products/new/</code> POST: Create/Advertise a new product.

<code>api/products/user/<int:user_id>/</code> GET: Get the all the products created by a specific user in chronological order.

<code>api/products/<int:id>/</code> DELETE: Delete a product by id (only by owner or product admin).

<code>api/products?search=<str:search_string>/</code> GET: Search for a product.

<code>api/products/promotion/</code> GET: Get the list of all promoted products. // Not working yet

<strong>Users</strong> 

<code>api/me/</code> GET: Get the user profile.

<code>api/me/</code> PATCH: Update the user profile.

<code>api/users/list/</code> GET: Get all users.

<code>api/users?search=<str:search_string>/</code> GET: Search for a user.

<code>api/users/<int:user_id>/</code> GET: get a specific user profile.

<strong>Cart</strong>

<code>api/cart/cart-detail/</code> GET: get all products added to a cart (only by owner).
   
<code>api/cart/item-clear/<int:id>/</code> DELETE: Remove item from cart by product id (only by owner).

<code>api/cart/item_increment/<int:id>/</code> PATCH: Increment quantity of item in cart by product id.
   
<code>api/cart/item_decrement/<int:id>/</code> PATCH: Decrement quantity of item in cart by product id.

<code>api/cart/cart_clear/</code> DELETE: Clear cart
