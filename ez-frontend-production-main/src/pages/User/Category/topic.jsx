import React, { useEffect, useState } from 'react';
import { HiPlusCircle } from 'react-icons/hi';


function Topic({ key, categorydata }) {

    const [ischeck, setischeck] = useState(false)
    // const [category, setcategory] = useState([])


    // const [saveval,setsaveval]=useState([])
    // const cateData = JSON.parse(localStorage.getItem("categorydata"));
    // console.log(cateData);


    // const handlecheck = (e) => {

    //     setischeck(e.target.checked);

    //     cateData.category.push(e.target.value);

    //     localStorage.setItem("categorydata", JSON.stringify({ cateData }))
    // }
    const handlecheck = (e) => {
        setischeck(e.target.checked);
        const cateData = JSON.parse(localStorage.getItem("categorydata")) || { category: [] };
        cateData.category.push(e.target.value);
        localStorage.setItem("categorydata", JSON.stringify(cateData));
    };








    // useEffect(() => {
    //     // const a = "10";
    //     localStorage.setItem("categorydata", JSON.stringify({ "a":10 }))
    // }, [])
    useEffect(() => {
        localStorage.setItem("categorydata", JSON.stringify({ category: [] }));
    }, []);

    return (
        <label htmlFor={key} className='flex px-3 py-2 gap-1 cursor-pointer hover:bg-gray-300 rounded-full bg-gray-200 justify-center items-center border text-lg font-semibold'>{categorydata}
            <input className='hidden' type="checkbox" name={`category-${key}`} checked={ischeck} value={categorydata} id={key} onChange={handlecheck} />
            <HiPlusCircle className='fill-green-600 ' />
        </label>
    )
}

export default Topic
