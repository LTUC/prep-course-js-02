import Button from "./Button";
import { useState } from "react";

function Home() {

    const [message, setMessage] = useState("Stranger");

    function handleClick() {
        alert("Just like magic!")
    }


    function handleSubmit(event) {
        event.preventDefault();
        alert("Form is submitted")
    }

    function welcome(isLogged) {
        // depending on the state, dispaly a welcome message
        // console.log("Recieved in Home component", isLogged);
        !isLogged ? setMessage("Back") : setMessage("Stranger");
    }



    return (
        <>
            <p>Home page</p>
            <p>Welcome {message}</p>
            <Button welcome={welcome} />
            {/* <button onClick={handleClick}> Click me!</button>

            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form> */}
        </>
    )
}

export default Home;