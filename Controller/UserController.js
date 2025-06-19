import prisma from "../DB/db.congig.js";

export const createUser = (req, res) => {
    const {name, email, password} = req.body;

    const findUser = await prisma.user.f
}