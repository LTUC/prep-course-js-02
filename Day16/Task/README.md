# Travel Destination

## **Task 16**

### **Overview**

For today and tomorrow's tasks, you will build a Travel Destination web application.

### **Problem domain**

You are building a Travel Destination application where you can see a list of the most visited places around the world.

### **Requirements**
**Set up your Github Repository:**
   - Create new repo called `Travel-Destination`.
   - Checkout a new branch called `class-16` for today's task.
   - Open it in VS code.

- You structure tourapp/src to be as below - it just related to src folder the rest folder should not be Edited .

```
├── App.css
├── App.js
├── components
│   ├── footer
│   │   ├── Footer.css
│   │   └── Footer.js
│   ├── header
│   │   ├── Header.css
│   │   └── Header.js
│   ├── home
│   │   ├── Home.css
│   │   └── Home.js
│   └── tours
│       ├── Tours.css
│       ├── Tours.js
├── data
│   └── db.json
├── index.css
└── index.js
```
- Use this [Cheatsheet](https://drive.google.com/file/d/14VoN5f9mnLZ43t5kayttvbUWCYecxyLd/view) to create your project.
- Create a file in your project at location src/data/db.json and add the data below in your data.json file.

```JSON
[
{
"id": "rec6d6T3q5EBIdCfD",
"name": "Paris",
"info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
"image": "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
"price": "1,995"
},
{
"id": "recIwxrvU9HfJR3B4",
"name": "Ireland",
"info": "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
"image": "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
"price": "3,895"
},
{
"id": "recJLWcHScdUtI3ny",
"name": "Salzburg & Vienna",
"info": "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
"image": "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
"price": "2,695"
},
{
"id": "recK2AOoVhIHPLUwn",
"name": "Rome",
"info": "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
"image": "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
"price": "2,095"
},
{
"id": "receAEzz86KzW2gvH",
"name": "Poland",
"info": "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
"image": "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
"price": "2,595"
}
]
```


- The above data is a JSON array containing dummy travel destinations of the most visited cities around the world. Each JSON object has the following:
    - Name of the city
    - Id of the city
    - Description About the city 
    - The average price of the trip
    - Image


- You should have four main components in your project.

    - Home 
    - Header 
    - Footer
    - Tours      

- **Home component:**
  
  1. Render Header component.
  2. Render Tours component.
  3. Render Footer component.



- **Header component:**
  
    - Create an `<h1>` tag as a header. 

    - Footer component:
        - Add social media links
        - Author of the document.

- **Tours component:**
  
    - Import the data.json file in your app
    - Map the data that you have from the JSON file.
    - Each time you map the data it returns and renders a `<div>`, displaying data for every tour separated by a line manner.
    - Your `<div>` should only contain the name and an image for each tour.




## Submission Instructions:
- When your work is complete and ready for submission, push to the `class-16` branch.
- Create a pull request.
- Submit the pull request link.
- Merge `class-16` with the main branch.
- What observations or questions do you have about what you’ve learned so far?
- How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?