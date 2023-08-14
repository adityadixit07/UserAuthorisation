import { useState } from "react";
import { BiCheckShield } from "react-icons/bi";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useSelector } from "react-redux";
import { submitHook } from "../../../Profile/FirstTimeProfileEdit/submitHook";
import ButtonLoading from "../../../../static/ButtonLoading";

const CertificationsDetails = ({ certifications }) => {
  const { isAuthenticated, user, profile, isProfileUpdating } = useSelector(state => state.user);

  const [inputList, setInputList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  function addInputField() {
    if (isAuthenticated && user?._id === profile?._id) {
      setInputList([...inputList, { id: idCounter }]);
      setIdCounter(idCounter + 1);
    }
  };
  function removeInputField(id) {
    if (isAuthenticated && user?._id === profile?._id) {
      setInputList(inputList.filter(input => input.id !== id));
    }
  };

  return (
    <>
      <div className="bio-top-header flex items-center">
        <div className="bio-top-header-icon">
          <BiCheckShield size={22} />
        </div>
        <h1>CERTIFICATION</h1>
      </div>

      {certifications.length === 0 && (
        <>
          {user?._id !== profile?._id && (
            <div className="w-full bg-[#d9d9d91a] rounded-[10px] text-white mt-8 py-3 px-4">
              <p className='text-justify px-2 py-2'>
                No certificate added yet!
              </p>
            </div>
          )}
          {isAuthenticated && user?._id === profile?._id && (
            <FirstTimeInput
              isProfileUpdating={isProfileUpdating}
            />
          )}
        </>
      )}

      <div className="w-full mt-4">
        {certifications.length > 0 && (
          certifications.map((item, i) => (
            <CertificateComponent
              key={i}
              item={item}
              isAuthenticated={isAuthenticated}
              userId={user?._id}
              profileId={profile?._id}
              isProfileUpdating={isProfileUpdating}
            />
          ))
        )}
      </div>

      <div className="flex flex-col gap-3">
        {inputList.map((input, i) => (
          <CertificateInput
            key={input.id}
            id={input.id}
            isProfileUpdating={isProfileUpdating}
            length={inputList.length}
            removeInputField={removeInputField}
          />
        ))}
      </div>

      {isAuthenticated && user?._id === profile?._id && (
        <button type='button' className='text-blue-300 flex items-center gap-3 my-3' onClick={addInputField}>
          <CiCirclePlus size={20} />
          Add Certificate
        </button>
      )}
    </>
  );
};

const FirstTimeInput = ({ isProfileUpdating }) => {
  const renderMonthOptions = () => {
    const months = [
      { value: 1, label: 'January' },
      { value: 2, label: 'February' },
      { value: 3, label: 'March' },
      { value: 4, label: 'April' },
      { value: 5, label: 'May' },
      { value: 6, label: 'June' },
      { value: 7, label: 'July' },
      { value: 8, label: 'August' },
      { value: 9, label: 'September' },
      { value: 10, label: 'October' },
      { value: 11, label: 'November' },
      { value: 12, label: 'December' },
    ];

    return months.map((month) => (
      <option key={month.value} value={month.label}>
        {month.label}
      </option>
    ));
  };

  const { handleCertificateAPI } = submitHook();

  const [certificate, setCertificate] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [certificateURL, setCertificateURL] = useState("");

  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const handleCertificateSubmit = (e) => {
    e.preventDefault();

    handleCertificateAPI(
      certificate,
      issuedBy,
      certificateURL,
      startMonth,
      startYear,
      endMonth,
      expiryYear
    );
  };

  return (
    <form className='border border-gray-200 text-white px-4 py-2 rounded mt-6 w-full' onSubmit={handleCertificateSubmit}>
      <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>Certificate name *</h3>
        <input placeholder='Ex. AWS Solution Architect' className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          value={certificate} onChange={(e) => setCertificate(e.target.value)}
        />
      </div>
      <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>Issued by *</h3>
        <input placeholder='EX.AWS' className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          value={issuedBy} onChange={(e) => setIssuedBy(e.target.value)}
        />
      </div>
      <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>Certificate URL *</h3>
        <input placeholder='Certificate.com/link' className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          value={certificateURL} onChange={(e) => setCertificateURL(e.target.value)}
        />
      </div>
      <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center  '>
        <h3 className='text-base font-semibold'>Issued date *</h3><div className='w-full md:w-96 flex justify-between gap-5 items-center'>

          <select className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
            value={startMonth}
            onChange={event => setStartMonth(event.target.value)}
          >
            <option value="">Select Month</option>
            {renderMonthOptions()}
          </select>
          <input className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
            type="number"
            value={startYear}
            onChange={event => setStartYear(event.target.value)}
            placeholder="Issued Year"
          />
        </div>
      </div>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>Expiry date</h3><div className=' md:w-96 w-full flex justify-between gap-5 items-center'>
          <select className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
            value={endMonth}
            onChange={event => setEndMonth(event.target.value)}
          >
            <option value="">Select Month</option>
            {renderMonthOptions()}
          </select>
          <input className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
            type="number"
            value={expiryYear}
            onChange={event => setExpiryYear(event.target.value)}
            placeholder="Expiry Year"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
          {isProfileUpdating ? <ButtonLoading /> : "Save"}
        </button>
      </div>
    </form>
  )
}

const CertificateComponent = ({ item, isAuthenticated, userId, profileId, isProfileUpdating }) => {
  const [viewCertificate, setViewCertificate] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const renderMonthOptions = () => {
    const months = [
      { value: 1, label: 'January' },
      { value: 2, label: 'February' },
      { value: 3, label: 'March' },
      { value: 4, label: 'April' },
      { value: 5, label: 'May' },
      { value: 6, label: 'June' },
      { value: 7, label: 'July' },
      { value: 8, label: 'August' },
      { value: 9, label: 'September' },
      { value: 10, label: 'October' },
      { value: 11, label: 'November' },
      { value: 12, label: 'December' },
    ];

    return months.map((month) => (
      <option key={month.value} value={month.label}>
        {month.label}
      </option>
    ));
  };

  const { handleCertificateAPI, handleRemoveCertificateAPI } = submitHook();

  const [certificate, setCertificate] = useState(item?.name || "");
  const [issuedBy, setIssuedBy] = useState(item?.issuedBy || "");
  const [certificateURL, setCertificateURL] = useState(item?.url || "");

  const [startMonth, setStartMonth] = useState(item?.issueMonth || "");
  const [startYear, setStartYear] = useState(item?.issueYear || "");
  const [endMonth, setEndMonth] = useState(item?.expiryMonth || "");
  const [expiryYear, setExpiryYear] = useState(item?.expiryYear || "");

  const handleCertificateSubmit = (e) => {
    e.preventDefault();

    handleCertificateAPI(
      certificate,
      issuedBy,
      certificateURL,
      startMonth,
      startYear,
      endMonth,
      expiryYear,
      item
    );
  };

  return (
    <div className="w-full">
      <div className={`w-full block`}>
        <div className="w-full bg-slate-300 text-black rounded-md my-2 flex p-3 justify-between items-center">
          <div className="school-name">
            <div className="text-gray-700 text-lg">{item?.name}</div>
            <div className="text-gray-500 text-sm">
              Issued by: {item?.issuedBy}
            </div>
          </div>
          <div className="school-desc cursor-pointer" onClick={() => {
            if (userId !== profileId) {
              setViewCertificate(prev => !prev);
            }
            else if (isAuthenticated && userId === profileId) {
              setEditOpen(prev => !prev)
            }
          }}>
            <div className="text-center bg-teal-400 p-1 px-3 rounded-md text-white">
              {userId !== profileId ? (
                viewCertificate ? "Close" : "View"
              ) : isAuthenticated && userId === profileId && (
                editOpen ? "Close" : "Edit"
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Certificate Detail */}
      <div className={`w-full rounded-lg  text-black ${viewCertificate ? "block" : "hidden "}`}>
        <div className="w-full">
          <div className="w-full">
            <label htmlFor="Certificate-name" className="text-sm font-medium text-white">
              Certificate Title
            </label>
            <div className="cursor-default border border-gray-400 text-white focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full">
              {item?.name}
            </div>
          </div>
          <div className="w-full mt-3 flex gap-3">
            <div className="w-full">
              <label htmlFor="company-name" className="text-sm font-medium text-white">
                Issuer
              </label>
              <div className="cursor-default border border-gray-400 text-white focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full">
                {item?.issuedBy}
              </div>
            </div>
          </div>
          {item?.issueMonth || item?.issueYear && (
            <div className="w-full mt-3 flex gap-3">
              <div className="w-full">
                <label htmlFor="certificate-id" className="text-sm font-medium text-white">
                  Date
                </label>
                <div className="cursor-default border border-gray-400 text-white focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full">
                  {item?.issueMonth} {item.issueYear}
                </div>
              </div>
            </div>
          )}
          <div className="w-full mt-3 flex gap-3">
            <div className="w-full flex flex-col">
              <label htmlFor="certificate-id" className="text-sm font-medium text-white">
                URL
              </label>
              <a target="_blank" href={item?.url} className="cursor-pointer w-fit border border-gray-400 text-white focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2">
                View here
              </a>
            </div>
          </div>
        </div>
      </div>
      {isAuthenticated && userId === profileId && (
        <>
          {editOpen && (
            <form className='border border-gray-200 text-white px-4 py-2 rounded mt-2 w-full' onSubmit={handleCertificateSubmit}>
              <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center '>
                <h3 className='text-base font-semibold'>Certificate name *</h3>
                <input placeholder='Ex. AWS Solution Architect' className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
                  value={certificate} onChange={(e) => setCertificate(e.target.value)}
                />
              </div>
              <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center '>
                <h3 className='text-base font-semibold'>Issued by *</h3>
                <input placeholder='EX.AWS' className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
                  value={issuedBy} onChange={(e) => setIssuedBy(e.target.value)}
                />
              </div>
              <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center '>
                <h3 className='text-base font-semibold'>Certificate URL *</h3>
                <input placeholder='Certificate.com/link' className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
                  value={certificateURL} onChange={(e) => setCertificateURL(e.target.value)}
                />
              </div>
              <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center  '>
                <h3 className='text-base font-semibold'>Issued date *</h3><div className='w-full md:w-96 flex justify-between gap-5 items-center'>

                  <select className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
                    value={startMonth}
                    onChange={event => setStartMonth(event.target.value)}
                  >
                    <option value="">Select Month</option>
                    {renderMonthOptions()}
                  </select>
                  <input className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
                    type="number"
                    value={startYear}
                    onChange={event => {
                      if (event.target.value.length <= 4) {
                        setStartYear(event.target.value);
                      }
                    }}
                    placeholder="Issued Year"
                  />
                </div>
              </div>
              <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
                <h3 className='text-base font-semibold'>Expiry date</h3><div className=' md:w-96 w-full flex justify-between gap-5 items-center'>
                  <select className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
                    value={endMonth}
                    onChange={event => setEndMonth(event.target.value)}
                  >
                    <option value="">Select Month</option>
                    {renderMonthOptions()}
                  </select>
                  <input className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
                    type="number"
                    value={expiryYear}
                    onChange={event => {
                      if (event.target.value.length <= 4) {
                        setExpiryYear(event.target.value);
                      }
                    }}
                    placeholder="Expiry Year"
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <button
                  type='button'
                  className='text-blue-300  flex items-center gap-3'
                  onClick={() => handleRemoveCertificateAPI(item._id)}
                >
                  <CiCircleMinus size={20} />
                  Remove
                </button>
                <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
                  {isProfileUpdating ? <ButtonLoading /> : "Save"}
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  )
};

const CertificateInput = ({ id, isProfileUpdating, length, removeInputField }) => {
  const renderMonthOptions = () => {
    const months = [
      { value: 1, label: 'January' },
      { value: 2, label: 'February' },
      { value: 3, label: 'March' },
      { value: 4, label: 'April' },
      { value: 5, label: 'May' },
      { value: 6, label: 'June' },
      { value: 7, label: 'July' },
      { value: 8, label: 'August' },
      { value: 9, label: 'September' },
      { value: 10, label: 'October' },
      { value: 11, label: 'November' },
      { value: 12, label: 'December' },
    ];

    return months.map((month) => (
      <option key={month.value} value={month.label}>
        {month.label}
      </option>
    ));
  };

  const { handleCertificateAPI } = submitHook();

  const [certificate, setCertificate] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [certificateURL, setCertificateURL] = useState("");

  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const handleCertificateSubmit = (e) => {
    e.preventDefault();

    handleCertificateAPI(
      certificate,
      issuedBy,
      certificateURL,
      startMonth,
      startYear,
      endMonth,
      expiryYear
    );
  };

  return (
    <form className='border border-gray-200 text-white px-4 py-2 rounded mt-6 w-full' onSubmit={handleCertificateSubmit}>
      <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>Certificate name *</h3>
        <input placeholder='Ex. AWS Solution Architect' className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          value={certificate} onChange={(e) => setCertificate(e.target.value)}
        />
      </div>
      <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>Issued by *</h3>
        <input placeholder='EX.AWS' className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          value={issuedBy} onChange={(e) => setIssuedBy(e.target.value)}
        />
      </div>
      <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>Certificate URL *</h3>
        <input placeholder='Certificate.com/link' className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
          value={certificateURL} onChange={(e) => setCertificateURL(e.target.value)}
        />
      </div>
      <div className='py-2.5 flex md:flex-row flex-col  justify-between gap-2 md:items-center  '>
        <h3 className='text-base font-semibold'>Issued date *</h3><div className='w-full md:w-96 flex justify-between gap-5 items-center'>

          <select className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
            value={startMonth}
            onChange={event => setStartMonth(event.target.value)}
          >
            <option value="">Select Month</option>
            {renderMonthOptions()}
          </select>
          <input className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
            type="number"
            value={startYear}
            onChange={event => setStartYear(event.target.value)}
            placeholder="Issued Year"
          />
        </div>
      </div>
      <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
        <h3 className='text-base font-semibold'>Expiry date</h3><div className=' md:w-96 w-full flex justify-between gap-5 items-center'>
          <select className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
            value={endMonth}
            onChange={event => setEndMonth(event.target.value)}
          >
            <option value="">Select Month</option>
            {renderMonthOptions()}
          </select>
          <input className='p-2.5 rounded-[10px] w-1/2 border border-slate-400 text-slate-800'
            type="number"
            value={expiryYear}
            onChange={event => setExpiryYear(event.target.value)}
            placeholder="Expiry Year"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <button
          type='button'
          className='text-blue-300  flex items-center gap-3'
          onClick={() => {
            if (certificate || issuedBy || certificateURL || startMonth || startYear || endMonth || expiryYear || length > 0) {
              setCertificate("");
              setIssuedBy("");
              setCertificateURL("");
              setStartMonth("");
              setStartYear("");
              setEndMonth("");
              setExpiryYear("");
              removeInputField(id);
            }
          }}
        >
          <CiCircleMinus size={20} />
          Remove
        </button>
        <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
          {isProfileUpdating ? <ButtonLoading /> : "Save"}
        </button>
      </div>
    </form>
  )
};

export default CertificationsDetails;