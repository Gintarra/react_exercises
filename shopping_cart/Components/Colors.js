import React from 'react';

const Colors = ({colorArr, sendData}) => {
    return (
        <div className="box justify-center">
            {colorArr.map((x, index) =>  <div key={index} className="colorCircle" style={{backgroundColor: x.hex }} onClick={() => sendData(x.hex)}>
            </div>)}
        </div>
    );
};

export default Colors;
