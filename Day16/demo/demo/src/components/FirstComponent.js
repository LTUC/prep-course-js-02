

function FirstComponet(props) {
    let url = "https://www.erasmuslifebudapest.com/wp-content/uploads/2018/11/reactjs-thumb.jpg";
    let colorMode = "red";
    let altValue = "react JS"

    return (
        <>
            <p style={{ color: colorMode }}>Building our first react component</p>
            <img src={url} alt={altValue} />
        </>
    )
}

export default FirstComponet;