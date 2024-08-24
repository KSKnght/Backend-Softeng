import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const addClients = async (req, res) => {
    try {
        await prisma.client.create({
            data: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                middlename: req.body.middlename,
                emailAdd: req.body.eAdd,
                contactNum: req.body.conNum
            }
        })
    }
    catch {
    }
}

export const editClient = async (req, res) => {
    try { 
        await prisma.client.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                middlename: req.body.middlename,
                emailAdd: req.body.eAdd,
                contactNum: req.body.conNum
            }
        })
    }
    catch {

    }
}

export const readClients = async (req, res) => {
    const all = await prisma.client.findMany({})

    res.status(200).json(all)
}

export const readOneClient = async (req, res) => {
    const client = await prisma.client.findFirst({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(client)
}
