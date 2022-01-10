

function Account({money, moneyAmount}) {
    let value = 0;
    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target.value)
        value = event.target.value;

    }
    return (
        <div className="box">
            <h2 style={{textAlign: "center"}}>Money: {money}</h2>
            <h2 style={{marginBottom: 0, marginTop: "40px", textAlign: "center"}}>Amount:</h2>
            <input onChange={handleSubmit} type="number"/>
            <button className="btn" onClick={() => moneyAmount(value)}>SET BET</button>
        </div>
    )
}

export default Account