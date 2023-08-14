import { FaGraduationCap } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const BioDetails = () => {
  return (
    <>
      <div className="bio-top-header flex items-center">
        <div className="bio-top-header-icon">
          <FaGraduationCap />
        </div>
        <h1>OVERVIEW</h1>
      </div>
      <div className="bio-second-header flex items-center mt-4">
        <div className="bio-second-header-icon ml-6">
          <ImProfile />
        </div>
        <div className="introduction p-2 ml-5">Introduction</div>
      </div>
      <div className="profile-description mt-8 py-3 px-4">
        <p>This is Muqtadir here building Ezage-The One App.</p>
        <p>A Civil Engineer by degree and entrepreneur by spirit .</p>
        <br></br>
        <p>
          I worked in Byju's in sales for 3 years before starting out Ezage.
        </p>
        <p>
          Along with Ezage I run a non profit organization Ufohs Foundation
          working on environment and sustainability.
        </p>
        <br></br>
        <p>
          Analytical and enthusiastic individual with an entrepreneurial
          mind-set, self- motivated and pro-active, interested in learning and
          applying simple to advanced technologies to solve real life problems.
        </p>

        <p>
          Experienced founder with demonstrated skills & interest in Startups,
          Business Management and strategy development.
        </p>
        <p>
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia velit optio veniam voluptas blanditiis excepturi natus expedita amet eaque aliquid! */}
        </p>
        {/* <button className='bg-slate-500 p-1 rounded-lg'>Show More</button> */}
      </div>
    </>
  );
};

export default BioDetails;
