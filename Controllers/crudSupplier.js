import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const readSupplier = async (req, res) => {
    const display = await prisma.supplier.findMany({})

    res.status(200).json(display)
}

export const addSupplier = async (req, res) => {
    try {
        await prisma.supplier.create({
            data: {
                supplierName: req.body.supplierName
            }
        })
    }
    catch {

    }
}

export const editSupplier = async (req, res) => {
    try {
        await prisma.supplier.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                supplierName: req.body.supplierName
            }
        })
    }
    catch {

    }

}

export const removeSupplier = async (req, res) => {
    try {
        await prisma.supplier.delete({
            where: {
                id: Number(req.params.id)
            }
        })
    }
    catch {

    }
}
