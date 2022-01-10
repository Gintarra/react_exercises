const Photo = (props) => {
    return (
        <div>
            <h5>{props.text}</h5>
            <img className="imgSize" src={props.image}
                 alt=""/>
        </div>
    )
}

export default Photo