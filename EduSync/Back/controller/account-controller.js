import { response } from "express";
import * as service from "../service/account-service.js";

export async function createAccount(req, res) {
    try {
        const acc = await service.createAccount(req.body);
        res.status(201).send(acc);
    } catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}

export async function checkEmail(req, res) {
    try {
        const { email } = req.params;
        const checker = await service.checkEmail(email);
        res.status(201).send(checker);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

export async function loginAccount(req, res) {
    try {
        const {email, password} = req.body;
        const account = await service.loginAccount(email, password);
        console.log(account)
        res.status(200).send(account);
    } catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}

// export async function putAccountByusername(req, res) {
//     try {
//         service.checkAccount(req.body);
//         const { username } = req.params;
//         const accByusername = await service.getAccountByusernameAndUpdate(username, req.body);
//         if(!accByusername){
//             return response.status(404).json({message:'Account not found'})
//         }
//         return res.status(200).send({message:'Account updated'});
//     } catch (error) {
//         res.status(500).send({error: error.message});
//     }
// }