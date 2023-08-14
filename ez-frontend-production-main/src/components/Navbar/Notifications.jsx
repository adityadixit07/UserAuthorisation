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

    const [selectedTab, setSelectedTab] = useState(0);

    const [purchaseNotification, setPurchaseNotification] = useState([]);
    useEffect(() => {
        const storedNotifications = JSON.parse(localStorage.getItem('user-notifications'));
        if (storedNotifications) {
            // const consultationNotifications = storedNotifications.filter(
            //     notification => notification.service_type === 'Consultation'
            // );
            setPurchaseNotification(storedNotifications.reverse());
        }
    }, []);

    return (
        <div
            className={`notify custom-scrollbar bg-slate-50 w-[400px] h-[500px] overflow-y-hidden rounded-[12px] shadow-lg block`}
            style={{ width: notificationWidth - 10 }}
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
                                    {notification.service_type === "Consultation" ? (
                                        <>
                                            <span className="text-gray-500">You booked an appointment with</span>
                                            <Link
                                                to={notification.seller_username && `/${notification.seller_username}`}
                                                className={`${notification.seller_username ? "cursor-pointer" : "cursor-default"} pl-1 font-bold`}
                                            >
                                                {notification.seller_name}
                                            </Link>
                                        </>
                                    ) : notification.service_type === "Workshop & Training" ? (
                                        <>
                                            <span className="text-gray-500">You booked a workshop session hosted by</span>
                                            <Link
                                                to={notification.seller_username && `/${notification.seller_username}`}
                                                className={`${notification.seller_username ? "cursor-pointer" : "cursor-default"} pl-1 font-bold`}
                                            >
                                                {notification.seller_name}
                                            </Link>
                                        </>
                                    ) : (
                                        <span className="text-gray-500">You purchased an item. Click to get more details.</span>
                                    )}
                                </div>
                                <Link to="orders" className="border border-gray-300 rounded-lg p-1 text-[18px] flex flex-col" onClick={() => {
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
