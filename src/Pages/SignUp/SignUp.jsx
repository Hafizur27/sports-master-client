import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">signup now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*[!@#$%^&*])(?=.*[A-Z])/
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">password must be six character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">please provide uppercase and special characters</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirm", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="file"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                  className="file-input file-input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-500">Photo URL is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="SignUp"
                  className="btn btn-primary "
                />
              </div>
            </form>
            <p>
              <small>
                Already have an account? <Link to="/logIn">Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
