import Head from "next/head";
import withSession from "~/lib/Session";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function SignUp({ all_users }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function handleSignUp(formData) {
    //check if the user is already exist
    const userExist = all_users.some(
      (user) => user.username === formData.username
    );

    if (userExist) {
      toast.error("This account is already exist!");
      return;
    } 

    //create or register new user
    await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    reset();
    router.push("/login");
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
      </Head>
      <div >
        <Toaster position="top-center" reverseOrder={true} />
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ marginRight: 1 + "rem" }}
                >
                   <div class="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <form onSubmit={handleSubmit(handleSignUp)}>
                      <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                      <p className="text-white-50 mb-5">
                        Fill the information below
                      </p>
                      <div className="form-outline form-white mb-4">
                        <label for="name" className="form-label">
                         Avatar
                        </label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="avatar"
                          placeholder="Avatar URL"
                          {...register("avatar", { required: true })}
                          disabled={isSubmitting}
                        />
                        {errors.avatar && (
                          <span className="text-xs text-gray-700">
                            Avatar URL is required
                          </span>
                        )}
                      </div>
                      <div className="form-outline form-white mb-4">
                        <label for="name" className="form-label">
                          Full name
                        </label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          {...register("name", { required: true })}
                          disabled={isSubmitting}
                          pattern="^[a-zA-Z ]*$"
                        
                        />
                        {errors.name && (
                          <span className="text-xs text-gray-700">
                            Full Name is required
                          </span>
                        )}
                      </div>
                      <div className="form-outline form-white mb-4">
                        <label for="name" className="form-label">
                          username
                        </label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="username"
                          placeholder="Username"
                          {...register("username", { required: true })}
                          disabled={isSubmitting}
                          pattern="^[a-zA-Z0-9._]{3,30}$"
                       
                        />
                        {errors.username && (
                          <span className="text-xs text-gray-700">
                            Username is required
                          </span>
                        )}
                      </div>
                      <div className="form-outline form-white mb-4">
                        <label for="name" className="form-label">
                         Birthday
                        </label>
                        <input
                          className="form-control form-control-lg"
                          type="date"
                          name="birthday"
                          placeholder="birthday "
                          {...register("birthday", { required: true })}
                          disabled={isSubmitting}
                          pattern="^/^\d{4}-\d{2}-\d{2}$/"
                        />
                        {errors.birthday && (
                          <span className="text-xs text-gray-700">
                            birthday is required
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
                          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}"
                         
                        />
                        {errors.password && (
                          <span className="text-xs text-gray-700">
                            Password is required
                          </span>
                        )}
                      </div>
                      <div className="form-outline form-white mb-4">
          
                        <p className="mb-0">
                          Already have am account?{" "}
                          <Link   href="/login" className="text-white-50 fw-bold">
                            Login
                          </Link>
                        </p>
                        <div className="form-outline form-white mb-4">
                          <button
                            className="btn btn-outline-light btn-lg px-5"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
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

