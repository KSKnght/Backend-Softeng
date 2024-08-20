import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export const addProject = async (req, res) => {
    try {
        await prisma.project.create({
            
        })
    } 
    catch {

    }
}

export const editProject = async (req, res) => {
    res.send('Hi!');
}