import React from 'react';




const Card = (props) => {
    return (
        <>
            <div className="hexagon">
                <div className="shape">
                    <i className={props.icon} />
                </div>
            </div>
        </>
    )
}

export default Card;