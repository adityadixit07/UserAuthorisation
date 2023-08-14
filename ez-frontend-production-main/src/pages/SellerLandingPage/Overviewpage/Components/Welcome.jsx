import ezDashboard from "../../../../assets/ez-logo/ezDashboard.svg";

const Welcome = ({ name }) => {
    return (
        <div className=" flex md:scale-100 justify-between  md:h-[28.5vh] relative">
            <div className="h-full p-3 items-center flex justify-between overviewbox relative">
                <div className="md:mx-2 md:my-0  md:px-2 md:py-0">
                    <div className="md:text-5xl flex flex-col gap-3 text-2xl font-bold">
                        <h1> Hello, {name} </h1>
                        <h1 className="md:text-2xl text-xl" color='#333 !important'>Welcome to your Dashboard</h1>
                    </div>
                    <p className="hidden mt-3 md:block">Expand your offerings, unleash your potential!</p>
                </div>
            </div>
            <div className='mt-0'>
                <img
                    src={ezDashboard}
                    className=" aspect-square"
                    alt="My Image"
                />
            </div>
        </div>
    )
}

export default Welcome