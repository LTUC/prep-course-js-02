# Task 11:

## Overview :
- Today will be the beginning of a multi-task project, where you will build a movie app that can check the latest movies based on categories. 

- This week, you will build the server and the database for your project.

## Problem domain:
For today's task you are setting up the server of the movie app and create the basic structures 

## Requirements:
- Draw the web request response cycle for the task at hand
- Set up your server repository: 
  - Create a repository called `Movies-Library` on GitHub
  - Initialize your project by running the following command "npm init -y"
  - Create a new branch called `Task11`
  - Create basic file structure (server.js, .gitignore, .eslintrc.json )

- Install the required packages for this task: `npm install express cors`
- Build the following routes using the GET request:
  - Home Page Endpoint: `/`
    - Create a route with a method of get and a path of `/`. The callback should use the provided JSON data. 
    - Create a constructor function to ensure your data follow the same format.
  
   - Response Example: 
```json
{
"title": "Spider-Man: No Way Home",
"poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
"overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
}
```
 - Favorite Page Endpoint: “/favorite”
     - Response Example: 
```
Welcome to Favorite Page
```

- Handle errors
  - Create a function to handle the server error (status 500)
  - Create a function to handle "page not found error"  (status 404)
 - Response Example: 
```json
{
"status": 500,
"responseText": "Sorry, something went wrong"
}
```
- Add Documentation in your README file
```markdown
# Project Name - Project Version

**Author Name**: Add your name here

## WRRC
Add an image of your WRRC here

## Overview

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Project Features
<!-- What are the features included in you app -->
```


- Your application structure should be similar to this:
```
Movies-Library
   ├── Movie Data
   |     └── data.json
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   ├── README.md
   └── server.js
```

## Resources:
* [Express doc](http://expressjs.com/en/4x/api.html)
* [NPM doc](https://docs.npmjs.com/)
* [Dotenv](https://www.npmjs.com/package/dotenv)


## Submission Instructions:
- When your work is complete and ready for submission, push to the `Task11` branch.
- Create a pull request.
- Submit the pull request link.
- Merge `Task11` with the main branch.
- What observations or questions do you have about what you’ve learned so far?
- How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?