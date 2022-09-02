import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'tester1',
            email: 'tester@gmail.com'
        },
        {
            id: 2,
            username: 'teste2',
            email: 'tester2@example.com'
        },
        {
            id: 3,
            username: 'teste3',
            email: 'teste3@example.com'
        }
    ];

    return (
        <div>
            {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}
            {
                users.map(user => (
                    <User user={user} key={user.id}></User>
                ))
            }
        </div>
    );
}

export default UserList;