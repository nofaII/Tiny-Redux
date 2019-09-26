import React from 'react';

const Buttons = ({readyForResult, onAddOperators, onAddOperator, onDisplayResult, currentExpression, operators, calculating, onDeleteOperator}) => {
    return (
        <div>
            {readyForResult ? 
                <div>
                    {calculating ? 
                    <div>
                        calculating...
                    </div> 
                    :
                    <div>
                        <button onClick={onAddOperators}>Add an operator</button>
                        <button onClick={onDeleteOperator}>Delete an operator</button>
                        <button onClick={() => onDisplayResult(currentExpression)}>Display result</button>
                    </div>}
                </div>
                 :
                <div>
                    {operators.map(i => (
                        <button key={i} onClick={() => onAddOperator(i)}>
                            {i}
                        </button>
                    ))}
                </div>
            }
        </div>
    )
}

export default Buttons;