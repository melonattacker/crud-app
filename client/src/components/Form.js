import React from 'react';
import axios from 'axios';
import '../App.css';

const ROOT_ENDPOINT = 'http://localhost:3001';

const Form = ({ name, status, changeName, changeStatus, initializeForm}) => {
   const createUser = e => {
       e.preventDefault();
       axios({
           method: 'post',
           url: ROOT_ENDPOINT + '/user/create',
           data: {
               name: name,
               status: status
           }
       })
       .then(res => {
           console.log(res);
           initializeForm();
           if(res.statusText === "OK") {
               alert('登録が完了しました')
           }
       })
       .catch(err => {
           console.log(err);
           alert('登録に失敗しました')
        })
    }

    return (
        <div className="App">
            <form onSubmit={e => createUser(e)}>
                <label>
                    name:
                    <input value={name} onChange={e => changeName(e.target.value)} />
                </label>
                <label>
                    status:
                    <input value={status} onChange={e => changeStatus(e.target.value)} />
                </label>
                <button type="submit">register</button>
            </form>
        </div>
    )
}

export default Form;