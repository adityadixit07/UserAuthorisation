import { BiEdit } from 'react-icons/bi';
import  { useEffect, useState } from 'react';

import { FaGraduationCap } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import EditOverview from '../../EditOverview';

import { useDispatch, useSelector } from 'react-redux';
import { getIndividualProfileById } from '../../../../actions/individualProfileActions';


const BioDetails = () => {
    const editSectionOverview = () => {
        // console.log(document.getElementById('editSectionOverview').style.display);
        document.getElementById('editSectionOverview').style.display == "flex" ?
            document.getElementById('editSectionOverview').style.display = "none" :
            document.getElementById('editSectionOverview').style.display = "flex";
    }
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [bio, setBio] = useState('');
  
    // Fetch the individual profile on component mount
    useEffect(() => {
      dispatch(getIndividualProfileById())
        .then(() => setLoading(false))
        .catch((error) => {
          // console.log(error);
          setLoading(false);
        });
    }, [dispatch]);
  
    // Get the individual profile from Redux store
    const { profile, error } = useSelector((state) => state.profile);
    // console.log(profile,"p");

    // Set the bio if the individual profile is available
    useEffect(() => {
      if (error) {
        // console.log(error);
      }
      if (profile && profile.about && profile.about.bio) {
        setBio(profile.about.bio);
      }
    }, [profile, error]);
  
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <>
            {/* edit section */}
            <EditOverview />

            <div className="bio-top-header flex items-center">
                <div className="bio-top-header-icon">
                    <FaGraduationCap />
                </div>
                <h1>OVERVIEW</h1>
                <button><BiEdit className='ms-5 text-white' onClick={editSectionOverview} /></button>
            </div>
            <div className="bio-second-header flex items-center mt-4">
                <div className="bio-second-header-icon ml-6">
                    <ImProfile />
                </div>
                <div className='introduction p-2 ml-5'>Introduction</div>
            </div>
            <div className='profile-description mt-8 py-3 px-4'>
                <p className='text-justify mx-2 my-2'>
                    {bio}
                </p>
            </div>
        </>
    )
}

export default BioDetails