import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000';

    // getting the user name and room and emitting to server
    useEffect(() => {
        const data = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(data.name);
        setRoom(data.room);

        socket.emit('join', name, room, () => {});

        return () => {
            socket.disconnect();

            socket.off();
        };
    }, [ENDPOINT, location.search]);

    // listeting to message event from server
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    // function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(event) =>
                        event.key === 'Enter' ? sendMessage(event) : null
                    }
                />
            </div>
        </div>
    );
};

export default Chat;
