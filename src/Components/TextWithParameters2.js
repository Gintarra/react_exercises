const TextWithParameters2 = (props) => {
    const divStyle = {
        height: props.arr2.height + "px",
        width: props.arr2.width + "px",
        color: props.arr2.color,
        border: 'solid 2px black'
    }

    console.log(divStyle)
    return (
        <div style={divStyle}>
            <h2 >{props.arr2.text}</h2>
        </div>
    )
}

export default TextWithParameters2