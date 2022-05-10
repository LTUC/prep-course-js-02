
function Welcome(props) {
    console.log(props);
    return (
        <>
            <p style={{ color: props.favColor || "black" }}>Welcome {props.name}</p>
            <p>{props.name} favorite food is {props.favFood}</p>
        </>
    )
}


export default Welcome;