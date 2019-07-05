import React from 'react';
import { changeName, changeStatus } from '../actions';

import '../App.css';

const Form = ({ changeName, changeStatus }) => {
   
    return (
        <div className="App">
            <form>
                <label>
                    name:
                    <input onChange={e => changeName(e.target.value)} />
                </label>
                <label>
                    status:
                    <input onChange={e => changeStatus(e.target.value)} />
                </label>
                <button type="submit">register</button>
            </form>
        </div>
    )
}

export default Form;