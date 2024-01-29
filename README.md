# MongoDB Database Application

This project is a MongoDB Database application built with Node.js, Express.js to manipulate the database via RESTful APIs. The application meets the following objectives:

## Objectives

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

### Routes

- GET /

  - GET /seed (Fill DB with hardcoded data)

  - POST /users (Add a new user)

    - GET /users (Get the list of users)

  - POST /posts (Add a new post)

    - POST /posts/batch-post (Add many posts at once)
    - GET /posts/:userId (Get all posts for a userId)
    - PUT /posts/edit/:id (Update a post)
    - DELETE /posts/:id/:userId (Delete a post)

  - GET /comments/:postId (Get all comments for a postId)
