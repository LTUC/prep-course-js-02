# Day17

## React Router [Doc](https://reactrouter.com/docs/en/v6/getting-started/installation)
1. `npm install react-router-dom@6`
2. in src/index.js:
```js
import { BrowserRouter } from "react-router-dom";


  <BrowserRouter>
      <App />
    </BrowserRouter>
```
3. In src/App.js:
```js
import { Routes, Route } from "react-router-dom";
// inside return:
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/> }/>
      </Routes>

```

4. Adding a Navbar:
```js
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <Link to="/about">About</Link>
            </nav>
            <nav>
                <Link to="/"> Home</Link>
            </nav>
            <nav>
                <Link to="/contact"> Contact Us</Link>
            </nav>
        </>
    )
}
```