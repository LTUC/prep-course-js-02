# Day07 Demo: 

## Problem Domain: 

* ASAC coffee house is a new cafe so they are updating their menu 
* There are alot of drinks that they can add to the menu and  it's too time-consuming to hand-code them each time   so They need a better and faster way.

* Each drink should has:
 - name
 - ingredients
 - an image
 - cold
 - hot 
 - price 

* TODO: dynamically generate drink objects using form data
* 
  
## Local Storage:
1. Saving drinks array of onbject to localstorage
```javascript
function saveData(data) {
    localStorage.setItem("drinks", data);
}
```
   * The error here was, setItem take a string as value, the data was not readable
   * The solution was, `let stringfiyData = JSON.stringify(data);`


2. Getting the data from the local storage
```js
function getData() {
    let retrievedData = localStorage.getItem("drinks");
}
```
  * The error: getItem return a string, not array of object
  * The soluction: `let arrayData = JSON.parse(retrievedData);`

3. Rendering this data from ls so it is not lost when refresh
   * The error: I can no longer access the methods
   * The solution: reinstantiation
   * The error: if the local storage is empty, so the getItem is returning null
   * The solution: `if (arrayData != null)`

## JSON:
* JavaScript Object Notation
* lightweight format used
   * storing data: as key, value pair
   * Transfering data between clients and servers
  