import { response } from 'express';
import { Acc } from '../models/accModel.js'

export async function createAccount(input) {
    const nameRegex = "/^[A-Za-z]+$/";
    if(!input.username) throw new Error("username must contain only letters");
    if(!input.email) throw new Error("username is empty");
    if(!input.password) throw new Error("password is empty");
    if(!input.passwordConfirmation) throw new Error("password confirmation is empty");
    if(input.password != input.passwordConfirmation) throw new Error("password and password confirmation must be identical");
    const newAcc = {
        username:input.username,
        email:input.email,
        password:input.password
    };
    try {
        const existingEmail = await Acc.exists({email: input.email});
        if (existingEmail){
            return {message: 'Service: Email already registered'};
        }
        try {
            await Acc.create(newAcc);
            return {message: 'User succesfuly created'};
        } catch (error) {
            return {message: 'An error occurred when trying to create account'}
        }
    } catch (error) {
        return console.log(error);
    }
}

export async function checkEmail(email) {
    try {
        const existingEmail = await Acc.exists({email});
        if (existingEmail){
            return {message: true};
        }
        return {message: false}
    } catch (error) {
        return console.log(error);
    }
}

export async function loginAccount(email, password) {
    const account = await Acc.findOne({email, password});
    return {email: account.email, _id: account._id, username: account.username};
}