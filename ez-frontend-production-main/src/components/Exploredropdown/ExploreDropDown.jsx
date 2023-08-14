import Explore from "./exploredrop.module.css";

const ExploreDropDown = ({ dropdowndata }) => {
  return (
    <div className="bg-white z-50 shadow-xl rounded-lg">
      <div className={`${Explore.explore_drop_wrapper} shadow rounded-lg `}>
        {dropdowndata.map((item) => (
          <a
            href={item.link}
            className={`${Explore.explore_drop_content} p-2 flex items-center`}
            key={item.id}
          >
            <div className={`${Explore.explore_icon}`}>
              <img src={item.icon} alt="Explore Icon" />
            </div>
            <div className="w-full flex flex-col px-3">
              <span className="text-sm">{item.text}</span>
              <span className="text-xs">{item.desc}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExploreDropDown;
