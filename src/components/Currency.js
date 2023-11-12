import React, { useContext, useState } from 'react';
import { AppProvider } from '../context/AppContext';

const Currency = () => {
    const [currency, setCurrency] = useState('£'); 
    return (
        <div className='alert alert-secondary'>
            <span>Currency</span>
            <select className="custom-select" id="inputGroupSelectCurrency" onChange={(event) => setCurrency(event.target.value)}>
                <option defaultValue value="£" name="£ Pound">£ Pound</option>
                <option value="$" name="$ Dollar">$ Dollar</option>
                <option value="€" name="€ Euro">€ Euro</option>
                <option value="₹" name="₹ Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;