import React from 'react';

const Buttons = ({readyForResult, onAddOperators, onAddOperator,onDisplayResult, currentExpression, operators}) => {
    return (
        <div>
            {readyForResult ? 
                <div>
                    <button onClick={onAddOperators}>Add an operator</button>
                    <button onClick={() => onDisplayResult(currentExpression)}>Display result</button>
                </div>
                 :
                <div>
                    {operators.map(i => (
                        <button key={i} onClick={e => onAddOperator(i)}>
                            {i}
                        </button>
                    ))}
                </div>
            }
        </div>
    )
}

export default Buttons;