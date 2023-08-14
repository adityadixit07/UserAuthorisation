import { BiWorld } from "react-icons/bi";

const LanguagesDetails = ({ Languages }) => {
  return (
    <>
      <div className="bio-top-header flex items-center">
        <div className="bio-top-header-icon">
          <BiWorld size={22} />
        </div>
        <h1>LANGUAGES</h1>
      </div>

      {!Languages ? (
        <div className="w-full bg-[#d9d9d91a] rounded-[10px] text-white mt-8 py-3 px-4">
          <p className='text-justify px-2 py-2'>
            No Languages added yet!
          </p>
        </div>
      ) : (
        <div className={`w-full mt-8 flex flex-wrap gap-3`}>
          <div className="skill-box p-1 px-2">
            <span className="block text-sm text-white">{Languages}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguagesDetails;

{/* <span className="block text-xs text-gray-50">Level: Native</span> */ }