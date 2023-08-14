import { AiOutlineCloudUpload } from "react-icons/ai";
// import { CiBookmark } from "react-icons/ci";
import Select from "react-select";

// Custom Css
import Style from "./NewTicket.module.css";
import "./customSelect.css";

// eslint-disable-next-line react/prop-types
export default function Charts({ theme }) {
  const skillOptions = [
    {
      value: "Web Developer",
      label: "Web Developer",
    },
    {
      value: "App Developer",
      label: "App Developer",
    },
    {
      value: "JavaScript",
      label: "JavaScript",
    },
    {
      value: "React JS",
      label: "React JS",
    },
    {
      value: "Node JS",
      label: "Node JS",
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div
        className={`w-full md:w-8/12  mt-8 p-4 ${
          theme ? "bg-white text-black" : "bg-slate-900 text-white"
        }`}
      >
        <div className="w-full">
          <h1 className="text-2xl font-semibold">Add Product to Catalogue</h1>
        </div>
        <div className="w-full mt-3 mb-5">
          <div className="w-full flex flex-wrap">
            <div
              className={`w-full p-3 rounded border ${
                theme ? "border" : "border-slate-400"
              }`}
            >
              <div className="w-full mt-3">
                <form
                  className={`${theme ? Style.form_light : Style.form_dark}`}
                >
                  <div className="mb-4">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                      id="itemName"
                      type="text"
                      placeholder="Item Name"
                    />
                  </div>
                  <div className="w-full">
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      className="h-36 border w-full p-3 focus:outline-none focus:border-purple-500 rounded"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="w-full mt-2 flex gap-4">
                    <div className="w-6/12">
                      <label
                        htmlFor="user-image"
                        className={`${Style.custom_file} flex items-center`}
                      >
                        <AiOutlineCloudUpload /> &nbsp; Product Images
                      </label>
                      <input
                        type="file"
                        className="w-full border hidden"
                        id="user-image"
                      />
                    </div>
                    <div className="w-6/12">
                      <input
                        type="number"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                        id="price"
                        placeholder="Price"
                      />
                    </div>
                  </div>
                  <div className="w-full flex my-5 gap-4">
                    <div className="w-full md:w-6/12">
                      <Select
                        defaultValue={skillOptions[2]}
                        name="colors"
                        options={skillOptions}
                        className="custom-multi-select mt-3"
                        classNamePrefix="select_multi"
                      />
                    </div>
                    <div className="w-full md:w-6/12 flex items-center">
                      <input
                        type="text"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                        id="discount"
                        placeholder="Discount"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="tags">Tags (Select Minimum 5 tags)</label>
                    <Select
                      defaultValue={[skillOptions[2], skillOptions[3]]}
                      isMulti
                      name="colors"
                      options={skillOptions}
                      className="custom-multi-select mt-3"
                      classNamePrefix="select_multi"
                    />
                  </div>
                  <div className="w-full mt-3">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white font-semibold p-2 rounded"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
