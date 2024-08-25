import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const addTask = async (req, res) => {
    await prisma.phaseTasks.create({
        data: {
            phase: {
                connect: {
                    id: Number(req.params.id)
                }
            },
            taskName: req.body.taskName,
            description: req.body.description,
            progress: 'NOT_STARTED',
            deadline: req.body.deadline
        }
    })
}

export const editTask = async (req, res) => {
    await prisma.phaseTasks.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            taskName: req.body.taskName,
            description: req.body.description,
            deadline: req.body.deadline
        }
    })
}

export const statusTask = async (req, res) => {
    await prisma.phaseTasks.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            progress: req.body.progress
        }
    })
}

export const removeTask = async (req, res) => {
    await prisma.phaseTasks.delete({
        where: {
            id: Number(req.params.id)
        },
    })
}

// connect materials to tasks
export const connectMaterialsTasks = async (req, res) => {
    //find if entry exists
    var materials = await prisma.materials.findFirst({
        where: {
            name: req.body.matName,
            supplierName: req.body.supplierName
        }
    })

    //if returned empty then create
    if (materials == null) {
        await prisma.materials.create({
            data: {
                supplier: {
                    connect: {
                        supplierName: req.body.supplierName
                    }
                },
                name: req.body.matName,
            }
        })

        materials = await prisma.materials.findFirst({
            where: {
                name: req.body.matName,
                supplierName: req.body.supplierName
            }
        })
    }

    //if exists then connect to tasks
    await prisma.taskMat.create({
        data: {
            materials: {
                connect: {
                    materials: materials.id,
                }
            },
            qty: parseFloat(req.body.qty),
            unit: req.body.unit
        }
    })

    const taskMat = await prisma.taskMat.findFirst({
        where: {
            matId: materials.id
        }
    })

    await prisma.phaseTasks.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            taskMat: {
                connect: {
                    id: taskMat.id
                }
            }
        }
    })
}

// disconnect materials from tasks
export const removeMaterialsTasks = async (req, res) => {
    var materials = await prisma.materials.findFirst({
        where: {
            name: req.body.matName,
            supplierName: req.body.supplierName
        }
    })

    const taskMat = await prisma.taskMat.findFirst({
        where: {
            matId: materials.id
        }
    })

    await prisma.phaseTasks.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            taskMat: {
                disconnect: {
                    id: taskMat.id
                }
            }
        }
    })
}

// connect subcon to tasks
export const connectSubcon = async (req, res) => {
    await prisma.phaseTasks.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            subcon: {
                connectOrCreate: {
                    Name: req.body.subCon
                }
            }
        }
    })
}

// disconnect subcon to tasks
export const removeSubconTask = async (req, res) => {
    await prisma.phaseTasks.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            subcon: {
                disconnect: {
                    Name: req.body.subCon
                }
            }
        }
    })
}