import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('0');
    const [action, setAction] = useState('');
    const [currency, setCurrency] = useState('£');
    const validateCost = (e) => {
        e.preventDefault();
        let cost = document.getElementById('cost').value;
        var numbersOnly = /^[0-9]+$/;
        if(cost.match(numbersOnly))
        {
            if(parseInt(cost) > parseInt(remaining)) {
                document.getElementById('errMsg').innerHTML = "The value cannot exceed remaining budget: "+remaining;
                setCost(remaining);
                return;
            }
            setCost(cost);
            document.getElementById('errMsg').innerHTML = "";
        }
        else
        {
            document.getElementById('errMsg').innerHTML = "Only numbers are allowed";
        }
    }
    const submitEvent = () => {
            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    return (
        <div>
            <div className='row'>
    
            <div className="input-group mb-3">

                <div className="input-group-prepend" style={{ marginLeft: '0rem' }}>
                  <label className="input-group-text" htmlFor="inputGroupSelectCurrency">Currency</label>
                </div>
                  <select className="custom-select" id="inputGroupSelectCurrency" onChange={(event) => setCurrency(event.target.value)}>
                  <option value="$" name="$ Dollar">$ Dollar</option>
                  <option defaultValue value="£" name="£ Pound">£ Pound</option>
                  <option value="€" name="€ Euro">€ Euro</option>
                  <option value="₹" name="₹ Ruppee">₹ Ruppee</option>
                  </select>


                <div className="input-group-prepend" style={{ marginLeft: '20px' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '20px' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>

                  <div className="input-group-prepend" style={{ marginLeft: '20px' }}>
                <label className="input-group-text" htmlFor="cost">{currency}</label>
                  </div>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '0px' , width:'100px', size: 10}}
                        onChange={validateCost}>
                        {/* onChange={(event) => setCost(event.target.value)} */}
                        </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '20px' }}>
                        Save
                    </button>
                    <div id="errMsg" style={{color:'red',paddingTop:'10px',fontWeight:'bold',display:'block',width:'100%',textAlign:'center'}}></div>
                </div>
            </div>

        </div>
    );
};

export default AllocationForm;