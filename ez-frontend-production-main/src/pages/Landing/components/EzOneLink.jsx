import { Collapse } from "antd";
import "antd"
import classNames from "classnames";
import onetooneconsultation from '../../../assets/ez-logo/onetooneConsultation.png'
import addAccordianIcon from '../../../assets/ez-logo/addAccordianIcon.svg'

const { Panel } = Collapse;

const text1 = `No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page..
`;

const text2 = `No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.
`;
const text3 = `No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.
`;

const text4 = `No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.
`;
const text5 = `No more managing multiple links or portfolios. With eZ One-Link, consolidate all your profiles –Easily connect social media, work platforms, and more – into a single, high-converting landing page.
`;



const panelClasses = classNames(
  "bg-white",
  "border-b-4",
  "text-bold",
  "text-xl",
  "border-black-200",
  "rounded",
  "shadow-md",
  "hover:shadow-lg",
  "mb-4",
  "p-4",
  "font-bold"
);



const iconStyle = {
    widht: '19.51px',
    height: "19.51px", 
  };
const CommunityDescription = () => {
  return (
    <div className="bg-white  px-[0rem] py-24 w-full " style={{padding:'0 5rem'}}>

        <div className="text-center">
        <h3 style={{fontSize:"3rem",color:"#565656",fontWeight:800}}>eZ One-Link:</h3>
        <h3 style={{fontSize:"1.7rem",color:"#565656",fontWeight:800}}>ShowCase everything You are and More!</h3>
        <h5 style={{fontSize:"1rem",color:"#454545"}}>Join Professionals Using eZ For Their Link in Bio</h5>
        </div>

      <div className="flex flex-col md:flex-row p-8 justify-around items-center">
{/* accordian */}
        <div className="w-full md:w-1/2 mt-5 md:p-5">
          <Collapse accordion ActiveKey={["1", "2", "3", "4", "5", "6"]} ghost>
            <Panel
              header="the Power of eZ One-Link"
              key="1"
              style={{backgroundColor:"#DEFFFD",borderRadius:"8px",color:"#003902"}}
              className={panelClasses}
              expandIconPosition="right"
              extra={<img src={addAccordianIcon} alt="one-to-one-consultation" style={iconStyle} />}
            >
              <p className="text-gray-600 text-sm">{text1}</p>
            </Panel>
            <Panel
              header="Sell Your Service"
              key="2"
              style={{backgroundColor:"#83FAAC",borderRadius:"8px",color:"#003902"}}
              extra={<img src={addAccordianIcon} alt="one-to-one-consultation" style={iconStyle} />}
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text2}</p>
            </Panel>
            <Panel
              header="Create Your Proof of Work"
              key="3"
              style={{backgroundColor:"#F7E384",borderRadius:"8px",color:"#003902"}}
              extra={<img src={addAccordianIcon} alt="one-to-one-consultation" style={iconStyle} />}
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text3}</p>
            </Panel>
            <Panel
              header="No need of CV anymore"
              key="4"
              style={{backgroundColor:"#83FAEB",borderRadius:"8px",color:"#003902"}}
              extra={<img src={addAccordianIcon} alt="one-to-one-consultation" style={iconStyle} />}
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text4}</p>
            </Panel>
            <Panel
              header="Create Your own Brand"
              key="5"
              style={{backgroundColor:"#F9D8EE",borderRadius:"8px",color:"#003902"}}
              extra={<img src={addAccordianIcon} alt="one-to-one-consultation" style={iconStyle} />}
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text5}</p>
            </Panel>
            
          </Collapse>
        </div>
        {/* image */}
        <div className="w-full md:w-1/2 flex justify-items-end" >
          <img src={onetooneconsultation} alt="one-to-one-consultation"  style={{maxWidth:"700px",maxHeight:"80%",objectFit:"cover",}}/>
        </div>
      </div>
    </div>
  );
};
export default CommunityDescription;


