import React from 'react';

function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => { onToggle(user.id) }}
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={() => { onRemove(user.id) }}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}
            {
                users.map(user => (
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}></User>
                ))
            }
        </div>
    );
}

export default UserList;