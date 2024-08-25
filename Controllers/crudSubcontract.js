import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createSubcon = async (req, res) => { 
    try {
        await prisma.subCon.create({
            data: {
                Name: req.body.Name
            }
        })
    }
    catch {

    }
}

export const editSubcon = async (req, res) => {
    try {
        await prisma.subCon.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                Name: req.body.Name
            }
        })
    }
    catch{

    }
}

export const showAllSubcon = async (req, res) => {
    const display = await prisma.subCon.findMany({})

    res.status(200).json(display)
}
