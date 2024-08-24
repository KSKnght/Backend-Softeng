import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export const addProject = async (req, res) => {
    try {
        await prisma.project.create({
            data: {
                type: req.body.projType,
                projectAddress: req.body.address,
                startDate: req.boy.sDate,
                endDate: req.boy.eDate,
                client: {
                    connect: {
                        id: req.body.clientID
                    }
                },
                progress: 'NOT_STARTED'
            }
        })
    } 
    catch {

    }
}

export const editProject = async (req, res) => {
    try {
        await prisma.project.update({
            where: {
                id: req.body.projID
            },
            data: {
                projectAddress: req.body.address,
                startDate: req.body.sDate,
                endDate: req.body.eDate
            }
        })
    }
    catch {

    }
}

export const updProjProgress = async (req, res) => {
    try {
        await prisma.project.update({
            where: {
                id: req.body.projID
            },
            data: {
                progress: req.body.progress
            }
        })
    }
    catch {

    }
}

export const readProject = async (req, res) => {
    const display = await prisma.project.findMany({})

    res.status(200).json(display);
}