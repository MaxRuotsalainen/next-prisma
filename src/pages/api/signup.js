import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient()

export default async (req, res) => {

  const { avatar, name, username, birthday, password: rawPassword } = JSON.parse(req.body)
  const filename = `profile-${username}.jpg`;

  // Save the image to the project directory
 
  // Update the user's profile picture in the database

  const salt = await bcrypt.genSalt()
  const password = await bcrypt.hash(rawPassword, salt)

  const signup = await prisma.user.create({
    data: {
      avatar,
      name,
      username,
      birthday,
      password
    }
  })
  res.json(signup) 
}