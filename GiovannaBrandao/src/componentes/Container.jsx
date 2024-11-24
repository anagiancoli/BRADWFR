import React from "react";

export function Container({ clickedArray, handleClick }) {
    return (
        <div className="board">
            {clickedArray.map((item, index) => {
                if (item === "") {
                    return (
                        <div 
                            key={index} 
                            className="container" 
                            onClick={() => handleClick(index)}
                        >
                            {item}
                        </div>
                    );
                } else {
                    return (
                        <div key={index} className="container clicado">
                            {item}
                        </div>
                    );
                }
            })}       
        </div>
    );
}
