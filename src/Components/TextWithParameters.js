const TextWithParameters = (props) => {
    const h = props.height + "px"
    const w = props.width + "px"
    const c = props.color
    return (
    <div style={{height: h, width: w, border: props.color + " solid 3px", margin: '10px'}}>
        <h2 style={{color: c}}>{props.text}</h2>
    </div>
    )
}

export default TextWithParameters