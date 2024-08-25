import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const readSubCon = async (req, res) => {
    const display = await prisma.subCon.findMany({})

    res.status(200).json(display)
}

export const createSubcon = async (req, res) => { 
    try {
        await prisma.subCon.create({
            data: {

            }
        })
    }
    catch {
        
    }
}

export const editSubcon = async (req, res) => { 

}

export const showAllSubcon = async (req, res) => { 

}
