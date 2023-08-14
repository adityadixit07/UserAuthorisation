import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { clearPreviousState } from "../../../actions/ezKaroActions";
import { useOutsideClick } from "../../../hooks/clickOutside";
import { useEffect, useRef } from "react";

const FormSubmittedPage = ({ formSubmit, setFormSubmit }) => {
  const dispatch = useDispatch();

  const modalRef = useRef(null);
  useOutsideClick(() => {
    if (formSubmit) {
      setFormSubmit(false);
    }
  }, modalRef);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-[35%] xl:w-[40%]" ref={modalRef}>
          <div className="flex items-center justify-center mb-4">
            <FaCheckCircle className="text-green-500 text-6xl" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-center">
            Form Submitted Successfully
          </h1>
          <p className="text-gray-600 mb-4 text-center">
            Thank you for submitting the form. We&apos;ll get back to you
            shortly.
          </p>
          <div
            to={"/main"}
            className="w-fit bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            onClick={() => {
              dispatch(clearPreviousState());
              setFormSubmit(false);
            }}
          >
            Go Back
          </div>
        </div>
      </div>
      <div className="md:hidden w-14 h-14 bg-green-800 rounded-full fixed bottom-16 right-4 flex items-center justify-center text-white">
        <AiOutlineAppstoreAdd size={26} />
      </div>
    </>
  );
};

export default FormSubmittedPage;