import React from 'react'

import BioDetails from './TabComponents/BioDetails';
import EducationDetails from './TabComponents/EducationDetails';
import ExperienceDetails from './TabComponents/ExperienceDetails';
import CertificationsDetails from './TabComponents/CertificationsDetails';
import SkillDetails from './TabComponents/SkillDetails';
// import TopToolDetails from './TabComponents/TopToolDetails';
// import CommunityDetails from './TabComponents/CommunityDetails';
// import LanguagesDetails from './TabComponents/LanguagesDetails';
// import EndorsementDetails from './TabComponents/EndorsementDetails';
import { useSelector } from 'react-redux';

const ProfileTabContent = ({ activeTab }) => {
  const { profile } = useSelector(state => state.user);

  const TabContent = [
    {
      id: 0,
      content: <BioDetails bio={profile.bio && profile.bio} />
    },
    {
      id: 1,
      content: <EducationDetails education={profile.about.education ? profile.about.education : []} />
    },
    {
      id: 2,
      content: <ExperienceDetails experiences={profile.about.experience ? profile.about.experience : []} />
    },
    {
      id: 3,
      content: <SkillDetails skills={profile.about.skills ? profile.about.skills : []} />
    },
    {
      id: 4,
      content: <CertificationsDetails certifications={profile.about.certifications ? profile.about.certifications : []} />
    },
    // {
    //   id: 5,
    //   content: <TopToolDetails />
    // },
    // {
    //   id: 5,
    //   content: <EndorsementDetails />
    // },
    // {
    //   id: 6,
    //   content: <LanguagesDetails Languages={profile?.language} />
    // },
    // {
    //   id: 7,
    //   content: <CommunityDetails />
    // }
  ]

  return (
    <>
      {
        TabContent.map((data) => (
          <div key={data.id}>
            {activeTab === data.id ? data.content : ""}
          </div>
        ))
      }
    </>
  )
}

export default ProfileTabContent