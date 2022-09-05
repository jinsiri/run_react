import React, { useRef, useState, useMemo } from 'react';
import './App.css';
import CreateUser from './day004/CreateUser';
import UserList from './day004/UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수 세는 중...');
  return users.filter(user => user.active).length;
}

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
      email: 'tester@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'teste2',
      email: 'tester2@example.com',
      active: false
    },
    {
      id: 3,
      username: 'teste3',
      email: 'teste3@example.com',
      active: false
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

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    )
  }

  const count = useMemo(() => countActiveUsers(users), [users]);
  // useMemo 의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 되고 
  // 두번째 파라미터에는 deps 배열을 넣어주면 되는데, 이 배열 안에 넣은 내용이 바뀌면 등록한 함수를 호출해서 값을 연산해주고, 
  // 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용

  // useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면, useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용

  return (
    <div className="App">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
      <div>활성사용자 수 : {count}</div>
    </div>
  );
}

export default App;
