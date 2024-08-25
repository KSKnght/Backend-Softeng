import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// create the phase then atuo connect to project
export const addPhase = async (req, res) => {
    await prisma.phase.create({
        data: {
            priority: req.body.priority, //1 being highest
            project: {
                connect: {
                    id: Number(req.params.id)
                }
            },
            phaseName: req.body.phaseName,
            progress: 'NOT_STARTED'
        }
    })
}

export const editPhase = async (req, res) => {
    await prisma.phase.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            priority: req.body.priority,
            phaseName: req.body.phaseName
        }
    })
}

export const removePhase = async (req, res) => {
    await prisma.phase.delete({
        where: {
            id: Number(req.params.id)
        }
    })
}

// update status of phase if task is complete
export const statusPhase = async (req, res) => {
    await prisma.phase.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            progress: req.body.progress
        }
    })
}


// loadup na tanan tasks, mat, and subcon diri
export const readOnePhase = async (req, res) => {
    const data = await prisma.phase.findFirst({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(data);
}

// loadup na tanan tasks, mat, and subcon diri
export const projectPhase = async (req, res) => {
    const data = await prisma.phase.findMany({
        where: {
            projectID: Number(req.params.id)
        }
    });

    res.status(200).json(data)
}