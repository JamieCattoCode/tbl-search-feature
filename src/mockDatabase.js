import bcrypt from 'bcryptjs';

const users = [
    {
        username: 'JamieCatto',
        password: '$2a$10$9RhEWRKSmn4FLInrQRqvVOPrsP8wBThstuddlpbUuktTVq52ajy6u' // helloworld
    },
    {
        username: 'brunoferno8',
        password: '$2a$10$9krn0Rhek111i8B0pG.EOuQ2oyCZtU6xAVz8Het/m0rHFABD4xwru' //penmerchant123
    }
]

const validateUser = (details) => {
    const userByName = users.find((user) =>
    user.username === details.username);
    // console.log(bcrypt.compareSync(details.password, userByName.password));
    if (!userByName) {
        return {status: false, message: 'Couldn\'t find username.'}
    } else if (bcrypt.compareSync(details.password, userByName.password)) {
        return {status: true, message: `${details.username} logged in.`};
    } else {
        return {status: false, message: `Authentication failed.`};
    }
}

const addUser = (details) => {
    return users.push(details);
}

export {users, validateUser, addUser};