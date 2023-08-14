import React, { useRef, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import "../sellerr.css";
import { AiOutlineUpload } from "react-icons/ai";
import serviceListingCheck from "../../../../assets/serviceListingCheck.svg";

import ListingStyle from './NewForm/ListingStyle';
// import Parity from './NewForm/Parity';
import { useDispatch } from 'react-redux';
import { createSellerCatalogWithImage } from '../../../../actions/sellerActions';
import Pricing from './NewForm/Pricing';
import TitleDescription from './NewForm/TitleDescription';
import Tags from './NewForm/Tags';
import { toast } from 'react-hot-toast';
import { showMissingInput } from '../../../../hooks/showMissingInput';
import mainLogoEz from '../../../../assets/ez-logo/mainlogo-ex.png'
import { Box, Container } from '@mui/material';

function Products({ user }) {
    const dispatch = useDispatch();

    const fileThumbnailRef = useRef();
    const [thumbnailImage, setThumbnailImage] = useState("");
    const [thumbnailImageFile, setThumbnailImageFile] = useState(null);
    const handleThumbnailFileChange = (e) => {
        setThumbnailImage(URL.createObjectURL(e.target.files[0]));
        setThumbnailImageFile(e.target.files[0]);
        e.target.value = "";
    };

    const [additional, setAdditional] = useState(false);
    // const [parity, setParity] = useState(false);

    const [itemTitle, setItemTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [savedTags, setSavedTags] = useState([]);

    const [clicked, setClicked] = useState(false);
    const [topicCheck, setTopicCheck] = useState(false);
    const [topic, setTopic] = useState("");
    const [savedTopics, setSavedTopics] = useState([]);

    const [priceType, setPriceType] = useState("");
    const [currency, setCurrency] = useState("₹");
    const [price, setPrice] = useState("");

    const [checkStyle, setCheckStyle] = useState(null)

    // const [durationBg, setdurationBg] = useState(null)

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

    const handleSaveTopic = () => {
        if (topic !== '') {
            setSavedTopics([...savedTopics, topic.trim()]);
            setTopic('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!itemTitle) {
            return showMissingInput({ type: "text", missing: "item title!" });
        }
        else if (!description) {
            return showMissingInput({ type: "text", missing: "item description!" });
        }
        else if (!priceType) {
            return showMissingInput({ type: "text", missing: "type of payment!" });
        }
        else if (!currency) {
            return showMissingInput({ type: "option", missing: "type of currency!" });
        }
        else if (!price) {
            return showMissingInput({ type: "text", missing: "item price!" });
        }
        else if (!user.username) {
            return toast.error("You need to create your Username to proceed!");
        }

        if (additional) {
            if (checkStyle === null) {
                return toast.error("Choose the listing style to proceed!");
            }
        }

        const catalogData = {
            serviceType: "Digital Product",
            itemTitle: itemTitle,
            description: description,
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
            }),
            tags: savedTags.map(item => {
                return { tag: item };
            }),
            ...(savedTopics.length !== 0 && {
                topics: {
                    topic: savedTopics,
                },
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
            <form onSubmit={handleSubmit} className=" py-14 border-b">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-10">

                        <TitleDescription
                            itemTitle={itemTitle}
                            setItemTitle={setItemTitle}
                            handleEditorChange={handleEditorChange}
                            modules={modules}
                        />

                        <Tags
                            tag={tag}
                            setTag={setTag}
                            handleChangeTag={handleChangeTag}
                            savedTags={savedTags}
                            handleRemoveTag={handleRemoveTag}
                        />

                        <div>
                            <h1 className='font-bold'>Topics</h1>
                            <div className='md:w-[40%]'>
                                <label htmlFor="ourself" className='text-slate-700'>Share anything about the product</label>
                                <div className='relative'>
                                    <h3 className='text-blue-600 cursor-pointer' onClick={() => {
                                        setClicked(true);
                                        setTopicCheck(!topicCheck);
                                    }}>
                                        {!clicked ? "+ Add" : "+ Add new"}
                                    </h3>
                                    <textarea
                                        placeholder='Describe here!'
                                        id="textarea"
                                        cols="30"
                                        rows="5"
                                        className={`${topicCheck ? " " : "hidden"} w-full p-2.5 border rounded-xl`}
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                    />
                                    <button className={`px-3 my-1 mx-4 py-1  bg-blue-400 text-center rounded-[10px] ${topicCheck ? "" : "hidden"}`} type='button' onClick={handleSaveTopic}>
                                        Add
                                    </button>
                                    <ul className='flex flex-col  gap-1'>
                                        {savedTopics.map((savedTopic, index) => (
                                            <li className='px-3 list-none text-sm font-semibold text-blue-900 flex items-center' key={index}>
                                                <img src={serviceListingCheck} className='me-1' />
                                                {savedTopic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
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
                                            < AiOutlineUpload className='mb-1' size={20} />
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

                    </div>
                </div>

                {!additional && (
                    <button type="submit" className="px-3  mx-4 my-4 py-1 bg-blue-400 text-center rounded-[10px]">Submit</button>
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
                    /> */}
                    </>
                )}

                {additional && (
                    <button type="submit" className="px-3  mx-4 my-4 py-1 bg-blue-400 text-center rounded-[10px]">Submit</button>
                )}
            </form>
        </Container>

    )
}

export default Products
