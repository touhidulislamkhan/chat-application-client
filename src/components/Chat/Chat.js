/* eslint-disable react-hooks/exhaustive-deps */
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    console.log(name, room);

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const data = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(data.name);
        setRoom(data.room);

        socket.emit('join', name, room, () => {});

        return () => {
            socket.emit('disconnect');

            socket.off();
        };
    }, [ENDPOINT, location.search]);

    return <div>Chat</div>;
};

export default Chat;
