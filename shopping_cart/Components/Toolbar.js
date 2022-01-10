import React from 'react';

const Toolbar = ({navigation, index}) => {
    function amount() {
        let sum = 0;
        index.map(x => sum += x.quantity)
        return sum;
    }

    return (
        <div className="d-flex space-ev" style={{backgroundColor: "grey"}}>
            <div className="toolbar" onClick={() => navigation(1)}>HOME</div>
            <div className="toolbar" onClick={() => navigation(2)}>SHOP</div>
            <div className="toolbar" onClick={() => navigation(3)}>CART({amount()})</div>
        </div>
    );
};

export default Toolbar;