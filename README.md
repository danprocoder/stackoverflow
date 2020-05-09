# Simplified Stackoverflow API

This is the REST API for a simplified version of Stackoverflow.

### Technologies Used:
- Node.js
- MongoDB

### Base URL: 
[https://daniel-stackoverflow-api.herokuapp.com/api/v1](https://daniel-stackoverflow-api.herokuapp.com/api/v1)

### API Documentation:
- [https://app.swaggerhub.com/apis/danprocoder/Stackoverflow/1.0.0](https://app.swaggerhub.com/apis/danprocoder/Stackoverflow/1.0.0)
- [https://daniel-stackoverflow-api.herokuapp.com/docs](https://daniel-stackoverflow-api.herokuapp.com/docs)

### Endpoints

##### POST /user/signup
Creates a new user

Request body:
- displayName (string)
- email (string)
- password (string)

##### POST /user/auth
Authenticates a user

Request body:
- email (string)
- password (string)

##### POST /question
Post a new question

Request body:
- title (string)
- body (string)

Required headers:
- Authorization: Bearer jwt

##### GET /question
Returns a list of all questions

##### GET /question/{id}
Returns a specific question

Path parameters:
- id (string): The question ID

##### PUT /question/{id}/upvote
Upvote a question

Required headers:
- Authorization: Bearer jwt

Path parameters:
- id (string): The question ID

##### PUT /question/{id}/downvote
Downvote a question

Required headers:
- Authorization: Bearer jwt

Path parameters:
- id (string): The question ID

##### POST /question/{id}/answer
Posts an answer to a question

Path parameters:
- id (string): The question ID

Required headers:
- Authorization: Bearer jwt

##### GET /question/{id}/answer
Returns all answers for a specific question

Path parameters:
- id (string): The question ID

##### GET /search/user
Search for users

Query parameters:
- query (string): The keyword to search

##### GET /search/answer
Search for answers

Query parameters:
- query (string): The keyword to search

##### GET /search/question
Search for questions

Query parameters:
- query (string): The keyword to search
