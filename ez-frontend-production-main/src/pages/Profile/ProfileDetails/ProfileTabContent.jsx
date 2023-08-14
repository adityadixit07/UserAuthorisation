import React from 'react'

// profile modal components
import BioDetails from './TabComponents/BioDetails';
import EducationDetails from './TabComponents/EducationDetails';
import ExperienceDetails from './TabComponents/ExperienceDetails';
import CertificationsDetails from './TabComponents/CertificationsDetails';
import CommunityDetails from './TabComponents/CommunityDetails';
import LanguagesDetails from './TabComponents/LanguagesDetails';
import EndorsementDetails from './TabComponents/EndorsementDetails';
import SkillDetails from './TabComponents/SkillDetails';
import TopToolDetails from './TabComponents/TopToolDetails';
// import ProjectDetails from './TabComponents/ProjectDetails';
// import CommunityDetails from './TabComponents/CommunityDetails';

const ProfileTabContent = ({ activeTab }) => {

    // Storing components and their id as array of object - which will be matched with activeTab prop
    const TabContent = [
        {
            id: 0,
            content: <BioDetails />
        },
        {
            id: 1,
            content: <EducationDetails />
        },
        {
            id: 2,
            content: <ExperienceDetails />
        },
        {
            id: 3,
            content: <CertificationsDetails />
        },
        {
            id: 4,
            content: <SkillDetails />
        },
        {
            id: 5,
            content: <TopToolDetails />
        },
        {
            id: 6,
            content: <EndorsementDetails />
        },
        {
            id: 7,
            content: <LanguagesDetails />
        },
        {
            id: 8,
            content: <CommunityDetails />
        }
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