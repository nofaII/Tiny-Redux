import React from 'react';

const Inputs = ({onChangeValue, currentExpression}) => {
    return (
        <div style={{marginBottom: "10px"}}>
            {currentExpression.map((item, id) => {
                return (
                    <div style={{display: "inline-block"}}>
                        {item.operator !== '' ? <span style={{margin: "10px"}}>{item.operator}</span> : null}
                        <input onChange={e => onChangeValue(e.target.value, id)} value={item.value} type="text" placeholder="type a number"/>
                    </div>
                    )
            })}
        </div>
    )
}

export default Inputs;