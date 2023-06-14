import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorImg from "../../assets/errorPage.json";
import { AiFillHome } from "react-icons/ai";

const ErrorPage = () => {
    const { error, statusText } = useRouteError();
    return (
        <section className="w-25 mx-auto  text-center">
        <div>
          <Lottie
            animationData={errorImg}
            loop={true}
            className="w-2/3 mx-auto"
          />
        </div>
  
        <h3 className="text-3xl font-bold ">{statusText}</h3>
        <p className="my-3 font-semibold">{error.message}</p>
        <p className="text-sm flex items-center justify-center font-semibold">
          Back to home
          <Link to="/">
            <AiFillHome className="w-6 h-5 text-yellow-500 ml-1"/>
          </Link>
        </p>
      </section>
    );
};

export default ErrorPage;