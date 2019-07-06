import React from 'react';
import axios from 'axios';

const ROOT_ENDPOINT = 'http://localhost:3001';

const List = ({ ustatus, users, isFetching, changeUstatus, requestData, receiveDataSuccess, receiveDataFailed }) => {
    const fetchData = () => {
        requestData();
        axios.get(ROOT_ENDPOINT + '/user')
        .then(res => {
            const _users = res.data;
            receiveDataSuccess(_users);
        })
        .catch(err => {
            console.log(err);
            receiveDataFailed();
        })
    }

    const deleteUser = (id) => {
        requestData();
        axios({
            method: 'delete',
            url: ROOT_ENDPOINT + '/user/delete',
            data: {
                id
            }
        })
        .then(res => {
            const _users = res.data;
            receiveDataSuccess(_users);
        })
        .catch(err => {
            console.log(err);
            receiveDataFailed();
        })
    }

    return (
        <div>
            {
                isFetching
                    ? <h2>Now Loading...</h2>
                    : <div>
                        <button onClick={() => fetchData()}>fetch</button>
                        <ul>
                            {users.map(user => (
                                <li key={user.id}>
                                    {`${user.name}: ${user.status}`}
                                    <input value={ustatus} onChange={e => changeUstatus(e.target.value)} />
                                    <button onClick={() => deleteUser(user.id)}>delete</button>
                                </li>
                            ))}
                        </ul>
                      </div>
            }
        </div>
    )
}

export default List;