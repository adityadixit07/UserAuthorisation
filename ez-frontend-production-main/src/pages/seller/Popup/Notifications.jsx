import React, { useState, useEffect } from 'react';
import { GrClose } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { formatDistanceToNow } from "date-fns";
import "./Notification.css";
import { Link } from 'react-router-dom';

function Notifications({ setShowNotification, notificationRef }) {
    const getRemainingWidth = () => {
        const rect = notificationRef.current.getBoundingClientRect();
        const remainingWidth = window.innerWidth - rect.left;
        return remainingWidth;
    };
    // const getRemainingHeight = () => {
    //     const rect = notificationRef.current.getBoundingClientRect();
    //     const remainingHeight = window.innerHeight - rect.top;
    //     return remainingHeight;
    // };

    const [notificationWidth, setNotificationWidth] = useState(getRemainingWidth());
    useEffect(() => {
        const handleResize = () => {
            setNotificationWidth(getRemainingWidth());
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const [notificationHeight, setNotificationHeight] = useState(getRemainingHeight());
    // useEffect(() => {
    //     const handleResize = () => {
    //         setNotificationHeight(getRemainingHeight());
    //     };
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    const [selectedTab, setSelectedTab] = useState(0);

    const [purchaseNotification, setPurchaseNotification] = useState([]);
    useEffect(() => {
        const storedNotifications = JSON.parse(localStorage.getItem('seller-notifications'));
        if (storedNotifications) {
            // const consultationNotifications = storedNotifications.filter(
            //     notification => notification.service_type === 'Consultation'
            // );
            setPurchaseNotification(storedNotifications.reverse());
        }
    }, []);

    return (
        <div
            className={`custom-scrollbar bg-slate-50 w-[500px] h-[500px] overflow-y-auto rounded-[12px] shadow-lg block`}
            style={{ width: notificationWidth - 10 }}
        // style={{ width: notificationWidth - 10, height: notificationHeight - 100 }}
        >
            <div className="sticky top-0 z-10 bg-slate-50 px-3 pt-3 block">
                <div className="flex items-center justify-between pt-[8px] px-1">
                    <span className="text-[25px] font-[600] cursor-default">Notifications</span>
                    <div className='p-1 border border-gray-200 rounded-md'>
                        <GrClose color="#808080" size={15} className="cursor-pointer" onClick={() => setShowNotification(false)} />
                    </div>
                </div>
                <div className="flex items-center justify-between pt-[8px] px-1">
                    <div className="flex gap-4 text-[14px]">
                        <div className={`${selectedTab === 0 && "font-semibold border-b-2 border-b-black"} w-[75px] flex justify-center cursor-pointer`} onClick={() => setSelectedTab(0)}>
                            <span>View all</span>
                        </div>
                    </div>
                    <BsThreeDots />
                </div>
            </div>

            <div className='px-3 pb-3 h-[80%]'>
                {selectedTab === 0 ? (
                    purchaseNotification.length > 0 ? (
                        <PurchaseList
                            purchaseNotification={purchaseNotification}
                            setShowNotification={setShowNotification}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            No recent Notifications {/* More types of notification */}
                        </div>
                    )
                ) : (
                    <MentionTab />
                )}
            </div>
        </div>
    )
}

const PurchaseList = ({ purchaseNotification, setShowNotification }) => {
    return (
        purchaseNotification.map((notification, index) => {
            const date = new Date(notification.createdAt);
            const formattedDate = date.toString();
            const created_at = formatDistanceToNow(new Date(formattedDate));

            return (
                <div className="pt-[5px] cursor-default" key={index}>
                    <div className="p-[20px] px-1">
                        <div className="flex gap-2 w-full p-1 bg-gray-100 rounded-lg">
                            {/* <img
                            className="w-[45px] h-[45px] rounded-full object-cover"
                            src={notification.photo}
                            alt={notification.name}
                        /> */}
                            <div className="flex flex-col gap-1 w-full">
                                <div className="text-[16px]">
                                    <Link
                                        to={notification.buyer_username && `/${notification.buyer_username}`}
                                        className={`${notification.buyer_username ? "cursor-pointer" : "cursor-default"} font-bold`}
                                    >
                                        {notification.buyer_name}
                                    </Link>
                                    {notification.service_type === "Consultation" ? (
                                        <span className="pl-1 text-gray-500">booked an appointment with you.</span>
                                    ) : notification.service_type === "Workshop & Training" ? (
                                        <span className="pl-1 text-gray-500">booked a workshop session hosted by you.</span>
                                    ) : (
                                        <span className="pl-1 text-gray-500">purchased your item.</span>
                                    )}
                                </div>
                                <Link to="bookings" className="border border-gray-300 rounded-lg p-1 text-[18px] flex flex-col" onClick={() => {
                                    setShowNotification(false);
                                }}>
                                    <span className="font-semibold">Details</span>
                                    <span className="text-[16px]">Title: {notification.seller_itemTitle}</span>
                                    {/* <span className="text-[16px]">Date: {notification.bookedDate}</span>
                                    <span className="text-[16px]">Time: {notification.bookedTime}</span> */}
                                </Link>
                                <div className="text-[13px] text-gray-500 flex justify-end">
                                    <span>{created_at} ago</span>
                                </div>
                                {/* <div className="text-[13px] text-gray-500 flex justify-between">
                                <span>Friday 2:20 PM</span>
                                <span>June 17, 2023</span>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
};

const MentionTab = () => {
    return (
        <div>
            Hello
        </div>
    )
};

export default Notifications

{/* <div className="p-[20px] px-1">
    <div className="flex items-center gap-2 w-full p-1 bg-gray-100 rounded-lg">
        <img
            className="w-[45px] h-[45px] rounded-full object-cover"
            src={viewAllData[1].photo}
            alt={viewAllData[1].name}
        />
        <div className="flex flex-col gap-1 w-full">
            <span className="text-[16px]">
                <span className="font-bold">{viewAllData[1].name}</span> <span className="text-gray-500">followed you.</span>
            </span>
            <div className="text-[13px] text-gray-500 flex justify-between">
                <span>{viewAllData[1].time}</span>
                <span>{viewAllData[1].date}</span>
            </div>
        </div>
    </div>
</div> */}

// {
//     id: 2,
//     type: "follow",
//     name: "Amelia Laurent",
//     photo: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-01.jpg",
//     time: "Friday 10:04am",
//     date: "June 17, 2023"
// },