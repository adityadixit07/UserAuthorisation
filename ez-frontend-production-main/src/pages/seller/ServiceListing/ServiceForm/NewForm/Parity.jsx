import React from 'react'

const Parity = ({ parity, setParity, tab }) => {
    return (
        <div className={`flex flex-col gap-4 ${tab === 3 ? "pb-10" : "py-5"}`}>
            <h4 className="text-base font-bold">Purchasing Power Parity </h4>
            <p className="md:w-[40%] w-full text-xs">Charge customers different amounts  depending on the cost of living in their country. <span className="border-b font-semibold text-black border-black">Learn more</span></p>
            <div className="flex gap-3 items-center">
                <div className="box">
                    <input id="checkbox" className="hidden" type="checkbox" value={parity} onChange={() => setParity(prev => !prev)} />
                    <label htmlFor="checkbox" className="checking block w-4 h-4 rounded-full cursor-pointer transition-all absolute top-0 left-0 bg-[#333333]"></label>
                </div>
                <h3 className="text-xs font-semibold">Enable location wise dynamic pricing</h3>
            </div>
        </div>
    )
}

export default Parity