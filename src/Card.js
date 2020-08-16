import React from 'react'
import { useDataLayer } from './DataLayer'
import IPad from "./iPadPro.png";
import './Card.css';

function Card() {
    const [{}, dispatch] = useDataLayer(); //state, dispatch
    const addItem = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: 'iPad Pro'
        })
    }
    return (
        <div className="card">
            <img className="card__image" src={IPad}/>
            <h1 className="card__text">iPad Pro</h1>
            <button onClick={addItem}>Add to basket</button>
        </div>
    )
}

export default Card
