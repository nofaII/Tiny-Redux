import React from 'react';

const Results = ({results}) => {
    return (
        <div>
            {results.map(i => {
                return <p key={i}>{i}</p>
            })}
        </div>
    )
}

export default Results;