import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./FirstEditParent.css"
import ButtonLoading from '../../../static/ButtonLoading';
import { submitHook } from './submitHook';

function FirstEditVolunteering({ user, isProfileUpdating }) {
    const { handleVolunteerAPI } = submitHook();

    const [role, setRole] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [expiryYear, setExpiryYear] = useState("");
    const [description, setDescription] = useState("");
    function htmlToPlainText(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };
    function handleEditorChange(htmlContent) {
        const plainText = htmlToPlainText(htmlContent);
        setDescription(plainText);
    };

    const handleVolunteerSubmit = (e) => {
        e.preventDefault();

        handleVolunteerAPI(role, organisation, startMonth, startYear, endMonth, expiryYear, description, user);
    };

    useEffect(() => {
        if (user?.about) {
            populateVounteerData(
                user?.about?.volunteerExperience,
                setRole, setOrganisation,
                setStartMonth, setStartYear,
                setEndMonth, setExpiryYear,
                setDescription
            );
        }
    }, []);

    return (
        <>
            <div className='flex gap-2 items-center text-base font-semibold'>
                <h2 className='text-3xl p-4 w-full bg-gray-200 text-black font-bold rounded'>Add Volunteering</h2>
            </div>
            <form className='border border-gray-200 px-4 py-2 rounded mt-6 w-full' onSubmit={handleVolunteerSubmit}>
                <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
                    <h3 className='text-base font-semibold'>Role *</h3>
                    <input className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
                        value={role} onChange={(e) => setRole(e.target.value)}
                    />
                </div>
                <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
                    <h3 className='text-base font-semibold'>Organisation *</h3>
                    <input className='p-2.5 rounded-[10px] w-full md:w-96 border border-slate-400 text-slate-800' type="text" name=""
                        value={organisation} onChange={(e) => setOrganisation(e.target.value)}
                    />
                </div>

                <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
                    <h3 className='text-base font-semibold'>Start date *</h3>
                    <div className='w-full md:w-96 flex md:flex-row flex-col justify-between gap-5 items-center'>
                        <select value={startMonth} className='p-2.5 rounded-[10px] w-full md:w-1/2 border border-slate-400 text-slate-800'
                            onChange={e => setStartMonth(e.target.value)}
                        >
                            <option value="">Select Month</option>
                            {renderMonthOptions()}
                        </select>
                        <select value={startYear} className='p-2.5 rounded-[10px] w-full md:w-1/2 border border-slate-400 text-slate-800'
                            onChange={event => setStartYear(parseInt(event.target.value))}
                        >
                            {renderYearOptions()}
                        </select>
                    </div>
                </div>
                <div className='py-2.5 flex md:flex-row flex-col justify-between gap-2 md:items-center '>
                    <h3 className='text-base font-semibold'>Expiry date *</h3>
                    <div className='w-full md:w-96 flex md:flex-row flex-col justify-between gap-5 items-center'>
                        <select value={endMonth} className='p-2.5 rounded-[10px] w-full md:w-1/2 border border-slate-400 text-slate-800'
                            onChange={e => setEndMonth(e.target.value)}
                        >
                            <option value="">Select Month</option>
                            {renderMonthOptions()}
                        </select>
                        <select value={expiryYear} className='p-2.5 rounded-[10px] w-full md:w-1/2 border border-slate-400 text-slate-800'
                            onChange={event => setExpiryYear(parseInt(event.target.value))}
                        >
                            {renderYearOptions()}
                        </select>
                    </div>
                </div>
                <div className='py-2.5 flex flex-col justify-between gap-2 '>
                    <h3 className='text-base font-semibold'>Description</h3>
                    <ReactQuill modules={modules} className="md:w-[70%] w-full  customeditor"
                        value={description}
                        onChange={handleEditorChange}
                    />
                    <h2 className='text-xs text-slate-100 font-semibold'>If you leave this empty, you will miss an apportunity to tell a a compelling story about your role, resonsibilities, accomplishment and learnings.</h2>
                    <h4 className='text-xs text-slate-100 font-semibold'>But yeah, this is optional. No pressure.</h4>
                </div>
                <div className="w-full flex items-center justify-end">
                    <button type='submit' disabled={isProfileUpdating} className='text-white bg-green-500 rounded px-4 py-1 h-[40px] flex items-center justify-center'>
                        {isProfileUpdating ? <ButtonLoading /> : "Save"}
                    </button>
                </div>
            </form>
        </>
    )
}

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

const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear - 10; year <= currentYear + 10; year++) {
        years.push(
            <option key={year} value={year}>
                {year}
            </option>
        );
    }
    return years;
};

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: "-1" }, { indent: "+1" }],
        [{ color: [] }], [{ align: [] }],
    ],
};

const populateVounteerData = (
    volunteerData,
    setRole, setOrganisation,
    setStartMonth, setStartYear,
    setEndMonth, setExpiryYear,
    setDescription
) => {
    volunteerData.forEach(volunteer => {
        setRole(volunteer.role);
        setOrganisation(volunteer.organisation);
        setStartMonth(volunteer.startMonth);
        setStartYear(volunteer.startYear);
        setEndMonth(volunteer.endMonth);
        setExpiryYear(volunteer.endYear);
        setDescription(volunteer.description);
    })
}

export default FirstEditVolunteering