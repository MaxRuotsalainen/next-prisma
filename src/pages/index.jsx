import Head from "next/head";
import withSession from "~/lib/Session";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import logout from "./api/logout";

const prisma = new PrismaClient();

export default function Home({ account }) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/login");
  }

  return (
    <>
      <Head>
        <title>Home | {account.name}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>

      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center w-full max-w-sm space-y-3">
          <div className="container d-flex justify-content-center">
            <div className="card2 p-3 py-4">
              <div className="text-center">
                <img
                  className="rounded-circle"
                  src={account.avatar}
                  alt={account.name}
                />
                <h1>
                  Welcome! <span className="font-bold">{account.name}</span>
                </h1>
                <h1>
                  Birthday:<span className="font-bold">{account.birthday}</span>
                </h1>
                <h1>
                  Username:{" "}
                  <span className="font-bold">{account.username}</span>
                </h1>

                <div className="row mt-3 mb-3">
                  <div className="col-md-4">
                    <button class="btn-pink">
                      <span class="btn-gradient">
                        <i class="fa fa-close"></i>
                      </span>
                      <span class="btn-text">
                        {" "}
                        <Link href="/deleteacc" className="text-white-2 ">
                          Delete account
                        </Link>
                      </span>
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button class="btn-gray">
                      <span class="btn-gradient">
                        <i class="fa fa-gear"></i>
                      </span>
                      <span class="btn-text">
                        {" "}
                        <Link href="/updatepassword" className="text-white-2 ">
                          Update pw
                        </Link>
                      </span>
                    </button>
                  </div>
                </div>

                <hr className="line" />

                <div className="profile mt-5">
                  <button
                    className="w-full px-5 py-3 border border-yellow-300 focus:outline-none"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  //check the user session
  const user = req.session.get("user");
  if (!user) {
    logout();
  }
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  //update password

  //get the user from the database
  const account = await prisma.user.findFirst({
    where: {
      username: req.session.get("user").username,
    },
  });

  return {
    props: {
      account,
    },
  };
});
