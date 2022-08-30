import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Header from '../Header.js';
import Nav from '../Nav.js';

function Article(props) {
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}
function Create(props) {
    return <article>
        <form onSubmit={e => {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            props.onCreate(title, body);
        }}>
            <p><input type="text" name="title" placeholder="title" /></p>
            <p><textarea name="body" placeholder="body"></textarea></p>
            <p><input type="submit" value="Create"></input></p>
        </form>
        <h2>Create</h2>
    </article>
}
function Update(props) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return <article>
        <form onSubmit={e => {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            props.onUpdate(title, body);
        }}>
            <p><input type="text" name="title" placeholder="title" value={title} onChange={e => {
                setTitle(e.target.value);
            }} /></p>
            <p><textarea name="body" placeholder="body" value={body} onChange={e => {
                setBody(e.target.body);
            }}></textarea></p>
            <p><input type="submit" value="Update"></input></p>
        </form>
        <h2>Update</h2>
    </article>
}

function SimpleCRUD() {
    // const _mode = useState('WELCOME');
    // const mode = _mode[0];
    // const setMode = _mode[1];
    const [mode, setMode] = useState('WELCOME'); // 위 세줄과 같은 코드
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        { id: 1, title: 'html', body: 'html is...' },
        { id: 2, title: 'css', body: 'css is...' },
        { id: 3, title: 'js', body: 'js is...' }
    ]);
    let content = null;
    let contextControll = null;
    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello, WEB"></Article>
    } else if (mode === 'READ') {
        let title, body = null;
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>
        contextControll = <>
            <li><a href={'/update/' + id} onClick={e => {
                e.preventDefault();
                setMode('UPDATE');
            }}>Update</a></li>
            <li><Button variant="outlined" onClick={() => {
                const newTopics = []
                for (let i = 0; i < topics.length; i++) {
                    if (topics[i].id !== id) {
                        newTopics.push(topics[i]);
                    }
                }
                setTopics(newTopics);
            }}>Delete</Button></li>
        </>
    } else if (mode === 'CREATE') {
        content = <Create onCreate={(_title, _body) => {
            const newTopic = { id: nextId, title: _title, body: _body }
            const newTopics = [...topics];
            newTopics.push(newTopic);
            setTopics(newTopics);
            setMode('READ');
            setId(nextId);
            setNextId(nextId + 1);
        }}></Create>
    } else if (mode === 'UPDATE') {
        let title, body = null;
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Update title={title} body={body} onUpdate={(title, body) => {
            const newTopics = [...topics]
            const updatedTopic = { id: id, title: title, body: body }
            for (let i = 0; i < newTopics.length; i++) {
                if (newTopics[i].id === id) {
                    newTopics[i] = updatedTopic;
                    break;
                }
            }
            setTopics(newTopics);
            setMode('READ');
        }}></Update>
    }
    return (
        <>
            <Header title="React" onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>
            <Nav topics={topics} onChangeMode={(_id) => {
                setMode('READ');
                setId(_id);
            }}></Nav>
            {content}
            <ul>
                <li>
                    <a href="/create" onClick={event => {
                        event.preventDefault();
                        setMode('CREATE');
                    }}>Create</a>
                </li>
                {contextControll}
            </ul>
        </>
    );
}

export default SimpleCRUD;
