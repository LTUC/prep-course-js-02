# Task 12:

## Problem domain:
For today's Task you will continue working on the Movies-Library repository. You will send get requests to a 3rd party API and display data.

## Requirements:
* Draw the web request response cycle for the task at hand
* Create a new branch called `Task12`
* Install the required packages for this task: `npm install axios dotenv`
* Go to this website [THE MOVIE DB](https://developers.themoviedb.org/3):
  - Create new account if you don’t have one
  - Get your api key

* Create GET request to the 3rd party API for these endpoints:
 - `/trending` : Get the trending movies data from the Movie DB API [Link](https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US)
 -  your response should include the following info :
```json
{
"id": 634649,
"title": "Spider-Man: No Way Home",
"release_date": "2021-12-15",
"poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
"overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
},
```
 - `/search`: Search for a movie name to get its information [Link](https://api.themoviedb.org/3/search/movie?api_key=668baa4bb128a32b82fe0c15b21dd699&language=en-US&query=The&page=2)
 - Take a look around the Movie DB Documentation and choose two more routes that interest you and add them to your project.

* Update documentation in your README.md file

- Your application structure should be similar to this:
```
Movies-Library
   ├── Movie Data
   |     └── data.json
   ├── .eslintrc.json
   ├── .env
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   ├── README.md
   └── server.js
```

## Resources:
## Resources:
* [Express doc](http://expressjs.com/en/4x/api.html)
* [NPM doc](https://docs.npmjs.com/)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [axios](https://www.npmjs.com/package/axios)

## Submission Instructions:
- When your work is complete and ready for submission, push to the `Task12` branch.
- Create a pull request.
- Submit the pull request link.
- Merge `Task12` with the main branch.
- What observations or questions do you have about what you’ve learned so far?
- How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?