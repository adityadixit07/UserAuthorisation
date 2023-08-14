import React, { useEffect, useState } from "react";
import { BiLocationPlus, BiLink, BiCalendarWeek, BiCameraMovie } from "react-icons/bi";
import ManageAvailability from "./DaySelect/ManageAvailability";
import { ColorRing } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { updateUserDetails } from "../../../actions/userActions";

function Availability() {
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, user, isProfileUpdating } = useSelector(state => state.user);

  const [openAddLink, setOpenAddLink] = useState(false);
  const [meetingLink, setMeetingLink] = useState("");
  const handleAddMeetingLink = (e) => {
    e.preventDefault();
    // if (meetingLink === "") {
    //   return toast.error("Meeting Link cannot be empty!");
    // }
    // const isValidUrl = urlString => {
    //   var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
    //     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
    //     '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
    //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
    //     '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
    //     '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    //   return !!urlPattern.test(urlString);
    // }
    // if (!isValidUrl(meetingLink)) {
    //   return toast.error("Enter valid link!");
    // }
    dispatch(updateUserDetails({ meetingLink }));
  };
  useEffect(() => {
    if (!isLoading && isAuthenticated && user?.meetingLink) {
      setOpenAddLink(true);
      setMeetingLink(user?.meetingLink);
    }
  }, [isLoading, isAuthenticated, user?.meetingLink]);

  const [bookingPeriod, setBookingPeriod] = useState("");
  const handleBookingPeriod = (e) => {
    e.preventDefault();
    if (bookingPeriod < 0) {
      return toast.error("Weeks cannot be negative!");
    }
    dispatch(updateUserDetails({ bookingPeriod }));
  };
  useEffect(() => {
    if (!isLoading && isAuthenticated && user?.bookingPeriod) {
      setBookingPeriod(user?.bookingPeriod);
    }
  }, [isLoading, isAuthenticated, user?.bookingPeriod]);

  const [noticePeriod, setNoticePeriod] = useState("");
  const handleNoticePeriod = (e) => {
    e.preventDefault();
    if (noticePeriod < 0) {
      return toast.error("Minutes cannot be negative!");
    }
    dispatch(updateUserDetails({ noticePeriod }));
  };
  useEffect(() => {
    if (!isLoading && isAuthenticated && user?.noticePeriod) {
      setNoticePeriod(user?.noticePeriod);
    }
  }, [isLoading, isAuthenticated, user?.noticePeriod]);

  return (
    <>
      <div className="flex">
        <div className="w-full h-full mb-10">
          <h2 className="text-3xl font-bold">Availability</h2>
          <p>Expand your offerings, unleash your potential!</p>

          <div className="flex flex-col gap-10 md:flex-row justify-between items-start p-2 md:p-0 w-full">
            <div className="w-full md:w-[55%]">

              <hr className="my-4" />

              <ManageAvailability />

            </div>

            <div className="w-full md:w-[40%] border rounded-xl p-5">
              <strong>Block dates</strong>
              <p className="mt-[4%]">Add dates when you will be unavailable</p>

              <button className="bg-gray-200 rounded-xl p-3 w-full mt-[2%]">
                Add unavailable dates
              </button>
            </div>
          </div>

          <button className="bg-gray-200 rounded-xl p-3 w-full md:w-1/4 mt-10">
            Additional Info
          </button>

          <div className="px-2 md:px-0 mb-10 md:mb-0">
            {/* <div className="flex justify-start my-8 justify">
            <BiLocationPlus size={25} />
            <div>
              <strong>Google Meet</strong>
              <p>Use google meet for your 1:1 calls</p>
            </div>

            <div className="flex m-auto">
              <div className=" bg-gray-200 rounded-xl p-2 flex flex-row m-1">
                <input type="time" />
              </div>

            </div>
          </div> */}

            <hr />

            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-start my-8">
              <div className="flex flex-col md:w-1/2">
                <div className="flex">
                  <BiLink size={25} />
                  <strong>Personal meeting link</strong>
                </div>
                <p>All your 1:1 meetings will be redirected to this URL</p>
              </div>

              <div className="flex md:w-1/2">
                {!openAddLink ? (
                  <button className="bg-gray-200 rounded-xl p-3 hover:bg-green-500" onClick={() => setOpenAddLink(true)}>
                    + Add meeting link
                  </button>
                ) : (
                  <div className="flex  w-full md:w-[80%]">
                    <input
                      className="bg-gray-200 rounded-l-xl p-3 outline-none w-full"
                      value={meetingLink}
                      onChange={e => setMeetingLink(e.target.value)}
                    />
                    <button
                      disabled={isProfileUpdating}
                      className="px-6 bg-black text-white rounded-r-xl"
                      onClick={handleAddMeetingLink}
                    >
                      {isProfileUpdating ? (
                        <ColorRing
                          visible={true}
                          height="40"
                          width="40"
                          ariaLabel="blocks-loading"
                          wrapperStyle={{}}
                          wrapperClass="blocks-wrapper"
                          colors={["white", "white", "white", "white", "white"]}
                        />
                      ) : (
                        <div className='py-2'>Save</div>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <hr />

            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-start my-8">
              <div className="flex flex-col md:w-1/2 ">
                <div className="flex">
                  <BiCalendarWeek size={25} />
                  <strong>Booking Period</strong>
                </div>
                <p>How far in the future can attendees book</p>
              </div>

              <div className="flex md:w-1/2">
                <div className="flex items-center w-full md:w-[80%]">
                  <input
                    type="number"
                    className="bg-gray-200 rounded-xl p-3 outline-none w-2/4 text-center"
                    value={bookingPeriod}
                    onChange={e => setBookingPeriod(e.target.value)}
                  />
                  <div className="w-1/4 flex justify-center">
                    (<span className="font-bold">in weeks</span>)
                  </div>
                  <button
                    disabled={isProfileUpdating}
                    className="px-6 bg-black text-white rounded-xl w-1/4 h-full flex justify-center items-center"
                    onClick={handleBookingPeriod}
                  >
                    {isProfileUpdating ? (
                      <ColorRing
                        visible={true}
                        height="40"
                        width="40"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={["white", "white", "white", "white", "white"]}
                      />
                    ) : (
                      <div className='py-2'>Save</div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <hr />

            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-start my-8">
              <div className="flex flex-col md:w-1/2">
                <div className="flex">
                  <BiCalendarWeek size={25} />
                  <strong>Notice Period</strong>
                </div>
                <p>Set the minimum amount of notice that is required</p>
              </div>

              <div className="flex md:w-1/2">
                <div className="flex items-center w-full md:w-[80%]">
                  <input
                    className="bg-gray-200 rounded-xl p-3 outline-none w-2/4 text-center"
                    value={noticePeriod}
                    onChange={e => setNoticePeriod(e.target.value)}
                  />
                  <div className="w-1/4 flex justify-center">
                    (<span className="font-bold">in mins</span>)
                  </div>
                  <button
                    disabled={isProfileUpdating}
                    className="px-6 bg-black text-white rounded-xl w-1/4 h-full flex justify-center items-center"
                    onClick={handleNoticePeriod}
                  >
                    {isProfileUpdating ? (
                      <ColorRing
                        visible={true}
                        height="40"
                        width="40"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={["white", "white", "white", "white", "white"]}
                      />
                    ) : (
                      <div className='py-2'>Save</div>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <hr />

            {/* <div className="flex justify-start my-8 justify">
            <BiCameraMovie size={25} />
            <div >
              <strong>Google Meet</strong>
              <p>Use google meet for your 1:1 calls</p>
            </div>

            <div className="flex m-auto">
              <div className=" bg-gray-200 rounded-xl p-2 flex flex-row m-1">
              </div>
              <button>on </button>
            </div>
          </div> */}

            <hr />
          </div>
        </div>
      </div >
    </>
  );
}

export default Availability;