

function MemeList(props) {
    return (
        <>
            <img src={props.image} alt={props.alt} />
            <p>{props.title} </p>
            <p>================================</p>
        </>
    )
}


export default MemeList;