import { response } from "express";
import * as service from "../service/course-service.js"


export async function createCourse(req, res) {
    try {
        const course = await service.createCourse(req.body);
        res.status(201).send(course);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

export async function getCourses(req, res) {
    try {
        const accounts = await service.getAccounts();
        return res.status(200).json(accounts);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

export async function getCoursesById(req, res) {
    try {
        const { courseId } = req.params;
        const course = await service.getCourseById(courseId);
        return res.status(200).json(course);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

export async function putCourseById(req, res) {
    try {
        service.checkAccount(req.body);
        const { userName } = req.params;
        const accByUserName = await service.getAccountByUserNameAndUpdate(userName, req.body);
        if(!accByUserName){
            return response.status(404).json({message:'Account not found'})
        }
        return res.status(200).send({message:'Account updated'});
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

export async function getAllCourses(req, res) {
    try {
        const courses = await service.getAllCourses();
        res.status(200).send(courses); 
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }
}

export async function getCoursesByAuthorId(req , res) {
    try {
        const {authorId} = req.params;
        const courses = await service.getCoursesByAuthorId(authorId);
        res.status(200).send(courses);
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }

} 