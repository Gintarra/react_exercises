function Item({symbol}) {
    return (
        <div className="card">
            <img className="img" src={symbol} alt=""/>
        </div>
    )
}

export default Item