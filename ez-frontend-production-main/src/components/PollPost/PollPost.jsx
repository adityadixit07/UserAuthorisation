import { useState } from "react";
import UserActive from "../StartupPost/startupcomp/UserActive";
// import 'https://res.cloudinary.com/ds6spmr71/image/upload/v1682998363/sandipkundu_uvet0f.jpg' from "../../Assets/sandipkundu.jpg"

function PollPost() {
  const [showvote, setshowvote] = useState(false);

  const [options, setOptions] = useState([
    { id: 1, text: "Python", votes: 0 },
    { id: 2, text: "Javascript", votes: 0 },
    { id: 3, text: "Go", votes: 0 },
  ]);

  const handleVote = (optionId) => {
    const updatedOptions = options.map((option) =>
      option.id === optionId ? { ...option, votes: option.votes + 1 } : option
    );
    setOptions(updatedOptions);
  };

  const totalVotes = options.reduce((acc, option) => acc + option.votes, 0);

  // console.log(options);
  return (
    <>
      <div className="my-5 py-8 px-3 bg-[#F5F5F5] rounded-[10px]">
        <UserActive />
        <div className="p-5 bg-white rounded-[7px] mt-2">
          <h1 className="font-bold">
            What programming language do you use during the coding interview?
          </h1>
          <div
            className={`py-3 ${
              showvote ? "hidden" : "flex"
            } flex-col w-full gap-3`}
          >
            {options.map((option) => {
              return (
                <label
                  key={option.id}
                  htmlFor=""
                  className="inline-flex gap-3 items-center"
                >
                  <input
                    type="checkbox"
                    name=""
                    value=""
                    className="rounded-full w-5 h-5"
                    onClick={() => handleVote(option.id)}
                  />
                  <span>{option.text}</span>
                </label>
              );
            })}
          </div>
          <div
            className={`py-3 ${
              showvote ? "flex" : "hidden"
            } flex-col w-full gap-3`}
          >
            {options.map((option) => {
              return (
                <label
                  key={option.id}
                  htmlFor=""
                  className="w-full flex gap-3 items-center"
                >
                  <span>
                    {Math.trunc(Number(option.votes / totalVotes) * 100) > 0
                      ? Math.trunc(Number(option.votes / totalVotes) * 100)
                      : 0}
                    %
                  </span>
                  <div className="w-full">
                    <p>{option.text}</p>
                    <div
                      className=""
                      style={{
                        width: `${Math.trunc(
                          Number(option.votes / totalVotes) * 100
                        )}%`,
                        maxWidth: "100%",
                        backgroundColor: `rgba(${Math.trunc(
                          Number(option.votes / totalVotes) * 100
                        )},255,0,0.9)`,
                        height: "5px",
                        borderRadius: "10px",
                      }}
                    ></div>
                  </div>
                  <div></div>
                </label>
              );
            })}
          </div>

          <div className="relative flex justify-between items-center">
            <div className="flex items-center">
              <div className="relative flex ">
                {options.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-7 h-7 rounded-full overflow-hidden -ml-3 border-2 border-slate-500"
                    >
                      <img
                        src={
                          "https://res.cloudinary.com/ds6spmr71/image/upload/v1682998363/sandipkundu_uvet0f.jpg"
                        }
                        alt="User Icon"
                        className="bg-cover w-full h-full aspect-square"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 px-2 text-sm text-slate-500 ">
                <span className="flex">Total Votes: 24</span>
                <span>5 Days Left</span>
              </div>
            </div>
            <button
              type="button"
              className={` ${
                showvote ? "hidden" : "block"
              } text-sm py-2 px-3 font-semibold bg-blue-500 text-white rounded-[10px]`}
              onClick={() => setshowvote(true)}
            >
              Vote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PollPost;
