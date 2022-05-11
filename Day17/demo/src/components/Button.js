import { useState } from "react"


export default function Button(props) {

    const [isLogged, setIsLogged] = useState(false);
    const [mode, setMode] = useState("pink");

    console.log("Is the user logged in?", isLogged);

    function login() {
        // alert("you are logged in")
        // update the state:
        // setIsLogged(true);
        setIsLogged(!isLogged);
        props.welcome(isLogged);
    }

    function handleMode() {
        if (mode == "pink") {
            setMode("black")
        } else {
            setMode("pink");
        }
    }

    return (
        <>
            {/* ternery if */}
            <button style={{ backgroundColor: mode, color: "blue" }} onClick={login}>
                {isLogged ? "Log Out" : "Log In"}
            </button>
            {/* {logical operator} */}

            {/* {
                isLogged && <button onClick={login}>Log out</button>
            }
            {
                !isLogged && <button onClick={login}>Log In</button>
            } */}

            <button onClick={handleMode}>Change Mode</button>

        </>
    )
}


// export default Button;
