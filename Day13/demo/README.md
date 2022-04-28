# Databases:

## Getting Started:
1.  Creating the database
   - in terminal: make sure the sql server is running
   - `psql`
   - `CREATE DATABASE databasename;`
   - `\l` will list the databases
   - `\q` to quit psql

2. Creating the table
    - create a `schema.sql` file in my project
```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```
3. Connecting the database with the table
    - `psql demo2` to connect to my db
    - `\d` to describe the table
    - `\q` to quit
    - `psql -d demo2 -f schema.sql`

4. Write qureis in my server:
    - `npm install pg`
    - In `index.js`:
```js
const url="postgres://username:password@localhost:5432/databaseName" // store it in the .env file
// create a new client instance
const { Client } = require('pg')
const client = new Client(url)
// connect to db
client.connect().then(() => {

    app.listen(PORT, () => {
        console.log(`Server is listening ${PORT}`);
    });
})
```
  - use `client.query()` to do CRUD


## Resources:
- [psql Commands](https://www.geeksforgeeks.org/postgresql-psql-commands/)