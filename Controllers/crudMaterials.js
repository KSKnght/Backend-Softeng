import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// connect nlng daan ang supplier diri upon creation sa materials
export const createMaterials = async (req, res) => {
    await prisma.materials.create({
        data: {
            supplier: {
                connect: {
                    id: req.body.supplierId,
                }
            },
            name: req.body.matName
        }
    })
}

export const editMaterials = async (req, res) => {
    await prisma.materials.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            name: req.body.matName,
            supplier: {
                connect: {
                    id: req.body.supplierId,
                }
            }
        }
    })
}

// for project overview
export const removeMaterialsProject = async (req, res) => {

}

// for project overview
export const connectMaterialsProject = async (req, res) => {

}


export const showMaterials = async (req, res) => {
    const data = await prisma.materials.findMany({})

    res.status(200).json(data)
}

