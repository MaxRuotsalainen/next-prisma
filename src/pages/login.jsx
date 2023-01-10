import Head from "next/head";
import Link from "next/link";
import withSession from "~/lib/Session";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default function Login({ all_users }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function handleLogin(formData) {
    const username = formData.username;
    const password = formData.password;

    //check the user if exist
    const checkUser = all_users.find((user) => user.username === username);

    if (!checkUser) {
      toast.error("This account is not registered! Sign up first...");
      return;
    }

    //matching the encrypted password and the set password

    const hashPassword = checkUser.password;
    const passwordMatch = await bcrypt.compare(password, hashPassword);

    //check if the password is match
    if (!passwordMatch) {
      toast.error("Your password is incorrect!");
      return;
    }

    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    reset();
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
      </Head>

        <Toaster position="top-center" reverseOrder={true} />
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white wrapper"
                  style={{ marginRight: 1 + "rem" }}
                >
                   <div className="card-body p-5 text-center box">
               
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <form
                        className="flex flex-col w-full space-y-3"
                        onSubmit={handleSubmit(handleLogin)}
                      >
                      <div className="form-outline form-white mb-4">
                        <label for="name" className="form-label">
                         Username
                        </label>
                        <input
                          className="form-control form-control-lg"
                            type="text"
                            name="username"
                            placeholder="Username"
                            {...register("username", { required: true })}
                            disabled={isSubmitting}
                          />
                          {errors.username && (
                            <span className="text-xs text-gray-700">
                              Username is required.
                            </span>
                          )}
                        </div>
                        <div className="form-outline form-white mb-4">
                        <label for="name" className="form-label">
                         Password
                        </label>
                        <input
                          className="form-control form-control-lg"
                            type="password"
                            name="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                            disabled={isSubmitting}
                          />
                          {errors.password && (
                            <span className="text-xs text-gray-700">
                              Password is required.
                            </span>
                          )}
                        </div>
                        <button
                          className="px-5 py-3 border border-yellow-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Login
                        </button>
                        <div className="flex flex-row items-center w-full space-x-2">
                          <hr className="border border-gray-300 opacity-30 w-full" />
                          <span className="text-gray-600">or</span>
                          <hr className="border border-gray-300 opacity-30 w-full" />
                        </div>
                        <Link
                          href="/signup"
                          className="text-center px-5 py-3 border border-yellow-300"
                        >
                          Create Account
                        </Link>
                      </form>
                    </div>
                  </div>
             
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </>
  );
}

export const getServerSideProps = withSession(async function ({ req }) {
  //check the user session
  const user = req.session.get("user");

  if (user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  //find all users from the database
  const all_users = await prisma.user.findMany();

  return {
    props: {
      all_users,
    },
  };
});
