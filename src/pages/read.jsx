import { PrismaClient } from '@prisma/client';
import Head from 'next/head'
const prisma = new PrismaClient();

export async function getStaticProps() {
  const accounts = await prisma.user.findMany();
  return {
    props: {
      accounts
    }
  };
}


export default function AccountsPage({ accounts }) {
  return (
    <>
           <Head>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
      </Head>
      
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="row">ID</th>
          <th scope="row">Avatar</th>
          <th scope="row">Name</th>
          <th scope="row">Username</th>
          <th scope="row">Birthday</th>
          <th scope="row">Password</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account) => (
          <tr key={account.id}>
            <td>{account.id}</td>
            <td> <img className="rounded-circle tablePic" src={ account.avatar } alt={ account.name } /></td>
            <td>{account.name}</td>
            <td>{account.username}</td>
            <td>{account.birthday}</td>
            <td>{account.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

