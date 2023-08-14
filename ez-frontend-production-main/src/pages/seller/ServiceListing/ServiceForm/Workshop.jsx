import React, { useRef, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import "../sellerr.css"
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import TitleDescription from './NewForm/TitleDescription';
import Duration from './NewForm/Duration';
import Pricing from './NewForm/Pricing';
import { useDispatch } from 'react-redux';
import Questions from './NewForm/Questions';
import ListingStyle from './NewForm/ListingStyle';
// import Parity from './NewForm/Parity';
import { createSellerCatalogWithImage } from '../../../../actions/sellerActions';
import Tags from './NewForm/Tags';
import { toast } from 'react-hot-toast';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { showMissingInput } from '../../../../hooks/showMissingInput';
import { Box, Container } from '@mui/material';
import mainLogoEz from '../../../../assets/ez-logo/mainlogo-ex.png';
import { AiOutlineUpload } from 'react-icons/ai';

function Workshop({ user }) {
    const dispatch = useDispatch();

    const fileThumbnailRef = useRef();
    const [thumbnailImage, setThumbnailImage] = useState("");
    const [thumbnailImageFile, setThumbnailImageFile] = useState(null);
    const handleThumbnailFileChange = (e) => {
        setThumbnailImage(URL.createObjectURL(e.target.files[0]));
        setThumbnailImageFile(e.target.files[0]);
        e.target.value = "";
    };

    const [itemTitle, setItemTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tag, setTag] = useState("");
    const [savedTags, setSavedTags] = useState([]);
    const [duration, setDuration] = useState("");
    const [durationBg, setdurationBg] = useState(null);
    const [customDuration, setCustomDuration] = useState("");
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedTime, setSelectedTime] = useState(dayjs());
    const [priceType, setPriceType] = useState("");
    const [price, setPrice] = useState("");
    const [currency, setCurrency] = useState("₹");
    const [limitParticipants, setLimitParticipants] = useState(false);

    const [additional, setAdditional] = useState(false);

    const [checkStyle, setCheckStyle] = useState(null);
    // const [parity, setParity] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("")
    const [savedQuestions, setSavedQuestions] = useState([]);

    const formattedDate = selectedDate.format('DD MMM YYYY');
    const formattedTime = selectedTime.format('hh:mm A');

    function htmlToPlainText(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };
    function handleEditorChange(htmlContent) {
        const plainText = htmlToPlainText(htmlContent);
        setDescription(plainText);
    };

    const handleChangeTag = () => {
        if (tag === "") {
            return toast.error("Tag cannot be empty!");
        }
        setSavedTags([...savedTags, tag]);
        setTag('');
    };
    const handleRemoveTag = (index) => {
        setSavedTags(savedTags.filter((_, i) => i !== index));
    };

    const handleSaveQuestion = (e) => {
        e.preventDefault();
        if (question.trim !== '') {
            setSavedQuestions([...savedQuestions, question]);
            setQuestion('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!itemTitle) {
            return showMissingInput({ type: "text", missing: "event title!" });
        }
        else if (!description) {
            return showMissingInput({ type: "text", missing: "event description!" });
        }
        else if (durationBg !== 4 && !duration) {
            return showMissingInput({ type: "select", missing: "event duration (in minutes)!" });
        }
        else if (durationBg === 4 && !customDuration) {
            return showMissingInput({ type: "text", missing: "event custom duration (in minutes)!" });
        }
        else if (!selectedDate) {
            return showMissingInput({ type: "option", missing: "event start date!" });
        }
        else if (!selectedTime) {
            return showMissingInput({ type: "text", missing: "event start time!" });
        }
        else if (!priceType) {
            return showMissingInput({ type: "option", missing: "type of payment!" });
        }
        else if (!currency) {
            return showMissingInput({ type: "option", missing: "type of currency!" });
        }
        else if (!price) {
            return showMissingInput({ type: "text", missing: "event price!" });
        }
        else if (additional && checkStyle === null) {
            return showMissingInput({ type: "select", missing: "listing style!" });
        }
        else if (!user.username) {
            return toast.error("You need to create your Username to proceed!");
        }

        const catalogData = {
            serviceType: "Workshop & Training",
            itemTitle: itemTitle,
            description: description,
            category: category,
            tags: savedTags.map(item => {
                return { tag: item };
            }),
            duration: duration,
            workShopDetails: {
                date: formattedDate,
                time: formattedTime,
                limitParticipants: limitParticipants,
            },
            ...(durationBg === 4 && {
                customDuration: customDuration,
            }),
            price: {
                typeOfPayment: priceType,
                currencyCode: currency,
                amount: price,
            },
            ...(additional && {
                serviceListingStyle: checkStyle === 0 ? "Self-Marketer" :
                    checkStyle === 1 ? "eZ-Advertise" :
                        checkStyle === 2 ? "eZ-Assured" :
                            checkStyle === 3 ? "Advertise" : null,
                // purchasingParity: parity,
                guest: {
                    name: name,
                    email: email,
                },
                questionForAttendee: {
                    question: savedQuestions,
                }
            }),
            seller_avatar: user?.avatar?.url || "",
            username: user.username,
        };

        dispatch(createSellerCatalogWithImage({
            thumbnail: thumbnailImageFile,
            catalogData: catalogData
        }));
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: "-1" }, { indent: "+1" }],
            [{ color: [] }], [{ align: [] }],
            // ['link', 'image', "video"],
        ],
    };

    return (
        <Container sx={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset", mt: '3rem', mb: '3rem' }}>
            <Box display='flex' justifyContent="space-between" alignItems='center'>
                <img
                    src={mainLogoEz}
                    alt="main-log"
                    style={{ marginTop: "-45px", marginLeft: "40%", height: "60%" }}
                />
            </Box>

            <form onSubmit={handleSubmit} className=" py-14">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-10">

                        <TitleDescription
                            itemTitle={itemTitle}
                            setItemTitle={setItemTitle}
                            handleEditorChange={handleEditorChange}
                            modules={modules}
                        />

                        <div className="flex flex-col gap-4">
                            <label htmlFor="title" className="text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center"><HiOutlinePencilSquare size={35} />Category</h2></label>
                            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} id="title" aria-describedby="helper-text-explanation" className="w-full md:w-[40%] bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="One word workshop category" />
                        </div>

                        <Tags
                            tag={tag}
                            setTag={setTag}
                            handleChangeTag={handleChangeTag}
                            savedTags={savedTags}
                            handleRemoveTag={handleRemoveTag}
                        />

                        <Duration
                            setDuration={setDuration}
                            durationBg={durationBg}
                            setdurationBg={setdurationBg}
                            customDuration={customDuration}
                            setCustomDuration={setCustomDuration}
                        />

                        <div className="flex items-center gap-4">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Select Date"
                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(dayjs(date))}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider className="translate-y-1" dateAdapter={AdapterDayjs}>
                                <DemoContainer
                                    components={['MobileTimePicker']}
                                >
                                    <DemoItem label="">
                                        <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} label="Select Time"
                                            value={selectedTime}
                                            onChange={(time) => setSelectedTime(dayjs(time))} />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>

                        <Pricing
                            priceType={priceType}
                            setPriceType={setPriceType}
                            price={price}
                            setPrice={setPrice}
                            currency={currency}
                            setCurrency={setCurrency}
                        />

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1 justify-center w-full">
                                <label htmlFor="Picture" className=" mb-2 text-lg font-bold text-gray-900"><h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center">Attach file&#40;s&#41;</h2></label>
                                <>
                                    <h3 className='text-sm font-medium'>Thumbnail Photo</h3>
                                    <label onClick={() => fileThumbnailRef.current.click()} htmlFor="dropzone-file" className="flex md:w-[70%] flex-col p-1.5 items-center justify-center w-full border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                                        <div className="flex items-center gap-2 justify-center ">
                                            <AiOutlineUpload className='mb-1' size={20} />
                                            <p className=" text-sm text-gray-500 dark:text-gray-400">Upload</p>
                                        </div>
                                    </label>
                                    <input
                                        type="file"
                                        multiple={false}
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleThumbnailFileChange}
                                        ref={fileThumbnailRef}
                                    />
                                    {thumbnailImage && (
                                        <div className="overflow-hidden w-full md:w-[400px] h-[200px]">
                                            <label onClick={() => fileThumbnailRef.current.click()}
                                                className="text-green-600  text-center flex justify-center items-center h-full "
                                            >
                                                <img
                                                    src={thumbnailImage}
                                                    alt="User"
                                                    className="bg-cover w-full h-full object-cover"
                                                />
                                            </label>
                                        </div>
                                    )}
                                </>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-4 py-5`}>
                            <h4 className="text-base font-bold">Limit Participants</h4>
                            <div className="flex gap-3 items-center">
                                <div className="box">
                                    <input id="limit" className="hidden" type="checkbox" value={limitParticipants} onChange={() => setLimitParticipants(prev => !prev)} />
                                    <label htmlFor="limit" className="checking block w-4 h-4 rounded-full cursor-pointer transition-all absolute top-0 left-0 bg-[#333333]"></label>
                                </div>
                                <h3 className="text-xs font-semibold">Select this to limit the number of participants</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {!additional && (
                    <button type="submit" className="px-3 mx-4 my-5 py-1 bg-blue-400 text-center rounded-[10px]">Submit</button>
                )}

                <h3 className={`w-[250px] flex items-center justify-center py-3 my-5 text-xl font-bold text-slate-700 cursor-pointer bg-slate-200 rounded-lg`} onClick={() => setAdditional(prev => !prev)}>
                    {additional ? "Remove Additional" : "Additional Info"}
                </h3>

                {additional && (
                    <>
                        <ListingStyle
                            checkStyle={checkStyle}
                            setCheckStyle={setCheckStyle}
                        />

                        {/* <Parity
                            parity={parity}
                            setParity={setParity}
                            tab={4}
                        /> */}

                        <Questions
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            question={question}
                            setQuestion={setQuestion}
                            savedQuestions={savedQuestions}
                            handleSaveQuestion={handleSaveQuestion}
                        />
                    </>
                )}

                {additional && (
                    <button type="submit" className="px-3 mx-4 my-5 py-1 bg-blue-400 text-center rounded-[10px]">Submit</button>
                )}
            </form>
        </Container>
    )
};

export default Workshop