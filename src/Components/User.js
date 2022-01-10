function User(props) {
    return (
        <div className="userBox">
            <div className="d-flex justify-center">
                <img className="userImg"
                     src={props.data3}
                     alt=""/>
                <div>
                <h2>Money: {props.data5}</h2>
                <h2>Products: {props.data4}</h2>
            </div>
            </div>
            <div className="d-flex wrap">
                {props.data2.map(x =>
                    <div>
                    {/*<h2>{x.p}</h2>*/}
                    <img className="itemImg" src={x.im} alt="" />
                    </div>
                 )}
                {/*jkjkj*/}
                {/*{props.data2}*/}
                </div>
        </div>
    )

}

export default User;