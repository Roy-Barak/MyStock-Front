import ReactCardFlip from "react-card-flip";
import React, {useState} from "react";
import "./tabStock.css"
import Symbol from "./symbol";

export default function TabStock({children, stock, isItSearch}) {
    const [isFlipped, setIsFlipped] = useState(false)
    const [inputStock, setInputStock] = useState()

    function flipCard() {
        setIsFlipped(!isFlipped)
    }

    function handleInput(event) {
        setInputStock(event.target.value.toUpperCase())
    }

    function handleClick() {
        flipCard()


    }

    return (
        <>

            <ReactCardFlip
                flipDirection="horizontal"
                isFlipped={isFlipped}
            >
                <div className={!isItSearch ? "card" : "card-search"} onMouseEnter={!isItSearch ? flipCard : undefined}>
                    {!isItSearch ?
                        children :
                        <div className="card-search">
                            <h3 className="card-search-title">Search for Stock</h3>
                            <input className="card-search-input" placeholder="Enter stock symbol" type="text" required
                                   value={inputStock}
                                   onChange={handleInput}/>
                            <button className="card-search-button" onClick={handleClick}>Search
                            </button>
                        </div>
                    }
                </div>

                <div className={!isItSearch ? "card card-back" : "card-search card-search-back"}
                     onMouseLeave={flipCard}>
                    {!isItSearch ?
                        <Symbol name={stock}/> :
                        <Symbol name={inputStock}/>
                    }
                </div>


            </ReactCardFlip>
        </>
    )
}