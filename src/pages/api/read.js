const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async (req, res) => {
  const accounts = await prisma.user.findMany();
  res.json(accounts);
};