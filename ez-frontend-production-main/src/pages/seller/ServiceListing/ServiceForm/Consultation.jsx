import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import "../../seller.css"
import { useDispatch } from 'react-redux';
import ListingStyle from './NewForm/ListingStyle';
import Questions from './NewForm/Questions';
import { toast } from "react-hot-toast";
import { createSellerCatalog } from '../../../../actions/sellerActions';
// import Parity from './NewForm/Parity';
import Pricing from './NewForm/Pricing';
import TitleDescription from './NewForm/TitleDescription';
import Duration from './NewForm/Duration';
import Tags from './NewForm/Tags';
import { showMissingInput } from '../../../../hooks/showMissingInput';
import { Box, Container } from '@mui/material';
import mainLogoEz from '../../../../assets/ez-logo/mainlogo-ex.png'

function Consultation({ user }) {
    const dispatch = useDispatch();
    const [durationBg, setdurationBg] = useState(null)
    // const [priceBg, setpriceBg] = useState(null);

    // const [parity, setParity] = useState(false);
    const [itemTitle, setItemTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [savedTags, setSavedTags] = useState([]);
    const [priceType, setPriceType] = useState("");
    const [currency, setCurrency] = useState("₹");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");
    const [customDuration, setCustomDuration] = useState("");

    const [checkStyle, setCheckStyle] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [savedQuestions, setSavedQuestions] = useState([]);

    const [additional, setAdditional] = useState(false);

    const handleSaveQuestion = (e) => {
        e.preventDefault();
        if (question.trim !== '') {
            setSavedQuestions([...savedQuestions, question]);
            setQuestion('');
        }
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!itemTitle) {
            return showMissingInput({ type: "text", missing: "item title!" });
        }
        else if (!description) {
            return showMissingInput({ type: "text", missing: "item description!" });
        }
        else if (durationBg !== 4 && !duration) {
            return showMissingInput({ type: "select", missing: "duration in minutes!" });
        }
        else if (durationBg === 4 && !customDuration) {
            return showMissingInput({ type: "text", missing: "custom duration in minutes!" });
        }
        else if (!priceType) {
            return showMissingInput({ type: "option", missing: "type of payment!" });
        }
        else if (!currency) {
            return showMissingInput({ type: "option", missing: "type of currency!" });
        }
        else if (!price) {
            return showMissingInput({ type: "text", missing: "item price!" });
        }
        else if (additional && checkStyle === null) {
            return showMissingInput({ type: "select", missing: "listing style!" });
        }
        else if (!user.username) {
            return toast.error("You need to create your Username to proceed!");
        }

        const catalogData = {
            serviceType: "Consultation",
            // purchasingParity: parity,
            itemTitle: itemTitle,
            description: description,
            price: {
                typeOfPayment: priceType,
                currencyCode: currency,
                amount: price,
            },
            duration: duration,
            ...(durationBg === 4 && {
                customDuration: customDuration,
            }),
            ...(additional && {
                serviceListingStyle: checkStyle === 0 ? "Self-Marketer" :
                    checkStyle === 1 ? "eZ-Advertise" :
                        checkStyle === 2 ? "eZ-Assured" :
                            checkStyle === 3 ? "Advertise" : null,
                guest: {
                    name: name,
                    email: email,
                },
                questionForAttendee: {
                    question: savedQuestions
                }
            }),
            tags: savedTags.map(item => {
                return { tag: item };
            }),
            seller_avatar: user?.avatar?.url || "",
            username: user.username,
        };

        dispatch(createSellerCatalog(catalogData));
    };


    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: "-1" }, { indent: "+1" }],
            [{ color: [] }], [{ align: [] }]
            // ['link', 'image', "video"],
        ],
    };

    return (
        <Container sx={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",mt:'3rem',mb:'3rem'}}>
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

                    <Pricing
                        priceType={priceType}
                        setPriceType={setPriceType}
                        price={price}
                        setPrice={setPrice}
                        currency={currency}
                        setCurrency={setCurrency}
                    />
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

                    {/* <Parity
                        parity={parity}
                        setParity={setParity}
                    /> */}
                </>
            )}

            {additional && (
                <button type="submit" className="px-3 mx-4 my-5 py-1 bg-blue-400 text-center rounded-[10px]">Submit</button>
            )}
        </form>
       </Container>
    )
}

export default Consultation

{/* <div className='flex w-full md:w-[30%] justify-between'>
    <button className='backdrop-blur-sm p-2.5 rounded-xl shadow-inner shadow-green-400 hover:bg-green-300 text-green-700'>Basic Info</button>
    <button className='backdrop-blur-sm p-2.5 rounded-xl shadow-inner shadow-slate-400 hover:bg-slate-400 text-slate-800'>Additional Info</button>
</div> */}