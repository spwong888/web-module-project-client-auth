import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const token = localStorage.getItem("token");
    const { push } = useHistory();

    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:5000/api/logout", {
                headers: {
                    authorization: token,
                },
            });
            localStorage.removeItem("token");
            push("/login");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <div>
            <h1>Logout</h1>
        </div>
    );
};

export default Logout;