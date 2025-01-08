# blog-management-server


This project is an Express application with TypeScript,integrating MongoDB with mongoose to manage a Blog .Ensure  data integrity using mongoose schema validation and also use zod validation.
## Live Link 
- 
## vedio details
- 
# Authentication-Register User
- api end point - api/auth/register
- Register a new User 
- providing actual data a user can register 
- when register database they provide password our system hashed this password properly

# Login User
- api end point - api/auth/login
- A user logedin his/her profile when he/she provide proper email and password 
- Our system compare plaintext password and hashed password 
- After sucessfull a user logedin his/her system 
- When login our system generate a authorization token -without token a user is not valid user
# Blog Management 
# Create Blog 
- api end point - api/blogs
- Without logedin user no one can created blog 
- Our system check and detached login user 
- Our system check Authorization token also
# update Blog 
- api end point - api/blogs/:id
- Withot login and valid user no one can update blog data
- Our system check and detached login user
- Our system check Authorization token and access updating blog
- A user who create a blog he/she can update his/her own blog , he/she can't update others blog 
- Our System ensure for this end point auth guard also.
# Delete Blog 
-api end point - api/blogs/:id
- Withot login and valid user no one can delete blog data
- Our system check and detached login user
- Our system check Authorization token and access delete blog
- A user who create a blog he/she can delete his/her own blog, he/she can't delete others blog
- Our system ensure for this end point auth guard also.
# Get all blogs (public api)
- api end point api/blogs
- search: Search blogs by title or content (e.g., search=blogtitle).
- ortBy: Sort blogs by specific fields such as createdAt or title (e.g., sortBy=title).
- sortOrder: Defines the sorting order. Accepts values asc (ascending) or desc (descending). (e.g., sortOrder=desc).
- filter: Filter blogs by author ID (e.g., filter=authorId).

 # /api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&filter=60b8f42f9c2a3c9b7cbd4f18
  
# Admin Action 
- Our system has to role user and Admin ,admin can create some action like user block ,blog delete etc
- Our system create a admin token when he/she login our system ,without token we can't access our system 
- Without token an admin can't blocked a user 
- A valid admin can block a user (apiEndPoint = api/admin/users/:userId/block)
- A valid admin can delete any blog (apiEndPoint = api/admin/blogs/:id)



# Error handaling 
- Detaild, user-friendly error resoponse 
- Missing or invalid data 
- Not found route Error
- its global error through by express.js next function i access global error 

# Techonology used 
      1. Backend : Node.js,Express.js,TypeScript, Zod
      2. DataBase: MongoDB and Mongoose 
      3. Tools: EsLint,Prettieer
      4. FrontEnd : Not yet now (can be intefrated later)

## How to run project 

# Prerequisites 
- Node.js 
- Git 
- MongoDB- local or cloud 

# installation 
# 1. Clone the Repository 
    1.https://github.com/alamshuvo/blog-management-server.git
    2.cd blog-management-server

# 2. Install Dependencies 
    1.npm install 

# 3. Set up Environment variables create a .env file in the root directory and include the following 
    1.port=5000;
    2.MONGO_URI=mongodb://localhost:27017

# 4. Run the application start the server in development mode 
    1.npm run start:dev 



# Check API end point 
   # 1. Register 
       - EndPoint: POST - /api/auth/register
       - Request Body 
       - { "name": "John Doe","email": "john@example.com","password": "securepassword"}

- Response : {"success": true,"message": "User registered successfully",
- "statusCode": 201,
- "data": {
    "_id": "string",
    "name": "string",
    "email": "string"
  }
} 
 # 2. Login user 
 - EndPoint : POST /api/auth/login
 - {
- "email": "john@example.com",
 - "password": "securepassword"
}
- sucess {
-"success": false,
 - "message": "Invalid credentials",
 - "statusCode": 401,
 - "error": { "details" },
 - "stack": "error stack"
}

 # 3. Create Blog
   - EndPoint : POST /api/blogs
   - {
 - "title": "My First Blog",
  -"content": "This is the content of my blog."
}

# 4. Update blog
  - EndPoint : PATCH /api/blogs/:id
  - request headers = Authorization: Bearer <token>
  - {
  -"title": "Updated Blog Title",
  -"content": "Updated content."
}
  - Response : Sucess message with update Blog data 

# 5. Delete Blog
 - Endpoint : DELETE /api/blogs/:id
- request headers = Authorization: Bearer <token>
 - Response {
  -"success": true,
  -"message": "Blog deleted successfully",
  -"statusCode": 200
}


# Get All Blog(public)
  1. place an order -EndPoint : GET /api/blogs
-/api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&-filter=60b8f42f9c2a3c9b7cbd4f18
3. Response : Sucess Message with order details 

# Admin Action 
# Block User
- api PATCH - /api/admin/users/:userId/block
- request headers = Authorization: Bearer <token>
- response {
 - "success": true,
 - "message": "User blocked successfully",
  -"statusCode": 200
}
# Delete Blog 
- api DELETE - /api/admin/blogs/:id
- Request Header:Authorization: Bearer <admin_token>
- response {
-  "success": true,
 - "message": "Blog deleted successfully",
 - "statusCode": 200
}


  # If you want Contact me
  - iftakharalamshuvo11@gmail.com
  - +8801980640702