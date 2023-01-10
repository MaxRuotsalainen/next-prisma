import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { withIronSession } from "next-iron-session"
import { useRouter } from 'next/router'
export default async function handler(req, res) {





    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
   
    const user = await prisma.user.findUnique({
        where: { username: body.first },
      });
    if (!user) {
      return "User does not exist";
    }
    async function handleLogout() {
        await fetch('/api/logout', {
          method: 'POST',
          headers : { 
            'Content-Type': 'application/json',
          }
        })
        router.push('/login')
        }
    const result = await prisma.user.delete({
        where: { username: body.first },
      }
      );   
     
   
     
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.first} ${body.last}` })
  
}

  