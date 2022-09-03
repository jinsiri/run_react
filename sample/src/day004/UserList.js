import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    // useEffect는 마운트(컴포넌트 최초 로드)/언마운트(컴포넌트 나갈 시) 시 사용
    // 마운트 시 외부 api요청하거나 라이브러리 사용, setInterval등 반복 작업 주로 함
    // 언마운트 시 반복작업 클리어, 라이브러리 인스턴스 제거 작업

    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     return () => {
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     }
    // }, []);

    // 1) useEffect의 두번째 인자인 배열(deps)이 비어 있을 경우 
    // 컴포넌트가 처음 나타날 때에만 useEffect에 등록한 함수가 호출됨
    // 배열이 비어있을 경우 컴포넌트가 사라질 때 cleanup 함수 호출됨

    // useEffect(() => {
    //     console.log('user 값이 설정됨');
    //     console.log(user);
    //     return () => {
    //         console.log('user 가 바뀌기 전..');
    //         console.log(user);
    //     };
    // }, [user]);

    // 2) deps 안 특정 값이 있으면 처음 마운트 될 때, 지정한 값 바뀔 때, 언마운트 시, 값이 바뀌기 직전 모두 호출.
    // useEffect 안에서 사용하는 상태나 props가 있다면 deps에 넣어주어야 함. 안 넣으면 useEffect에 등록한 함수 실행 시
    // 최신 props 상태를 가리키지 않음

    useEffect(() => {
        console.log(user);
    });

    // 3) deps 파라미터 생략 시 컴포넌트 리렌더링 될 때마다 호출

    // 리액트 컴포넌트는 기본적으로 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링.\
    // 실제 DOM에 변화가 반영되는 것은 바뀐 내용이 있는 컴포넌트에만. Virtual DOM에는 모든 걸 다 렌더링.

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