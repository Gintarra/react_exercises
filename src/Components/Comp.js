function Comp(props) {
    return (
        <div className="boxText">
            <h2 style={{color: props.color}}>{props.text}</h2>
        </div>
    )
}

export default Comp