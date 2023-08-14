import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { BsGenderAmbiguous, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import ButtonLoading from '../../../static/ButtonLoading';
import { submitHook } from './submitHook';
import { toast } from 'react-hot-toast';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProfileImage } from '../../../actions/userActions';
import { Country, City, State } from 'country-state-city';

const setSocialLinksState = (socialLinks, setTwitter, setLinkedin, setGithub, setInstagram) => {
    socialLinks.forEach((link) => {
        switch (link.platform) {
            case "twitter":
                setTwitter(link.link);
                break;
            case "linkedin":
                setLinkedin(link.link);
                break;
            case "github":
                setGithub(link.link);
                break;
            case "instagram":
                setInstagram(link.link);
                break;
            default:
                break;
        }
    });
};

function FirstEditOverview({ user, isProfileUpdating }) {
    const {
        handleUsernameAPI,
        handleInfoAPI,
        handlePersonalAPI,
        handleContactAPI,
        handleSocialAPI
    } = submitHook();
    const { isUploading } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const fileRef = useRef();
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [username, setUsername] = useState(user?.username || "");
    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [headline, setHeadline] = useState(user?.headline || "");

    const [countries, setCountries] = useState(Country.getAllCountries());
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [country, setCountry] = useState(user?.location?.country || "");
    const [state, setState] = useState(user?.location?.state || "");
    const [city, setCity] = useState(user?.location?.city || "");

    const [pronoun, setPronoun] = useState(user?.pronoun || "");
    const [website, setWebsite] = useState(user?.website || "");

    const [language, setLanguage] = useState(user?.language || "");
    const [openLanguage, setOpenLanguage] = useState(false);

    const [gender, setGender] = useState(user?.gender || "");
    const [openGender, setOpenGender] = useState(false);

    const [openDateMonth, setOpenDateMonth] = useState(false);
    const [dateOfBirth, setDateOfBirth] = useState(dayjs());
    const [monthOfBirth, setMonthOfBirth] = useState(dayjs());

    const [openYear, setOpenYear] = useState(false);
    const [yearOfBirth, setYearOfBirth] = useState(dayjs());

    const [email1, setEmail1] = useState(user?.email || "");
    const [showEmail1, setShowEmail1] = useState(user?.email_showonProfile || false);
    const [email2, setEmail2] = useState(user?.secondaryEmail?.email || "");
    const [showEmail2, setShowEmail2] = useState(user?.secondaryEmail?.showonProfile || false);

    const [openMobile, setOpenMobile] = useState(false);
    const [mobile1, setMobile1] = useState(user?.phone || "");
    const [mobile2, setMobile2] = useState(user?.sec_phone || "");

    const [twitter, setTwitter] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");

    useEffect(() => {
        if (user.socialLinks) {
            setSocialLinksState(user.socialLinks, setTwitter, setLinkedin, setGithub, setInstagram);
        }
    }, []);

    // const addNewSocialLink = () => {
    //     const node = document.createElement("input");
    //     document.getElementById("socialLinksParent").appendChild(node);
    // }

    const handleUsernameSubmit = (e) => {
        e.preventDefault();
        if (username === user?.username) {
            return toast.success(`"${username}" is already yours :)`);
        }
        handleUsernameAPI(username);
    };

    const handleInfoSubmit = (e) => {
        e.preventDefault();
        handleInfoAPI(firstName, lastName, headline, country, state, city, pronoun, website, user);
    };

    const handlePersonalInfo = (e) => {
        e.preventDefault();
        handlePersonalAPI(language, gender, dateOfBirth, monthOfBirth, yearOfBirth, user);
    };

    const handleContactInfo = (e) => {
        e.preventDefault();
        handleContactAPI(email1, showEmail1, email2, showEmail2, mobile1, mobile2);
    };

    const handleSocialInfo = (e) => {
        e.preventDefault();
        handleSocialAPI(twitter, linkedin, github, instagram);
    };

    const handleFileChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setImageFile(e.target.files[0]);
        e.target.value = "";
    };

    const handleImageUpload = (e) => {
        e.preventDefault();

        dispatch(uploadProfileImage({
            userID: user?._id,
            type: "avatar",
            imageFile
        }));
    };
    // Site will be reloaded because in EditProfile.jsx file, there is a useEffect for "isUploaded"

    return (
        <div>
            <h2 className='text-3xl p-4 w-full bg-gray-200 text-black font-bold rounded'>Personal Details</h2>
            <div className='w-full flex flex-col items-center'>

                <div className="w-full mt-8 flex flex-col items-center justify-center">
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        disabled={isUploading}
                        onChange={handleFileChange}
                        ref={fileRef}
                    />
                    <span className="flex items-center justify-center border-2 border-green-700 rounded-full p-1 relative ">
                        <span className="overflow-hidden rounded-full h-40 w-40 ">
                            <label onClick={() => fileRef.current.click()}
                                className="text-green-600  text-center flex justify-center items-center h-full "
                            >
                                {image ? (
                                    <img
                                        src={image}
                                        alt="User"
                                        className="bg-cover"
                                    />
                                ) : (
                                    <img
                                        src={user?.avatar?.url ? user.avatar.url : "/icon.png"}
                                        alt="User"
                                    />
                                )}
                            </label>
                        </span>

                        <label onClick={() => fileRef.current.click()}>
                            <span className="bg-green-700 rounded-full p-2 absolute right-0 bottom-4 cursor-pointer text-white">
                                <AiOutlineEdit size={18} />
                            </span>
                        </label>
                    </span>
                </div>
                {image && (
                    <button type='button' disabled={isUploading} onClick={handleImageUpload}
                        className='text-white bg-green-500 rounded mt-4 px-4 py-1 h-[40px] flex items-center justify-center'
                    >
                        {isUploading ? <ButtonLoading /> : "Upload"}
                    </button>
                )}

                {/* username */}
                <form className='w-full lg:w-[70%] mt-6 flex flex-row justify-between items-center gap-8' onSubmit={handleUsernameSubmit}>
                    <div className="w-full flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black">
                        <p className="border-e border-green-800 rounded-s-md p-3 bg-gray-300">ezage.in/</p>
                        <input
                            type="text"
                            placeholder={"Your username"}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            // className={`w-full border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                            className="p-3 w-full rounded-e-md"
                        />
                    </div>
                    <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
                        {isProfileUpdating ? <ButtonLoading /> : "Change"}
                    </button>
                </form>

                <form className='border border-gray-200 px-4 py-2 rounded mt-6 w-full' onSubmit={handleInfoSubmit}>
                    {/* name */}
                    <div className="w-full mt-6 flex gap-6 flex-col lg:flex-row justify-between">
                        <div className="w-full flex flex-col gap-1">
                            <label>First Name</label>
                            <input
                                disabled={isProfileUpdating}
                                type="text"
                                placeholder={"Your first name"}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className={`border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label>Last Name</label>
                            <input
                                disabled={isProfileUpdating}
                                type="text"
                                placeholder={"Your last name"}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className={`lg:mt-0 border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                            />
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <label>Headline</label>
                        <textarea
                            disabled={isProfileUpdating}
                            type="text"
                            placeholder={"Describe yourself in your own words"}
                            value={headline}
                            onChange={(e) => setHeadline(e.target.value)}
                            id="headline"
                            className={`w-full h-32 border p-3 border-green-800 mt-2 focus:outline-none focus:border-green-600 rounded-md text-black`}
                        ></textarea>
                        <label htmlFor="headline" className="text-gray-100 text-[12px]">This is the first thing peers read about you after your name. Be a little descriptive.</label>
                    </div>
                    <div className='w-full mt-6 md:grid grid-cols-3 gap-y-[5%] gap-x-[2.5%] justify-between'>
                        <div className="flex items-center justify-between md:block">
                            <label>Country</label>
                            {/* <input
                                disabled={isProfileUpdating}
                                placeholder='Country'
                                list="countries"
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className={`w-1/2 border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                            />
                            <datalist id="countries">
                                <option value="India"></option>
                                <option value="Bangladesh"></option>
                                <option value="Sri Lanka"></option>
                                <option value="United States of America"></option>
                            </datalist> */}
                            <select
                                className={`w-1/2 md:w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                                onChange={e => {
                                    let countryData = JSON.parse(e.target.value);
                                    setStates(State.getStatesOfCountry(countryData.isoCode));
                                    setCountry(countryData.name);
                                }}
                            >
                                <option>{country ? country : "Choose your Country"}</option>
                                {countries.map((country, i) => (
                                    <option value={JSON.stringify(country)} key={i}>{country.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-6 md:mt-0 flex items-center justify-between md:block">
                            <label>State</label>
                            <select
                                className={`w-1/2 md:w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                                onChange={e => {
                                    let stateData = JSON.parse(e.target.value);
                                    setCities(City.getCitiesOfState(stateData.countryCode, stateData.isoCode));
                                    setState(stateData.name);
                                }}
                            >
                                <option>{state ? state : "Choose Country first"}</option>
                                {states.map((state, i) => (
                                    <option value={JSON.stringify(state)} key={i}>{state.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-6 md:mt-0 flex items-center justify-between md:block">
                            <label>City</label>
                            {/* <input
                                disabled={isProfileUpdating}
                                placeholder='City'
                                list="cities"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className={`w-1/2 border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                            />
                            <datalist id="cities">
                                <option value="Kolkata"></option>
                                <option value="Bangalore"></option>
                                <option value="Dhaka"></option>
                            </datalist> */}
                            <select
                                className={`w-1/2 md:w-full border p-3 border-green-800 focus:outline-none focus:border-green-600 rounded-md bg-white text-black`}
                                onChange={e => {
                                    let cityData = JSON.parse(e.target.value);
                                    setCity(cityData.name);
                                }}
                            >
                                <option>{city ? city : "Choose State first"}</option>
                                {cities.map((city, i) => (
                                    <option value={JSON.stringify(city)} key={i}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-6 md:mt-0 flex items-center justify-between md:block">
                            <label>Pronoun</label>
                            <input
                                disabled={isProfileUpdating}
                                placeholder='Preferred pronoun'
                                list="pronouns"
                                type="text"
                                value={pronoun}
                                onChange={(e) => setPronoun(e.target.value)}
                                className={`w-1/2 border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                            />
                            <datalist id="pronouns">
                                <option value="He/Him"></option>
                                <option value="She/Her"></option>
                                <option value="They/Them"></option>
                            </datalist>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <label>Website</label>
                        <input
                            disabled={isProfileUpdating}
                            placeholder='Website'
                            type="text"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            className={`col-span-2 border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                        />
                    </div>
                    <div className='w-full mt-6'></div>
                    <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
                        {isProfileUpdating ? <ButtonLoading /> : "Save"}
                    </button>
                </form>

                <form className='border border-gray-200 px-4 py-2 rounded mt-6 w-full' onSubmit={handlePersonalInfo}>
                    <div className='mb-6'>
                        <div>
                            <button type='button' className='text-blue-600' onClick={() => setOpenLanguage(prev => !prev)}>
                                Add a language
                            </button>
                        </div>
                        {openLanguage && (
                            <input
                                disabled={isProfileUpdating}
                                placeholder='Language'
                                type="text"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className={`col-span-2 border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                            />
                        )}
                    </div>
                    <div className="mb-6">
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row gap-4 items-center'>
                                <BsGenderAmbiguous />
                                {user?.gender ? user?.gender : "ABC"}
                            </div>
                            <div className='cursor-pointer' onClick={() => setOpenGender(prev => !prev)}>
                                <BiEdit />
                            </div>
                        </div>
                        {openGender && (
                            <>
                                <input
                                    disabled={isProfileUpdating}
                                    placeholder='Gender'
                                    list="genders"
                                    type="text"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className={`col-span-2 border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                                />
                                <datalist id="genders">
                                    <option value="Male"></option>
                                    <option value="Female"></option>
                                    <option value="Others"></option>
                                </datalist>
                            </>
                        )}
                    </div>
                    <div className='mb-6'>
                        <div className='flex flex-row justify-between items-center mb-2'>
                            <div className='flex flex-row gap-4 items-center'>
                                <FaBirthdayCake />
                                {/* {user?.dob?.date && user?.dob?.month || dayjs().format('D MMMM')} */}
                                {user?.dob?.date && user?.dob?.month && user?.dob?.year ? (
                                    <span>{user?.dob?.date} {dayjs(user?.dob?.month).format('MMMM')} {user?.dob?.year}</span>
                                ) : (
                                    <span>{dayjs().format('D MMMM')}</span>
                                )}
                            </div>
                            <div className='cursor-pointer' onClick={() => setOpenDateMonth(prev => !prev)}>
                                <BiEdit />
                            </div>
                        </div>
                        {openDateMonth && (
                            <div className="flex flex-col md:flex-row md:items-center gap-5">
                                <DatePicker
                                    label={'"Select Date of Birth"'}
                                    views={['day']}
                                    value={dateOfBirth}
                                    onChange={(date) => setDateOfBirth(dayjs(date))}
                                    inputFormat="dd"
                                />
                                <DatePicker
                                    label={'"Select Month of Birth"'}
                                    views={['month']}
                                    value={monthOfBirth}
                                    onChange={(month) => setMonthOfBirth(dayjs(month))}
                                    inputFormat="mm"
                                />
                                <DatePicker
                                    label={'"Select Year of Birth"'}
                                    views={['year']}
                                    value={yearOfBirth}
                                    onChange={(year) => setYearOfBirth(dayjs(year))}
                                    inputFormat="yy"
                                />
                            </div>
                        )}
                    </div>
                    {/* <div className='mb-4'>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row gap-4 items-center mb-2'>
                                <FaBirthdayCake />
                                {user?.dob?.year || dayjs().format('YYYY')}
                            </div>
                            <div className='cursor-pointer' onClick={() => setOpenYear(prev => !prev)}>
                                <BiEdit />
                            </div>
                        </div>
                        {openYear && (
                            <div>
                                <DatePicker
                                    label={'"Select Year of Birth"'}
                                    views={['year']}
                                    value={yearOfBirth}
                                    onChange={(year) => setYearOfBirth(dayjs(year))}
                                    inputFormat="yy"
                                />
                            </div>
                        )}
                    </div> */}

                    <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
                        {isProfileUpdating ? <ButtonLoading /> : "Save"}
                    </button>
                </form>

                <form className='border border-gray-200 px-4 py-2 rounded mt-6 w-full' onSubmit={handleContactInfo}>
                    <h3 className='mb-6 text-3xl p-4 w-full bg-gray-200 text-black font-bold rounded'>Contact Info</h3>
                    <div className='flex flex-col md:flex-row md:items-center md:w-full md:justify-between mb-6'>
                        <div className="w-full flex flex-col">
                            <label>Primary Email</label>
                            <input
                                className={`border w-full md:w-[50%] p-3 me-8 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                                // className={`border md:w-[50%] p-3 me-8 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-[green]`}
                                type="email"
                                value={email1}
                                onChange={(e) => setEmail1(e.target.value)}
                                placeholder="Add your primary email"
                            />
                            {email1 && (
                                <div className="flex items-center">
                                    <input
                                        value={showEmail1}
                                        onChange={() => setShowEmail1(prev => !prev)}
                                        checked={showEmail1}
                                        className='me-2 md:me-4'
                                        type="checkbox"
                                        name=""
                                        id="showPrimaryEmail"
                                    />
                                    <span htmlFor="showPrimaryEmail">
                                        Show on Profile
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center md:w-full md:justify-between mb-6'>
                        <div className="w-full flex flex-col">
                            <label>Secondary Email</label>
                            <input
                                className={`border w-full md:w-[50%] p-3 me-8 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                                type="email"
                                value={email2}
                                onChange={(e) => setEmail2(e.target.value)}
                                placeholder="Add your secondary email"
                            />
                            {email2 && (
                                <div className="flex items-center">
                                    <input
                                        value={showEmail2}
                                        onChange={() => setShowEmail2(prev => !prev)}
                                        checked={showEmail2}
                                        className='me-2 md:me-4'
                                        type="checkbox"
                                        id="showSecondaryEmail"
                                    />
                                    <span htmlFor="showSecondaryEmail">
                                        Show on Profile
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className="mb-2">
                            <button type='button' className={`text-blue-600 ${openMobile && "underline"}`} onClick={() => setOpenMobile(prev => !prev)}>
                                Add/Remove mobile phone
                            </button>
                        </div>
                        {openMobile && (
                            <div className="flex flex-col gap-2">
                                <div className="w-full md:w-[400px] flex items-center justify-between">
                                    <span>Primary</span>
                                    <input
                                        disabled={isProfileUpdating}
                                        placeholder='Your Primary phone'
                                        type="number"
                                        value={mobile1}
                                        onChange={(e) => setMobile1(e.target.value)}
                                        className={`col-span-2 border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                                    // className={`col-span-2 border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-[green]`}
                                    />
                                </div>
                                <div className="w-full md:w-[400px] flex items-center justify-between">
                                    <span>Secondary</span>
                                    <input
                                        disabled={isProfileUpdating}
                                        placeholder='Your Primary phone'
                                        type="number"
                                        value={mobile2}
                                        onChange={(e) => setMobile2(e.target.value)}
                                        className={`col-span-2 border p-3 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black`}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
                        {isProfileUpdating ? <ButtonLoading /> : "Save"}
                    </button>
                </form>

                <form className='border border-gray-200 px-4 py-2 rounded mt-6 w-full' onSubmit={handleSocialInfo}>
                    <h3 className='mb-6 text-3xl p-4 w-full bg-gray-200 text-black font-bold rounded'>Social Links</h3>
                    <p className='text-gray-100 text-[12px]'>*You only need to add your username</p>
                    <div id="socialLinksParent" className='grid grid-cols-2 gap-x-2 gap-y-2'>
                        <div className="w-full overflow-hidden flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black">
                            <p className="border-e border-green-800 rounded-s-md p-3 bg-gray-300 h-full flex flex-row items-center"><BsTwitter /></p>
                            <input
                                value={twitter}
                                onChange={(e) => setTwitter(e.target.value)}
                                type="text"
                                placeholder="twitter.com/"
                                className={`w-full col-span-2 p-3 border-green-800 focus:outline-none focus:border-green-600 bg-white text-black`}
                            />
                        </div>
                        <div className="w-full overflow-hidden flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black">
                            <p className="border-e border-green-800 rounded-s-md p-3 bg-gray-300 h-full flex flex-row items-center"><BsLinkedin /></p>
                            <input
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                                type="text"
                                placeholder="linkedin.com/in/"
                                className={`w-full col-span-2 p-3 border-green-800 focus:outline-none focus:border-green-600 bg-white text-black`}
                            />
                        </div>
                        <div className="w-full overflow-hidden flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black">
                            <p className="border-e border-green-800 rounded-s-md p-3 bg-gray-300 h-full flex flex-row items-center"><BsInstagram /></p>
                            <input
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}
                                type="text"
                                placeholder="github.com/"
                                className={`w-full col-span-2 p-3 border-green-800 focus:outline-none focus:border-green-600 bg-white text-black`}
                            />
                        </div>
                        <div className="w-full overflow-hidden flex items-center border p-0 border-green-800 focus:outline-none focus:border-green-600  rounded-md bg-white text-black">
                            <p className="border-e border-green-800 rounded-s-md p-3 bg-gray-300 h-full flex flex-row items-center"><BsInstagram /></p>
                            <input
                                value={instagram}
                                onChange={(e) => setInstagram(e.target.value)}
                                type="text"
                                placeholder="instagram.com/"
                                className={`w-full col-span-2 p-3 border-green-800 focus:outline-none focus:border-green-600 bg-white text-black`}
                            />
                        </div>
                    </div>
                    {/* <div className='mb-6 mt-6'>
                        <button type="button" onClick={addNewSocialLink} className='text-blue-600'>Add another social link</button>
                    </div> */}
                    <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 mt-6 h-[40px] flex items-center justify-center'>
                        {isProfileUpdating ? <ButtonLoading /> : "Save"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FirstEditOverview