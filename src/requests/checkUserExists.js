import axios from 'axios';

const checkUserExists = (username) => {
    if (!username) {
        return {success: false, message: 'Please enter a username to query,'};
    }
    return axios
    .get(`http://127.0.0.1:3000/users?username=${username}`)
    .then((response) => {
        return {success: true, user: response.data};
    })
    .catch(err => {
        return {success: false, message: err};
    });
};

export default checkUserExists;