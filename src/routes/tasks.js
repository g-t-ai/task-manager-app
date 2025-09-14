import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  const task = await prisma.task.create({ data: { title } });
  res.status(201).json(task);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const updated = await prisma.task.update({
    where: { id: Number(id) },
    data: { completed },
  });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await prisma.task.delete({ where: { id: Number(req.params.id) } });
  res.status(204).send();
});

export default router;
