import axios from 'axios';

export default
    axios.create({
        // baseURL: process.env.MIX_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });