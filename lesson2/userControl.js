const express = require('express');

const accounts = [
    {
        id: 1,
        username: "Yae Miko",
        password: "123"
    },
    {
        id: 2,
        username: "Raiden Shogun",
        password: "123"
    },
    {
        id: 3,
        username: "Ahaitham",
        password: "123"
    }
]


// Get user by ID
exports.getUserById = (req, res) => {
    const user = accounts.find((item) => item.id == req.params.id);
    if (!user) {
        return res.status(404).json('User not found')
    }
    res.status(200).json(user)
}



// Create new user
exports.createUser = (req, res) => {
    const user = req.body;
    user.id = accounts.length + 1;
    accounts.push(user);
    res.status(201).json(accounts);
    console.log("Create user successfully")
}


//Update user
exports.updateUser = (req, res) => {
    const user = accounts.find((item) => item.id == req.params.id);
    if(!user) {
        return res.status(404).json("User nt found")
    }
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email
    user.password = req.body.password || user.password
    res.status(202).send(user)
}



//Delete user
exports.deleteUser = (req, res) => {
    const userIndex = accounts.findIndex((item) => item.id == req.params.id)
    console.log(userIndex)
    if(userIndex === -1){
        return res.status(404).send('User not found')
    }
    accounts.splice(userIndex, 1);
    console.log(accounts)
    res.status(203).send(accounts)
}