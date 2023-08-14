import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaArrowRight, FaRegHandshake,FaRegStar,FaDev } from "react-icons/fa"
import { HiOutlinePencilAlt } from "react-icons/hi"
import { BiCategory, BiCloudUpload, BiTagAlt,BiGitBranch} from 'react-icons/bi';
import { AiOutlinePlus, AiFillPlusCircle, AiOutlinePlusCircle, AiOutlineUpload } from "react-icons/ai"
import { SiOpenproject , SiHashnode } from "react-icons/si"
import { GiWireframeGlobe } from "react-icons/gi"
import { SiCrystal } from "react-icons/si"
import { AiOutlineGithub } from "react-icons/ai";
import { showcaseData } from '../../static/Showcase';
import imgyx from '../../assets/Gender img/img4.png'
import "./PortfolioNew.css";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PortfolioNew = () => {
  const [addClick, setAddClick] = useState(false);

  return (
    <>
      <div className="p-5 w-full">
        <h1 className='mb-3 text-xl font-semibold'>My Projects</h1>
        <div className='w-full mb-5'>
          <div className='flex rounded-[10px] border w-full md:w-1/3 p-3 items-center gap-2 cursor-pointer'
            onClick={() => setAddClick(prev => !prev)}
          >
            <SiCrystal className='fill-green-500' size={30} />
            <div className='flex flex-col'>
              <h2 className='font-semibold text-lg'>Add Project</h2>
              <p className='text-slate-500 text-base'>Add your project, case studies or products tear downs</p>
            </div>
            <AiFillPlusCircle className='fill-green-500' size={30} />
          </div>
        </div>

        {addClick ? <AddProjectForm /> : <ShowcaseWork />}
      </div>
    </>
  )
}

const AddProjectForm = () => {
  const [projName, setProjName] = useState("");
  const [tagline, setTagline] = useState("");
  const [projType, setProjType] = useState("");
  const [skill, setSkill] = useState("");
  const [savedSkills, setSavedSkills] = useState([]);
  const handleAddSkill = () => {
    if (skill.trim() !== '') {
      setSavedSkills([...savedSkills, skill]);
      setSkill('');
    }
  };
  const [brief, setBrief] = useState("");
  function htmlToPlainText(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };
  function handleEditorChange(htmlContent) {
    const plainText = htmlToPlainText(htmlContent);
    setBrief(plainText);
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
  const [urlCheck, setUrlCheck] = useState(false);
  const [url, setUrl] = useState("");
  const [projAssoc, setProjAssoc] = useState("");
  const [clientFirstName, setClientFirstName] = useState("");
  const [clientLastName, setClientLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [rawPhone, setRawPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const phoneHandler = (phone, country) => {
    setPhone(phone);
    setCountryCode(country.dialCode);
    const rawPh = phone.replace(country.dialCode, "");
    setRawPhone(rawPh);
  };

  console.log(phone);

  return (
    <div>
      <div className="container p-5">
        <h1 className="custom-heading p-3 my-4 bg-slate-400 text-2xl text-black rounded-tl-lg">
          <b>Project Details</b>
        </h1>
        <div className=' flex justify-end '>
          <h1 className='text-right text-green-500 flex items-center gap-2'>
            <FaArrowRight /> View Engaging Exemplars
          </h1>
        </div>

        <div className="scroll-container w-full">
          <form className='flex flex-col gap-5 w-full'>

            <div className="flex flex-col gap-2 w-1/2 items-start">
              <div className='flex flex-col gap-2 w-1/2'>
                <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
                  <HiOutlinePencilAlt size={20} />
                  <label htmlFor="project name"><b>Project Name:</b></label>
                </div>
                <p className='text-slate-500 w-[90%]'>Add a Project Line in 60 characters or less</p>
              </div>
              <div className='w-1/2'>
              
              <textarea style={{ border: "1px solid black",width:"600px" }}
      value={projName}
      onChange={(e) => setProjName(e.target.value)}
      className="form-control w-full h-20"
      id="project name"
      cols={10}
      rows={20}
      placeholder="Explain in brief about the project"
    />
              </div>
            </div>

            <div className="form-group flex flex-col items-start gap-5">
  <div className='flex flex-col gap-2 w-1/2 items-start'>
    <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
      <BiTagAlt size={20} />
      <label htmlFor="tagline"><b>Tagline</b></label>
    </div>
    <p className='text-slate-500 w-[90%]'>Tell about your project in 200 characters or less</p>
  </div>
  <div className='w-1/2 border: 1px solid black ' style={{ border: "1px solid black" }}>
    <textarea
      value={tagline}
      onChange={(e) => setTagline(e.target.value)}
      className="form-control !w-full h-20 "
      id="project name"
      cols={10}
      rows={20}
      placeholder="Explain in brief about the project"
    />
  </div>
</div>


            <div className="form-group flex flex-col items-start gap-5">
              <div className='flex flex-col gap-2 w-1/2 item-start'>
                <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
                  <BiCategory size={20} />
                  <label htmlFor="Type of project"><b>Type of Project:</b></label>
                </div>
              </div>
              <div className='w-1/2'>
                <select name="tagline" value={projType} onChange={(e) => setProjType(e.target.value)} className="form-control !w-full" placeholder="Explain in brief about the project">
                  <option disabled value="This is a project about cats">Choose the service catagery</option>
                  <option value="This is a project about dogs">Website Designer</option>
                  <option value="This is a project about cars">App Designer</option>
                </select>
              </div>
            </div>

            <div className="form-group flex flex-col items-start gap-5">
              <div className='flex flex-col gap-2 w-1/2 item-start'>
                <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
                  <SiOpenproject size={20} />
                  <label htmlFor="Type of project"><b>Skill Used</b></label>
                </div>
              </div>
              <div className='w-1/2'>
                <div className='flex gap-4 w-full'>
                  <input type='text' value={skill} onChange={(e) => setSkill(e.target.value)} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  <button className='p-2.5 bg-green-500 rounded-lg' onClick={handleAddSkill}>
                    Save&nbsp;tags
                  </button>
                </div>
                <div className='flex gap-1 '>
                  {savedSkills.map((data) => (
                    <h1 className=' px-2 py-0.5 flex gap-0.5 items-center bg-slate-200 font-medium text-slate-600 rounded-md text-xs'>
                      <AiOutlinePlus className='rotate-45' />{data}
                    </h1>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-group flex flex-col items-start gap-5">
              <div className='flex flex-col gap-2 w-1/2 items-start'>
                <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
                  <SiOpenproject size={20} />
                  <label htmlFor="Skill used"><b>Brief</b></label>
                </div>
              </div>
              <div className='w-1/2'>
                <ReactQuill theme="snow" onChange={handleEditorChange} modules={modules} className="form-control border-none !w-full  customeditor" />
              </div>
            </div>

            <div className='flex flex-col gap-2 w-1/2 items-start'>
              <div className='flex flex-col gap-2 w-1/2 item-start'>
                <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
                  <BiCloudUpload size={20} />
                  <label htmlFor="name"><b>Upload cover Picture</b></label>
                </div>
              </div>
              <div className='w-1/2'>
                <label htmlFor="dropzone-file" className="mt-3 flex flex-col form-control p-1.5 items-center justify-center !w-full border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                  <div className="flex items-center gap-2 justify-center">
                    <AiOutlineUpload className='mb-1' size={20} />
                    <p className=" text-sm text-gray-500 dark:text-gray-400">Upload</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>

            <div className='flex flex-col gap-2 w-1/2 items-start'>
              <div className='flex flex-col gap-2 w-1/2 item-start'>
                <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
                  <HiOutlinePencilAlt className='' size={20} />
                  <label htmlFor="Supporting Doc"><b>Supporting Documents</b></label>
                </div>
                <p className='text-slate-500 w-[90%]'>Add a Project Line in 60 characters or less</p>
              </div>
              <div className='w-1/2'>
                <label htmlFor="Picture" className=" mb-2  text-lg font-bold text-gray-900"><h2 className="py-1.5 w-fit px-10 shadow-md rounded-[10px] bg-slate-100 flex gap-5 items-center">Attach file&#40;s&#41;</h2></label>
                <label htmlFor="dropzone-file" className="flex flex-col p-1.5 items-center justify-center w-full border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                  <div className="flex items-center gap-2 justify-center ">
                    <AiOutlineUpload className='mb-1' size={20} />
                    <p className=" text-sm text-gray-500 dark:text-gray-400"> upload</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-1/2 items-start">
              <div className='flex flex-col gap-2 w-1/2 items-start'>
                <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
                  <GiWireframeGlobe size={20} />
                  <label htmlFor="Project Link"><b>Project Link:</b></label>
                </div>
              </div>
              <div className='flex flex-col w-1/2'>
                <h3 className='text-blue-600 w-full cursor-pointer flex gap-1 items-center' onClick={() => setUrlCheck(!urlCheck)}><AiOutlinePlusCircle />Add New Question</h3>
                <input type="url" value={url} className={`form-control !w-full ${urlCheck ? "" : "invisible"}`} id="name" onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-1/2 items-start">
              <div className='flex flex-col gap-2 w-1/2 item-start'>
                <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
                  <FaRegHandshake size={20} />
                  <label htmlFor="Associated"><b>Associated With</b></label>
                </div>
              </div>
              <div className='w-1/2 pt-3'>
                <select value={projAssoc} onChange={(e) => setProjAssoc(e.target.value)} className='form-control !w-full'>
                  {["Association1", "Association2", "Association3", "Association4", "Association5"].map((data, index) => (
                    <option key={index} value={data}>{data}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-1/2 items-start">
              <div className='flex flex-col gap-2 w-1/2 item-start'>
                <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
                  <FaRegHandshake className='' size={20} />
                  <label htmlFor="collaborator"><b>Collaborators</b></label>
                </div>
              </div>
              <div className='pt-3'>
                <div className='flex gap-5 justify-between form-control !w-full border-none'>
                  <input type="text" className="w-full p-2.5 border hover:border-blue-300 border-slate-500 rounded-md " placeholder="Enter collaborator name" />
                  <button className='p-2.5 bg-green-500 rounded-md text-white font-semibold'>Add&nbsp;collaborator</button>
                </div>
              </div>
            </div>

            <div className="form-group flex justify-between gap-5">
              <div className='flex flex-col gap-2 w-1/2'>
                <div className="flex items-center px-2.5 py-1 w-fit labelshadow rounded-md gap-4">
                  <FaRegHandshake size={20} />
                  <label htmlFor="collaborator"><b>Clients Details</b></label>
                </div>
              </div>
              <div className='flex flex-col gap-2 w-1/2 items-start'>
                <div className='flex gap-3 items-center w-full'>
                  <h1 className='font-bold'>Name:</h1>
                  <div className='flex gap-5 w-full'>
                    <input type="text" value={clientFirstName} onChange={(e) => setClientFirstName(e.target.value)} className="p-1.5 border hover:border-blue-300 border-slate-500  w-full rounded-md " placeholder="First name" />
                    <input type="text" value={clientLastName} onChange={(e) => setClientLastName(e.target.value)} className=" p-1.5 border hover:border-blue-300 border-slate-500  w-full rounded-md " placeholder="Last name" />
                  </div>
                </div>
                <div className='flex gap-3 items-center'>
                  <h1 className='font-bold'>Mobile Number:</h1>
                  <div className="w-[100%] flex flex-col justify-start my-3 mt-5">
                    <PhoneInput
                      country={"in"}
                      value={phone}
                      inputProps={{
                        autoComplete: "rawphone",
                      }}
                      onChange={phoneHandler}
                      placeholder="Phone Number"
                      className="w-[100%] text-sm text-[#8C8787] placeholder:text-[#8C8787] rounded focus:border-[#2587e3] outline-none border-2 border-gray-400 border-solid "
                    />
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
        <div className="w-full p-3 flex justify-between bg-slate-100">
          <button className="border border-slate-400 rounded-lg   p-2.5"><b>Save as draft</b></button>
          <button className="border border-slate-400 bg-green-400 rounded-lg px-4  py-2.5"><b>Publish</b></button>
        </div>
      </div>
    </div>
  )
};

const ShowcaseWork = () => {
  return (
    <>
      <h1 className='mb-3 text-xl font-semibold'>Showcase your work from:</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-3 items-center mb-5'>
        {showcaseData.map((data, index) => (
          <div
            key={index}
            className='flex rounded-[10px] cursor-pointer border  p-3 items-center gap-2'
          >
            {/* <SiCrystal className='fill-green-500' size={30} /> */}
            <img
              src={data.icon}
              className="w-[30px] h-[30px]"
              alt={data.projectname}
            />
            <div className='flex flex-col'>
              <h2 className='font-semibold text-lg'>{data.projectname}</h2>
              <p className='text-slate-500 text-base'>{data.article}</p>
            </div>
            <AiFillPlusCircle className='fill-green-500' size={30} />
          </div>
        ))}
      </div>
      {/* github */}
          <div className='flex justify-between m-3 rounded-md flex'>
          <p>TOtal 77 repositories </p>
          <div>

<select id="repo" className='p-2 border-black'>
  <option value="volvo">Total Repositories</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
          </div>

          </div>

        <div className='flex flex-wrap gap-3 ml-[3px]'>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">Shrin KAro</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <FaRegStar size={20} className='m-6'/>  
  

  </div>
    <div className="flex flex-row justify-between p-4 leading-normal  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
  <img className="object-cover w-full rounded-t-lg h-30 pb-9 p-5 pt-3 md:h-auto md:w-30  md:rounded-none md:rounded-l-lg" src={imgyx} alt=""/>
         
    </div> 
    
    
</a>

<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">Shrin KAro</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <FaRegStar size={20} className='m-6'/>  

  </div>
    <div className="flex flex-row justify-between p-4 leading-normal  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
  <img className="object-cover w-full rounded-t-lg h-30 pb-9 p-5 pt-3 md:h-auto md:w-30  md:rounded-none md:rounded-l-lg" src={imgyx} alt=""/>
         
    </div> 
    
    
</a>
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">Shrin KAro</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <FaRegStar size={20} className='m-6'/>  

  </div>
    <div className="flex flex-row justify-between p-4 leading-normal  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
  <img className="object-cover w-full rounded-t-lg h-30 pb-9 p-5 pt-3 md:h-auto md:w-30  md:rounded-none md:rounded-l-lg" src={imgyx} alt=""/>
         
    </div> 
    
    
</a>

<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">Shrin KAro</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <FaRegStar size={20} className='m-6'/>  

  </div>
    <div className="flex flex-row justify-between p-4 leading-normal  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-lg">
  <img className="object-cover w-full rounded-t-lg h-30 pb-9 p-5 pt-3 md:h-auto md:w-30  md:rounded-none md:rounded-l-lg" src={imgyx} alt=""/>
         
    </div> 
    
    
</a>

        </div>
        <div className='p-6 flex justify-center '>
        <select id="repo" className='p-2 border-black'>
  <option value="volvo">Total Repositories</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
        </div>
         
    {/* hashnode  */}
    <div className='flex gap-1 m-2'>
    <SiHashnode size={30} />
    <h3><strong>Hashnode</strong></h3>
    </div>
      
      <div className='flex flex-wrap gap-3 ml-[3px]'>
          
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">javascript learning</p>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <p className='font-normal text-gray-700 p-2'>jun 06 2022</p>

  </div>
    <div className="flex flex-row justify-between p-4 leading-normal  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
  <img className="object-cover w-full rounded-t-lg mx-auto h-30 m-10 md:h-auto md:w-30  md:rounded-none md:rounded-l-lg" src={imgyx} alt=""/>
   
    </div> 
  
 

    
    
</a>

<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">javascript learning</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <p className='font-normal text-gray-700 p-2'>jun 06 2022</p>

  </div>
    <div className="flex flex-row justify-between p-4 leading-normal  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
  <img className="object-cover w-full rounded-t-lg  mx-auto h-30 m-10   md:h-auto md:w-30  md:rounded-none md:rounded-l-lg" src={imgyx} alt=""/>
         
    </div> 
    
    
</a>

<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">javascript learning</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <p className='font-normal text-gray-700 p-2'>jun 06 2022</p>

  </div>
    <div className="flex flex-row justify-between p-4 leading-normal  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
  <img className="object-cover w-full rounded-t-lg   mx-auto h-30 m-10    md:h-auto md:w-30  md:rounded-none md:rounded-l-lg" src={imgyx} alt=""/>
         
    </div> 
    
    
</a>

<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">javascript learning</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <p className='font-normal text-gray-700 p-2'>jun 06 2022</p>

  </div>
    <div className="flex flex-row justify-between p-4 leading-normal  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
  <img className="object-cover w-full rounded-t-lg  mx-auto h-30 m-10  md:h-auto md:w-30  md:rounded-none md:rounded-l-lg" src={imgyx} alt=""/>
    </div>  
   
    
    
</a>

      </div>

  <div>

  </div>

  {/* dev community  */}
  <div className='m-5 flex gap-1'>
  <FaDev size={30}/>
    <strong>Dev Community</strong>
  </div>

  <div className='flex flex-wrap gap-3 ml-[3px]'>
  <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">javascript learning</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <p className='font-normal text-gray-700 p-2'>jun 06 2022</p>

  </div>
    
   
    
    
</a>

<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">javascript learning</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <p className='font-normal text-gray-700 p-2'>jun 06 2022</p>

    </div>  
   
    
    
</a>

<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">javascript learning</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <p className='font-normal text-gray-700 p-2'>jun 06 2022</p>

  </div>
    
   
    
    
</a>

<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100">
  <div>

  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-3">javascript learning</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 m-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <p className='font-normal text-gray-700 p-2'>jun 06 2022</p>

  </div>
     
   
    
    
</a>
  </div>

    </>
  )
}

export default PortfolioNew