import { withIronSession } from "next-iron-session";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function handler(req, res, session) {





  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  function logoutRoute(req, res, session) {
    req.session.destroy();
    res.send({ ok: true });
  }
  const user = await prisma.user.findUnique({
      where: { username: body.first },
    });
  if (!user) {
    return "User does not exist";
  }

  const result = await prisma.user.delete({
      where: { username: body.first },
    }
    
    );   
  

    
    
 
  
  // Found the name.
  // Sends a HTTP success code
     

}


export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "myapp_cookiename",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
