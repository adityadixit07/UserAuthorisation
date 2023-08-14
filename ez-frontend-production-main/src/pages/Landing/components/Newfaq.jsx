import { Collapse } from "antd";
import "antd";
import classNames from "classnames";

const { Panel } = Collapse;

const text1 = ` Anyone with a skill, knowledge, or service to offer can become an eZ seller. Whether you are a professional freelancer or an individual looking to share your expertise, eZ provides a platform to reach a global audience.
`;

const text2 = `You can sell any legal service or skill that you possess, as long as it complies with our terms and conditions. Some examples include graphic design, web development, content writing, legal services, and more.
`;
const text3 = `eZ provides a secure payment system for both buyers and sellers. When a buyer purchases your service, the payment is held in escrow until the service is completed. Once the service is delivered, you can request to withdraw the funds to your preferred payment method.
`;

const text4 = `Once you have registered as a seller, you can create your service listing by providing details about your service, including pricing, delivery time, and any additional requirements. You can also add a portfolio of your work to showcase your skills and expertise.
`;
const text5 = ` It is free to sign up and list your services on eZ. eZ charges a commission on each sale made through the platform, which varies depending on the service category.
`;

const text6 = ` eZ has a support team available to assist with any issues that may arise during the selling process. We also have a dispute resolution process in place to help resolve conflicts between buyers and sellers.`;

const panelClasses = classNames(
  "bg-red",
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

const CommunityDescription = () => {
  return (
    <div className="bg-white  px-[0rem] py-24 w-full">
      <div className="flex flex-col md:flex-row p-8">


        <div className="w-full md:w-1/2 mt-5 md:p-5">
          <Collapse accordion ActiveKey={["1", "2", "3", "4", "5", "6"]} ghost>
            <Panel
              header="Who can sell on eZ?"
              key="1"
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text1}</p>
            </Panel>
            <Panel
              header="What kind of services can I sell on eZ?"
              key="2"
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text2}</p>
            </Panel>
            <Panel
              header="How do I get paid for my services?"
              key="3"
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text3}</p>
            </Panel>
            <Panel
              header="How do I create a service listing?"
              key="4"
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text4}</p>
            </Panel>
            <Panel
              header="How much does it cost to sell on eZ?"
              key="5"
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text5}</p>
            </Panel>
            <Panel
              header="What if I have issues with a buyer or a service I provided?"
              key="6"
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text6}</p>
            </Panel>
          </Collapse>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="md:p-[5%] gap-4 ">
            <h1
              className=" flex font-bold  mb-[2rem] leading-tight text-3xl md:text-4xl xl:text-6xl
	"
            >
              Frequently asked questions
            </h1>
            <p className=" mb-3 text-4xl ">
              Can't find the answer you are looking for?
            </p>
            <h3 className="text-[green] text-[20px] font-bold ">
              Reach out to us
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommunityDescription;
