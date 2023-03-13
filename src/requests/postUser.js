import axios from "axios"

const postUser = (userDetails) => {
    if (!userDetails) {
        return {success: false, message: 'Please enter username, email, and password for the user.'}
    }
    return axios
    .request({
        url: 'http://127.0.0.1:3000/users',
        method: 'POST',
        data: userDetails, 
        crossOrigin: true})
    .then((response) => {
        return {success: true, response: response}
    })
    .catch(err => {
        return {success: false, message: err}
    })
}

export default postUser;