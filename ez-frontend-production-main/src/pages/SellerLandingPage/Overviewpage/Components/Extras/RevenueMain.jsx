import { BiUpArrow } from "react-icons/bi";
import { BsCurrencyRupee } from "react-icons/bs";


const RevenueMain = ({ viewsName, data,imageSrc }) => {
  const boxstyle = {
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    background: "#F9FBFC",
    height:"150px",
    width:"200px",
    borderRadius:"14px",
  };
  return (
    <div className="flex flex-col justfiy-between items-center" style={boxstyle}>
     <div className="ml-3 pt-2">
     <h1 className="text-2xl" style={{fontWeight:500}}>{viewsName}</h1>
      <div className="flex flex-row justify-evenly mt-4 items-center">
        <div className="flex flex-row items-center mr-4">
          <BsCurrencyRupee/>
        <h1 className="text-2xl font-medium text-center">{data}</h1>
        </div>
        
        <span>
          <img src={imageSrc} alt="" />
        </span>
      </div>
      <div className="flex flex-row items-center gap-2 mt-4">
        <BiUpArrow />
        <h3 className="text-xl font-medium" style={{color:"#63B981"}}> 171.22%</h3>
      </div>
     </div>
    </div>
  );
};



export default RevenueMain;
