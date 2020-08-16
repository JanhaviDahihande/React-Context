import React from 'react'
import { useDataLayer } from './DataLayer';
import './Header.css';

function Header() {
    const [{basket}] = useDataLayer(); //state => needed here, dispatch => not needed here
    return (
        <div className="header">
            <h1>Header</h1>
            <h2>In basket: {basket.length}</h2>
        </div>
    )
}

export default Header
