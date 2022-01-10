function Comp1 (props) {
    return (
        <div className="boxText">
            <h2>{props.text}</h2>
            <button onClick={props.addInfo} className="btnText" style={{backgroundColor: props.color}}/>
        </div>
    )
}

export default Comp1