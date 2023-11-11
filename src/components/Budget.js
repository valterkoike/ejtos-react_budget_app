import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        let newBudget = event.target.value;
        if(parseInt(newBudget) > 20000) {
            document.getElementById('errMsgBudget').innerHTML = "The value cannot exceed 20,000";
            setNewBudget(20000);
            return;
        }
        setNewBudget(newBudget);
        document.getElementById('errMsgBudget').innerHTML = "";
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
<div id="errMsgBudget" style={{color:'red',paddingTop:'10px',fontWeight:'bold',display:'block',width:'100%',textAlign:'center'}}></div>
</div>
    );
};
export default Budget;