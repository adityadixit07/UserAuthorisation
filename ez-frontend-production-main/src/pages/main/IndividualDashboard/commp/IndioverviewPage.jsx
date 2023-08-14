import React from 'react'
import ezDashboard from "../../../../assets/ez-logo/ezDashboard.svg"
import "./IndioverviewPage.css"

function IndioverviewPage({ user }) {
    return (
        <div className=" flex md:scale-100 justify-between  md:h-[28.5vh] relative">
            <div className="h-full p-3 items-center flex justify-between overviewbox relative">
                <div className="md:mx-2 md:my-0  md:px-2 md:py-0">
                    <div className="md:text-5xl flex flex-col gap-3 text-2xl font-bold">
                        <h1> Hello, {user.firstName} </h1>
                        <h1 className="md:text-4xl text-2xl"> to your Dashboard</h1>
                    </div>
                    <p className="hidden mt-3 md:block">Expand your offerings, unleash your potential!</p>
                </div>

            </div>
            {/* <div className="overflow-hidden"> */}
            <div className=" ">
                <img
                    src={ezDashboard}
                    className=" aspect-square"
                    alt="My Image"
                />
            </div>
        </div>
    )
}

export default IndioverviewPage