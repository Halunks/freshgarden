#Registration
   - backend/api/registration/POST: Register new user by asking for email (a validation code will be send to given email).
    
   - backend/api/registration/validate/ POST: Validate the creation of new user with the code sent by email.

#Auth
   - backend/api/auth/token/ POST: Get a new JWT by passing username and password.
    
   - backend/api/auth/token/refresh/ POST: Get a new JWT by passing an old still valid JWT.
    
   - backend/api/auth/token/verify/ POST: Verify a token by passing the token in the body.
    
   - backend/api/auth/password-reset/ POST: Reset users password by sending a validation code in a email.
   
   - backend/api/auth/password-reset/validate/ POST: Validate password reset token and set new password for the user.
    

#Search
   - backend/api/search/ GET: Search for ‘products’, or ‘users’. {type: ‘products’, ‘search_string’: ‘Fruit’}

#Home
   - backend/api/home/ GET: Get a list of the best rated users for the home screen.
   (the newest, biggest orders, most fresh, fastest)

#Products
   - backend/api/products/ GET: Get the list of all the products.
   
   - backend/api/products/promotion/ GET: Get the list of all promoted products.

   - backend/api/products/new/ POST: Create/Advertise a new product.

   - backend/api/products/user/<int:user_id>/ GET: Get the all the products created by a specific user in chronological order.
       
   - backend/api/products/<int:id>/ DELETE: Delete a product by id (only by owner or product admin).
   
   - backend/api/products?search=<str:search_string>/ GET: Search for a product.
    
#Review
   - backend/api/review/new/<int:user_id>/ POST: create a new review.
    
   - backend/api/review/user/<int:user_id>/ GET: Get the list of the reviews for a single user.
    
   - backend/api/review/<int:rating_id>/ GET: Get a specific review by ID and display all the information.

   - backend/api/review/<int:rating_id>/ PATCH: Update a specific review (only by owner).

   - backend/api/review/<int:rating_id>/ DELETE: Delete a specific review (only by owner).
    
#Users
   - backend/api/me/ GET: Get the user profile.

   - backend/api/me/ PATCH: Update the user profile.

   - backend/api/users/list/ GET: Get all users.

   - backend/api/users?search=<str:search_string>/ GET: Search for a user.

   - backend/api/users/<int:user_id>/ GET: get a specific user profile.
   
#Cart
   - backend/api/cart/cart-detail/ GET: get all products added to a cart (only by owner).
   
   - backend/api/cart/item-clear/<int:id>/ DELETE: Remove item from cart by product id (only by owner).

   - backend/api/cart/item_increment/<int:id>/ PATCH: Increment quantity of item in cart by product id.
   
   - backend/api/cart/item_decrement/<int:id>/ PATCH: Decrement quantity of item in cart by product id.

   - backend/api/cart/cart_clear/ DELETE: Clear cart (only by owner).
   
#Order
   - backend/api/order/ GET: get all orders by user (only by owner).

#Wallet(only if producer)

   - backend/api/wallet/ GET: get all wallets by user (only by owner).

#Promotion

   - backend/api/promotion/ GET: get all products starting with promoted products in the front.