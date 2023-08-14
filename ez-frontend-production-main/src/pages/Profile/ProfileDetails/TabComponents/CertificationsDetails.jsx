import React from 'react';
import { BiEdit } from 'react-icons/bi';

// import {FaGraduationCap} from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import EditCertificates from '../../EditCertificates';

const CertificationsDetails = () => {
  const editSectionCertificate = () => {
    // console.log(document.getElementById('editSectionCertificate').style.display);
    document.getElementById('editSectionCertificate').style.display == "flex" ?
      document.getElementById('editSectionCertificate').style.display = "none" :
      document.getElementById('editSectionCertificate').style.display = "flex";
  }
  return (
    <>
      <EditCertificates />
      <div className="bio-top-header flex items-center">
        <div className="bio-top-header-icon">
          <BiCheckShield />
        </div>
        <h1>CERTIFICATION</h1>
        <button><BiEdit className='ms-5 text-white' onClick={editSectionCertificate} /></button>
      </div>
      {/* University Information */}
      <div className="school-box-wrapper mt-3 flex p-2 px-3">
        <div className="school-name w-10/12">
          <div className="college-name">MERN Hackathon 2.0</div>
          <div className="university-name">Issue ID: j232hj54j45jv4jv425jv</div>
        </div>
        <div className="school-desc w-2/12">
          <div className="text-center bg-teal-400 p-1 px-2 rounded-md text-white">View</div>
        </div>
      </div>
      <div className="school-box-wrapper mt-3 flex p-2 px-3">
        <div className="school-name w-10/12">
          <div className="college-name">MERN Hackathon 2.0</div>
          <div className="university-name">Issue ID: j232hj54j45jv4jv425jv</div>
        </div>
        <div className="school-desc w-2/12">
          <div className="text-center bg-teal-400 p-1 px-2 rounded-md text-white ">View</div>
        </div>
      </div>
      <div className="school-box-wrapper mt-3 flex p-2 px-3">
        <div className="school-name w-10/12">
          <div className="college-name">MERN Hackathon 2.0</div>
          <div className="university-name">Issue ID: j232hj54j45jv4jv425jv</div>
        </div>
        <div className="school-desc w-2/12">
          <div className="text-center bg-teal-400 p-1 px-2 rounded-md text-white">View</div>
        </div>
      </div>
      <div className="school-box-wrapper mt-3 flex p-2 px-3">
        <div className="school-name w-10/12">
          <div className="college-name">MERN Hackathon 2.0</div>
          <div className="university-name">Issue ID: j232hj54j45jv4jv425jv</div>
        </div>
        <div className="school-desc w-2/12">
          <div className="text-center bg-teal-400 p-1 px-2 rounded-md text-white">View</div>
        </div>
      </div>
    </>
  )
}

export default CertificationsDetails