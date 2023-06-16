import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { signedInState, pageState } from './state.js';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signedIn, setSignedIn] = useRecoilState(signedInState);
    const [page, setPage] = useRecoilState(pageState);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            setSignedIn(true);
        } else {
            // エラー処理
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <input type="submit" value="Sign Up" />
            <p>
                サインインに戻る:
                <a href="#" onClick={() => setPage('signin')}>
                    サインインへ
                </a>
            </p>
        </form>
    );
};

export default SignUp;
