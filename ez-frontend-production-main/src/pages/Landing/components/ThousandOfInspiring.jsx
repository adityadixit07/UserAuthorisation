import InspiringData from "./InspiringData";

const ThousandOfInspiring = () => {
  return (
    <div className="pt-6 ml-8 mr-8">
      <h1 className="text-4xl text-center font-bold " style={{ color: "#1DBF73 " }}>
        Join thousands of inspiring Professionals
      </h1>
      <div className="flex items-center  justify-evenly gap-3 rounded-lg" style={{background:"#030B22"}}>
      <div className="ml-3 mr-3 flex flex-row gap-3">
      <InspiringData/>
      <InspiringData/>
      <InspiringData/>
      <InspiringData/>
      
      </div>
      </div>
    </div>
  );
};

export default ThousandOfInspiring;
