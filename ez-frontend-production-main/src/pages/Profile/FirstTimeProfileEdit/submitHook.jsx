import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { updateUserDetails } from "../../../actions/userActions";

export const submitHook = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const handleUsernameAPI = (username) => {
        if (username.length < 6) {
            return toast.error("Username must be atleast 6 characters long!");
        }
        const userData = {
            username
        };

        dispatch(updateUserDetails(userData));
    };

    const handleInfoAPI = (firstName, lastName, headline, country, state, city, pronoun, website, user) => {
        if (country === "Choose your Country") {
            country = "";
        }
        else if (state === "Choose Country first") {
            state = "";
        }
        else if (city === "Choose State first") {
            city = "";
        }

        const userData = {
            firstName,
            lastName,
            headline,
            location: { country, state, city },
            pronoun,
            website
        };

        dispatch(updateUserDetails(userData));
    };

    const handleBioAPI = (bio) => {
        const userData = {
            bio
        };

        dispatch(updateUserDetails(userData));
    };

    const handlePersonalAPI = (language, gender, dateOfBirth, monthOfBirth, yearOfBirth, user) => {
        const userData = {
            language,
            // about: {
            //     ...user.about,
            //     languages: { language }
            // },
            gender,
            dob: {
                date: dateOfBirth["$D"],
                month: monthOfBirth["$M"] + 1,
                year: yearOfBirth["$y"],
            }
        };

        dispatch(updateUserDetails(userData));
    }

    const handleContactAPI = (email1, showEmail1, email2, showEmail2, mobile1, mobile2) => {
        // Future update --> If user changes Primary phone, an OTP will be sent to the new phone
        // After OTP valdation, the updateUserDetails must be called

        // if (mobile1 <= 0 || mobile2 <= 0) {
        //     return toast("Enter valid phone number!", {
        //         icon: '⚠️',
        //         style: {
        //             border: '1px solid #FFA500',
        //             padding: '16px',
        //             color: '#333',
        //             background: '#FFD700',
        //         },
        //     });
        // }

        if (!mobile1) {
            return toast.error("Primary phone number is required!");
        }

        const secondaryEmailData = email2 || email2 === ""
            ? {
                secondaryEmail: {
                    email: email2 || "",
                    showonProfile: showEmail2,
                },
            }
            : {};

        const userData = {
            email: email1 || "",
            email_showonProfile: email1 ? showEmail1 : false,
            ...secondaryEmailData,
            phone: mobile1,
            ...(mobile2 || mobile2 === "" ? { sec_phone: mobile2 || "" } : {}),
        };

        dispatch(updateUserDetails(userData));
    };

    const handleSocialAPI = async (twitter, linkedin, github, instagram) => {
        const userData = {
            socialLinks: [
                { ...twitter ? { platform: "twitter", link: twitter } : null },
                { ...linkedin ? { platform: "linkedin", link: linkedin } : null },
                { ...github ? { platform: "github", link: github } : null },
                { ...instagram ? { platform: "instagram", link: instagram } : null },
            ],
        };
        userData.socialLinks = userData.socialLinks.filter((element) => {
            return element !== null && Object.keys(element).length !== 0;
        });

        dispatch(updateUserDetails(userData));
    };

    const handleEducationAPI = (
        instituteName,
        educationType,
        field,
        degree,
        startYear,
        endYear,
        item
    ) => {
        if (!instituteName || !educationType || !field || !degree || !startYear || !endYear) {
            return toast.error("Please fill out all the fields!");
        }

        const updatedEducation = {
            educationType: educationType,
            institute: instituteName,
            major: field,
            degree_type: degree,
            Startyear: startYear,
            Endyear: endYear,
        };

        const updatedEducationArray = item && user?.about?.education.map((education) =>
            education._id === item._id ? updatedEducation : education
        );

        const userData = {
            about: user?.about
                ? {
                    ...user?.about,
                    education: item ? updatedEducationArray : user?.about?.education ? [...user?.about?.education, updatedEducation] : [updatedEducation],
                }
                : {
                    education: item ? updatedEducationArray : [],
                },
        };

        dispatch(updateUserDetails(userData));
    };

    const handleRemoveEducationAPI = (educationId) => {
        if (!educationId) {
            return toast.error("Education ID is required!");
        }

        const updatedEducationArray = user?.about?.education.filter((education) =>
            education._id !== educationId
        );

        const userData = {
            about: user?.about
                ? {
                    ...user?.about,
                    education: updatedEducationArray,
                }
                : {},
        };

        dispatch(updateUserDetails(userData));
    };

    const handleCertificateAPI = (
        certificate,
        issuedBy,
        certificateURL,
        startMonth,
        startYear,
        endMonth,
        expiryYear,
        item
    ) => {
        if (!certificate) {
            return toast.error("Enter Certificate's title!");
        }
        else if (!issuedBy) {
            return toast.error("Enter Issuer's name!");
        }
        else if (!certificateURL) {
            return toast.error("Enter Certificate's URL!");
        }
        else if (!startMonth) {
            return toast.error("Enter Certificate's Issued month!");
        }
        else if (!startYear) {
            return toast.error("Enter Certificate's Issued year!");
        }

        const updatedCertificate = {
            name: certificate,
            issuedBy: issuedBy,
            url: certificateURL,
            issueMonth: startMonth,
            issueYear: startYear,
            ...endMonth && expiryYear && {
                expiryMonth: endMonth,
                expiryYear: expiryYear,
            },
            ...endMonth || expiryYear ? {
                willExpire: true,
            } : {
                willExpire: false,
            },
        };

        const updatedCertificationArray = item && user?.about?.certifications.map((certificate) =>
            certificate._id === item._id ? updatedCertificate : certificate
        );

        const userData = {
            about: user?.about
                ? {
                    ...user?.about,
                    certifications: item ? updatedCertificationArray : user?.about?.certifications ? [...user?.about?.certifications, updatedCertificate] : [updatedCertificate],
                }
                : {
                    certifications: item ? updatedCertificationArray : [],
                },
        };

        dispatch(updateUserDetails(userData));
    };

    const handleRemoveCertificateAPI = (certificateId) => {
        if (!certificateId) {
            return toast.error("Certificate ID is required!");
        }

        const updatedCertificationArray = user?.about?.certifications.filter((certificate) =>
            certificate._id !== certificateId
        );

        const userData = {
            about: user?.about
                ? {
                    ...user?.about,
                    certifications: updatedCertificationArray,
                }
                : {},
        };

        dispatch(updateUserDetails(userData));
    };

    const handleExperienceAPI = (
        jobTitle,
        companyName,
        companyLogo,
        website,
        startDate,
        working,
        endDate,
        workType,
        remote,
        countryName,
        stateName,
        cityName,
        skills,
        role,
        aboutRole,
        item
    ) => {
        if (!jobTitle) {
            return toast.error("Enter your Job title!");
        }
        else if (!companyName) {
            return toast.error("Enter work Company name!");
        }
        else if (!startDate) {
            return toast.error("Enter work Starting date!")
        }
        else if (!working && !endDate) {
            return toast.error("Enter current work status!");
        }
        else if (remote === false && !countryName) {
            return toast.error("Enter work country!");
        }
        else if (remote === false && !stateName) {
            return toast.error("Enter work state!");
        }
        // else if (remote === false && !cityName) {
        //     return toast.error("Enter work city!");
        // }

        const updatedExperience = {
            jobTitle,
            company: {
                name: companyName,
                logo: companyLogo,
                website: website,
            },
            startDate,
            isWorking: working,
            ...!working && {
                endDate,
            },
            workType,
            isRemote: remote,
            location: {
                ...!remote && {
                    country: countryName,
                    state: stateName,
                    // city: cityName,
                }
            },
            skills,
            primary_role: role,
            description: aboutRole,
        };

        const updatedExperienceArray = item && user?.about?.experience.map((experience) =>
            experience._id === item._id ? updatedExperience : experience
        );

        const userData = {
            about: user?.about
                ? {
                    ...user?.about,
                    experience: item ? updatedExperienceArray : user?.about?.experience ? [...user?.about?.experience, updatedExperience] : [updatedExperience],
                }
                : {
                    experience: item ? updatedExperienceArray : [],
                },
        };

        dispatch(updateUserDetails(userData));
    };

    const handleRemoveExperienceAPI = (experienceId) => {
        if (!experienceId) {
            return toast.error("Experience ID is required!");
        }

        const updatedExperienceArray = user?.about?.experience.filter((experience) =>
            experience._id !== experienceId
        );

        const userData = {
            about: user?.about
                ? {
                    ...user?.about,
                    experience: updatedExperienceArray,
                }
                : {},
        };

        dispatch(updateUserDetails(userData));
    };

    const handleVolunteerAPI = (
        role,
        organisation,
        startMonth,
        startYear,
        endMonth,
        expiryYear,
        description,
        user
    ) => {
        const newVolunteer = {
            role,
            organisation,
            startMonth,
            startYear,
            ...(endMonth || expiryYear) ? {
                isVolunteering: false,
                endMonth,
                endYear: expiryYear,
            } : {
                isVolunteering: true,
            },
            description,
        };

        const updatedVolunteerArray = updateEducationLevel(
            [...user.about.volunteerExperience],
            newVolunteer
        );

        const userData = {
            about: {
                ...user.about,
                volunteerExperience: updatedVolunteerArray,
            },
        };

        dispatch(updateUserDetails(userData));
    };

    return {
        handleUsernameAPI,
        handleInfoAPI,
        handleBioAPI,
        handlePersonalAPI,
        handleContactAPI,
        handleSocialAPI,
        handleEducationAPI,
        handleRemoveEducationAPI,
        handleCertificateAPI,
        handleRemoveCertificateAPI,
        handleExperienceAPI,
        handleRemoveExperienceAPI,
        handleVolunteerAPI,
    };
};