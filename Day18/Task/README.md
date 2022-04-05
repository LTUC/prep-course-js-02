# Netflix Clone

## **Task 18**

### **Overview**

For today and tomorrow's tasks, you will build a Netflix Clone web application.


### **Problem domain**

You are building a Netflix Clone application, where you can list a set of movies, and the user can add any movie to favorite list, also the user can see all favorite movies.

### **Requirements**

**Set up your Github Repository:**
   - Create new repo called `Netflix-Clone`.
   - Checkout a new branch called `class-18` for today's task.
   - Open it in VS code.


- Use this [Cheatsheet](https://drive.google.com/file/d/14VoN5f9mnLZ43t5kayttvbUWCYecxyLd/view) to create your project.
- API: https://developers.themoviedb.org/3


- You should have Six main components in your project.

    - Home 
    - Navbar(next task)
    - MovieList
    - Movie
    - ModalMovie
    - FavList (next task)   

- **Home component:**

    - Fetch data using the endpoint (‘/trending’) that you created in Task12. 

    - Render MovieList component.



- **MovieList component:**
    - Map the data that you have from the API. 
    - It returns and renders a Movie component.

- **Movie component:**
    - It includes the card that represents the movie
    - Each movie should have a button to add to the favorite list.
    - It includes a ModalMovie component.

- **ModalMovie component:**
    - It appears once the user clicks add to favorite button and shows movie details {name, img} also the user can add a comment on the card before adding it to the favorite list. 


    - When you click add to the favorite button you should store the data that you have from the Modal in your Database, using this endpoint(‘/addMovie’) from Task13.




## Submission Instructions:
- When your work is complete and ready for submission, push to the `class-18` branch.
- Create a pull request.
- Submit the pull request link.
- Merge `class-18` with the main branch.
- What observations or questions do you have about what you’ve learned so far?
- How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?