/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

import ProfileCategoryStyles from "./ProfileCategoryStyles.module.css";
import categories from "./categories.json";

import categoryIcon from "./categoryIcon.png";
import { toast } from "react-hot-toast";

// import { SiAddthis } from 'react-icons/si';

const ProfileCategoryOld = ({ theme }) => {
  const categoriesData = JSON.parse(JSON.stringify(categories));
  const [optionValue, setOptionValue] = useState([]);

  const headings = [
    { name: "Domain", max: 3 },
    { name: "Job role", max: 1 },
    { name: "Skills", max: 7 }
  ];
  const [headingsIndex, setHeadingsIndex] = useState(0);
  const domains = [
    "Consulting",
    "Creators",
    "Venture capital",
    "Marketing",
    "Finance",
    "Technology",
    "Sales",
    "Engineering",
    "Design/Creative",
  ];
 
  const [domainIndex, setDomainIndex] = useState(0);

  const [domainValue, setDomainValue] = useState([]);
  const [domainValueIndex, setDomainValueIndex] = useState(0);
  const [jobRoleIndex, setjobRoleIndex] = useState(0);
  
  const [jobRoleValueIndex, setjobRoleValueIndex] = useState(0);
  const [jobRoleValue, setJobRoleValue] = useState("");
  const [skillsValue, setSkillsValue] = useState([]);


  const { isLoading, isUpdated, error } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  
   

  const navigate = useNavigate();
  const categoriesSubmit = () => {
    if (domainValue != "" && jobRoleValue != "" && skillsValue != "") {
      const userDetails = JSON.parse(
        localStorage.getItem("UserProfileDetails")
      );

      userDetails.profileCategory = {
        domain: domainValue,
        jobRole: jobRoleValue,
        skills: [skillsValue],
      };

      localStorage.setItem("UserProfileDetails", JSON.stringify(userDetails));
      navigate("/user/birthday");
    } else {
      // console.log("ERROR");
    }
  };

  const OptionClicked = (data) => {
     console.log(data);
     
    const value = data.charAt(0).toUpperCase() + data.slice(1);
    
    if (headingsIndex === 0) {
      // console.log(`domain value index ${domainValueIndex}`);
      // if (domainValueIndex > 2) return; // ignore when already selected

      // if (domainValueIndex === 2) { // when the max option is clicked disable all options and add the last option
      
      //   console.log(`option value is ${optionValue}`);
      // }
      // if (domainValueIndex === 0) {
       
      
      //   setOptionValue([]);
      //   setDomainIndex(domains.indexOf(value));
      // }
      // setOptionValue(optionValue => [...optionValue, value]);
      // setDomainValue(domainValue => [...domainValue, value]);
      // var i = domainValueIndex; i += 1; setDomainValueIndex(i);

      if(domainValue.length<3){
        setOptionValue(optionValue => [...optionValue, value]);
       setDomainValue(domainValue => [...domainValue, value]);
      }
    }
    else if (headingsIndex === 1) {
    //   if (jobRoleValueIndex > 1) return;
    // if (jobRoleValueIndex===0){
    //   setOptionValue([]);
  

    // }
    // setOptionValue(optionValue => [...optionValue, value]);
    //   setJobRoleValue(jobRoleValue => [...jobRoleValue, value]);
    //   var i = jobRoleValueIndex; i += 1; setjobRoleValueIndex(i);
    //   console.log(`value is ${value}`);
     
    
    // console.log(`option value is ${optionValue}`);
       if(jobRoleValue.length<1){
        setOptionValue(optionValue => [...optionValue, value]);
       setJobRoleValue(jobRoleValue => [...jobRoleValue, value]);
       }
     
    }
    else if (headingsIndex === 2) {
      if(skillsValue.length<7){
        setOptionValue(optionValue => [...optionValue, value]);
      setSkillsValue(skillsValue=>[...skillsValue,value]);
      }
    }
    
    
    
  };

  const prevHeading = () => {
  if (headingsIndex > 0) {
    const index = headingsIndex - 1;
    setHeadingsIndex(index);
    setOptionValue([]); // or appropriate initial value based on the data type
  }
};

  const nextHeading = () => {
    if (headingsIndex < 2) {
      // console.log(domainValue);
      var index = headingsIndex;
      index += 1;
      setHeadingsIndex(index);
      setOptionValue([]);
    }
    document.getElementById("search").innerText = "";
    
    
  };
 

  const SearchButton = () => {
    var searchValue = document.getElementById("search").value;
    console.log(searchValue);
    var value = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
    setOptionValue([value]);
    if (headingsIndex == 0) {
      setDomainIndex(domains.indexOf(value));
      setDomainValue(value);
    } else if (headingsIndex == 1) {
      setJobRoleValue(value);
    } else if (headingsIndex == 2) {
      setSkillsValue(value);
    }
  };

  // const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error);
      setLoading(false);
    }

    if (isUpdated) {
      toast.success("Profile Category updated successfully");

      setTimeout(() => {
        navigate("/main/birthday");
      }, 2000);
    }
  }, [error, isUpdated, navigate]);
  

  return (
    <>
      {/* <div className="w-full h-screen flex items-center justify-center"> */}
      <div className={`${ProfileCategoryStyles.ProfileCategoryParent}`}>
        <div>
          <h2
            className={`${!theme ? "text-[#252424]" : "text-[#ffffff]"
              } text-3xl font-bold text-gray-800`}
          >
            Please help us understand you better:
          </h2>
          <p>
            This will help us suggest communities and topics aligned to your
            interests.
          </p>
        </div>
        <div className={`${ProfileCategoryStyles.OptionsParent}`}>
          <h2
            className={`${ProfileCategoryStyles.SubHeading} ${!theme ? "text-[#252424]" : "text-[#ffffff]"
              } font-bold text-gray-800`}
          >
            Choose your {headings[headingsIndex].name} (max {headings[headingsIndex].max}):
          </h2>
          <div className={`${ProfileCategoryStyles.SearchParent}`}>
            <input
              id="search"
              type="text"
              placeholder="Search for more"
              autoComplete="on"
              className={`${ProfileCategoryStyles.Search}`}
            />
            <button
              className={`${ProfileCategoryStyles.SearchButton}`}
              onClick={SearchButton}
            >
              Enter
            </button>
          </div>
          <div className={`${ProfileCategoryStyles.GridParent}`}>
            {headingsIndex == 0
              ? categoriesData[headingsIndex].map((data, index) => (
                <button
                  id="options"
                  key={index}
                  className={`${ProfileCategoryStyles.OptionsButtons}`}
                  onClick={() => OptionClicked(data)}
                >
                  <p>{data}</p>
                  <p className={`${ProfileCategoryStyles.PlusBtn}`}>
                    +{/* <SiAddthis /> */}
                  </p>
                </button>
              ))
              : headingsIndex == 1
                ? categoriesData[headingsIndex][domainIndex].map(
                  (data, index) => (
                    <button
                      id="options"
                      key={index}
                      className={`${ProfileCategoryStyles.OptionsButtons}`}
                      onClick={() => OptionClicked(data)}
                    >
                      <p>{data}</p>
                      <p className={`${ProfileCategoryStyles.PlusBtn}`}>
                        +{/* <SiAddthis /> */}
                      </p>
                    </button>
                  )
                )
                : categoriesData[headingsIndex].map((data, index) => (
                  <button
                    id="options"
                    key={index}
                    className={`${ProfileCategoryStyles.OptionsButtons}`}
                    onClick={() => OptionClicked(data)}
                  >
                    <p>{data}</p>
                    <p className={`${ProfileCategoryStyles.PlusBtn}`}>
                      +{/* <SiAddthis /> */}
                    </p>
                  </button>
                ))}
          </div>
        </div>
        
        {/* nav buttons */}
       
        <div style={{ marginTop: '60px' }}>
  {(headingsIndex === 0 || headingsIndex === 1 || headingsIndex === 2) && optionValue.length > 0 && optionValue.map((data, index) => (
    optionValue.filter(item => item === data).length > 1 ? null : (
      <div className={`${ProfileCategoryStyles.DestinationParent}`} key={index}>
        {/* logo */}
        <div className={`${ProfileCategoryStyles.Label} ${!theme ? "text-[#252424]" : "text-[#ffffff]"}`} style={{ marginTop: '20px' }}>
          {/* <p>{headings[headingsIndex]}</p> */}
          <img height="50px" width="50px" src={categoryIcon}style={{ marginTop: '10px' }} />
        </div>
        {/* values */}
        <div className={`${ProfileCategoryStyles.Output} ${!theme ? "text-[#252424]" : "text-[#ffffff]"}`} style={{ marginTop: '20px' }}>
          <strong className="p-0 m-0 "style={{ marginTop: '30px' }}>
            {data}
          </strong>
        </div>
      </div>
    )
  ))}
</div>





        <div className={`${ProfileCategoryStyles.Next} ${!theme ? "text-[#252424]" : "text-[#ffffff]"}`} style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <button
    disabled={headingsIndex === 0 ? true : false}
    className={`${headingsIndex === 0 ? ProfileCategoryStyles.disabled : ""}`}
    onClick={prevHeading}
  >
    Prev
  </button>
  <button
    disabled={headingsIndex === 2 ? true : false}
    className={`${headingsIndex === 2 ? ProfileCategoryStyles.disabled : ""}`}
    onClick={nextHeading}
  >
    Next
  </button>
  {headingsIndex === 2 ? (
    <button onClick={categoriesSubmit}>Continue</button>
  ) : (
    ""
  )}
</div>


      </div>
      {/* </div> */}
      
    </>
  );
};

export default ProfileCategoryOld;
