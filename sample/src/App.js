import React, { useRef, useState } from 'react';
import './App.css';
import CreateUser from './day004/CreateUser';
import UserList from './day004/UserList';

function App() {
  // 입력 받는 인풋 관리
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  // 유저목록 관리
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  // 새 유저 등록 기능
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    // setUsers(users.concat(user)); 
    // concat으로도 가능

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }

  return (
    <div className="App">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
