import React, { useState } from "react";
import { Collapse } from "antd";
import "antd";
import classNames from "classnames";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
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

const imageCardClasses = classNames(
  "bg-white",
  "rounded-lg",
  "overflow-hidden",
  "md:m-20",
  "flex",
  "md:w-96",
  "md:h-96"
);

const imageClasses = classNames(
  "h-100",
  "w-200",
  "object-cover",
  "p-1",
  "md:p-0"
);

const CommunityDescription = () => {
  const [currentImage, setCurrentImage] = useState(
    "https://topmate.io/images/homepage/feature-2-1.svg"
  );

  const handlePanelChange = (activeKey) => {
    switch (activeKey[0]) {
      case "1":
        setCurrentImage("https://topmate.io/images/homepage/feature-2-1.svg");
        break;
      case "2":
        setCurrentImage("https://topmate.io/images/homepage/feature-2-2.svg");
        break;
      case "3":
        setCurrentImage("https://topmate.io/images/homepage/feature-2-3.svg");
        break;
      case "4":
        setCurrentImage("https://topmate.io/images/homepage/feature-2-4.svg");
        break;
      case "5":
        setCurrentImage("https://topmate.io/images/homepage/feature-2-5.svg");
        break;
      default:
        setCurrentImage("https://topmate.io/images/homepage/feature-2-1.svg");
        break;
    }
  };

  return (
    <div className="bg-white w-full my-5 p-[3rem]">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full md:w-2/5">
          <Collapse
            accordion
            ActiveKey={["1", "2", "3", "4", "5"]}
            ghost
            onChange={handlePanelChange}
          >
            <Panel
              header="This is panel header 1"
              key="1"
              className={panelClasses}
            >
              <p className="text-sm text-gray-600">{text}</p>
              <div className="w-full block md:w-1/5 md:hidden">
                <div className={imageCardClasses}>
                  <img
                    className={imageClasses}
                    src={currentImage}
                    alt="Placeholder"
                  />
                </div>
              </div>
            </Panel>
            <Panel
              header="This is panel header 2"
              key="2"
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text}</p>
              <div className="w-full block md:w-1/5 md:hidden">
                <div className={imageCardClasses}>
                  <img
                    className={imageClasses}
                    src={currentImage}
                    alt="Placeholder"
                  />
                </div>
              </div>
            </Panel>
            <Panel
              header="This is panel header 3"
              key="3"
              className={panelClasses}
            >
              <p className="text-gray-600 font-bold text-sm">{text}</p>
              <div className="w-full block md:w-1/5 md:hidden">
                <div className={imageCardClasses}>
                  <img
                    className={imageClasses}
                    src={currentImage}
                    alt="Placeholder"
                  />
                </div>
              </div>
            </Panel>
            <Panel
              header="This is panel header 4"
              key="4"
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text}</p>
              <div className="w-full block md:w-1/5 md:hidden">
                <div className={imageCardClasses}>
                  <img
                    className={imageClasses}
                    src={currentImage}
                    alt="Placeholder"
                  />
                </div>
              </div>
            </Panel>
            <Panel
              header="This is panel header 5"
              key="5"
              className={panelClasses}
            >
              <p className="text-gray-600 text-sm">{text}</p>
              <div className="w-full block md:w-1/5 md:hidden">
                <div className={imageCardClasses}>
                  <img
                    className={imageClasses}
                    src={currentImage}
                    alt="Placeholder"
                  />
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
        <div className="w-full  md:w-3/5 md:block flex items-center justify-center">
          <div className={imageCardClasses}>
            <img
              className={imageClasses}
              src={currentImage}
              alt="Placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommunityDescription;

// Content needs to be updated
