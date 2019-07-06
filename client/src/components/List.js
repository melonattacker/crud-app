import React from 'react';
import axios from 'axios';

const ROOT_ENDPOINT = 'http://localhost:3001';

const List = ({ users, isFetching, requestData, receiveDataSuccess, receiveDataFailed }) => {
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
                                </li>
                            ))}
                        </ul>
                      </div>
            }
        </div>
    )
}

export default List;