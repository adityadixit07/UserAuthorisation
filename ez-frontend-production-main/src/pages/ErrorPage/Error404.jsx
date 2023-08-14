import { BiError, BiHomeAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Error404 = () => {
  return (
    <>
      <Toaster toastOptions={{ duration: 10000 }} />
      <div className="h-[100vh] bg-slate-900 flex flex-col items-center flex-wrap justify-center">
        <img
          src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1682998352/ezcircle_nmn6bt.png`}
          alt="pic"
          className="w-16  h-16 "
        />
        <h1 className="text-6xl text-white flex mt-4">
          <BiError color="red" />
          404
        </h1>
        <h1 className="text-5xl text-white mt-4">Page Not Found.</h1>
        <Link to={"/"} className="text-blue-500 underline flex items-center mt-4">
          <BiHomeAlt2 />
          &nbsp;Return to Home Page
        </Link>
      </div>
    </>
  );
};

export default Error404;
