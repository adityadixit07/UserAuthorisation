import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setSellerAvailability } from '../../../../actions/sellerActions';
import { ColorRing } from 'react-loader-spinner';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const hours = [...Array(12).keys()].map(i => i + 1);
let minutes = [0, 30];
const periods = ['AM', 'PM'];

const ManageAvailability = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    const { isAvailabiltyUpdating } = useSelector(state => state.seller);

    const [availability, setAvailability] = useState(
        daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: { isChecked: false, slots: [{ startTime: '08:00 AM', endTime: '09:00 AM' }] } }), {})
    );

    useEffect(() => {
        if (user?.availability) {
            const newAvailability = daysOfWeek.reduce((acc, day) => {
                if (user.availability[day] && Object.values(user.availability[day]).flat().length > 0) {
                    return { ...acc, [day]: { isChecked: true, slots: getTimeSlotsForDay(user.availability[day]) } };
                } else {
                    return { ...acc, [day]: { isChecked: false, slots: [{ startTime: '08:00 AM', endTime: '09:00 AM' }] } };
                }
            }, {});

            setAvailability(newAvailability);
        }
    }, [user?.availability]);

    const getTimeSlotsForDay = (dayAvailability) => {
        let timeSlots = [];
        for (let period in dayAvailability) {
            let periodTimes = dayAvailability[period];

            // Check that there are an even number of time slots.
            if (periodTimes.length % 2 !== 0) {
                console.error('Uneven number of time slots', periodTimes)
                continue;  // Go to the next period if this one has an unpaired slot.
            }

            for (let i = 0; i < periodTimes.length; i += 2) {
                timeSlots.push({
                    startTime: periodTimes[i],
                    endTime: periodTimes[i + 1]
                });

                // Check if the end time is '11:59 AM'
                if (periodTimes[i + 1] === '11:59 AM') {
                    // Add 59 to the minutes array if it's not already there
                    if (!minutes.includes(59)) {
                        minutes.push(59);
                    }
                }
            }
        }
        return timeSlots;
    }

    const [slotError, setSlotError] = useState(false);

    useEffect(() => {
        if (slotError) {
            toast.error(`Cannot add new slot after 12:00 AM`);
            setSlotError(false);  // Reset the slot error state
        }
    }, [slotError]);

    const handleAddTimeSlot = (day) => {
        setAvailability(prevAvailability => {
            const lastSlot = prevAvailability[day].slots[prevAvailability[day].slots.length - 1];

            // Extract end hours, minutes and period (AM/PM)
            let [endHour, endMinutes, endPeriod] = lastSlot.endTime.split(/[:\s]/);

            // Convert endHour and endMinutes to integer
            endHour = parseInt(endHour);
            endMinutes = parseInt(endMinutes);

            // Add 30 minutes to the end time
            endMinutes += 30;

            // Check if minutes exceed 60
            if (endMinutes >= 60) {
                endHour += 1; // Increment hour
                endMinutes -= 60; // Adjust minutes
            }

            // Handle period change and hour overflow
            if (endPeriod === 'AM' && endHour === 12) {
                endHour = 0;
                endPeriod = 'PM';
            } else if (endPeriod === 'PM' && endHour === 12) {
                endHour = 0;
            } else if (endPeriod === 'PM' && endHour === 11 && endMinutes === 30) {
                endHour = 0;
                endPeriod = 'AM';
            }

            // Generate new start time string
            const newStartTime = `${endHour < 10 ? '0' + endHour : endHour}:${endMinutes < 10 ? '0' + endMinutes : endMinutes} ${endPeriod}`;

            // Add 1 hour to the start time to get the end time
            endHour += 1;
            if (endHour === 12 && endPeriod === 'AM') {
                endPeriod = 'PM';
            } else if (endHour === 13) {
                endHour = 1;
            } else if (endHour === 12 && endPeriod === 'PM') {
                endPeriod = 'AM';
            }

            // Generate new end time string
            const newEndTime = `${endHour < 10 ? '0' + endHour : endHour}:${endMinutes < 10 ? '0' + endMinutes : endMinutes} ${endPeriod}`;

            // Generate new time slot using this end time as start time and new end time
            const newSlot = {
                startTime: newStartTime,
                endTime: newEndTime
            };

            // Add this new slot to the day's slots
            const daySlots = [...prevAvailability[day].slots, newSlot];

            // Return updated availability
            return {
                ...prevAvailability,
                [day]: { ...prevAvailability[day], slots: daySlots }
            };
        });
    };

    const handleRemoveTimeSlot = (day, index) => {
        setAvailability(prevAvailability => {
            const daySlots = [...prevAvailability[day].slots];
            daySlots.splice(index, 1);
            return { ...prevAvailability, [day]: { ...prevAvailability[day], slots: daySlots } };
        });
    };

    const handleCheckboxChange = (day) => {
        setAvailability(prevAvailability => {
            return { ...prevAvailability, [day]: { ...prevAvailability[day], isChecked: !prevAvailability[day].isChecked } };
        });
    };

    const handleTimeChange = (day, timeType, time, index) => {
        setAvailability(prevAvailability => {
            const daySlots = [...prevAvailability[day].slots];
            daySlots[index][timeType] = time;
            return { ...prevAvailability, [day]: { ...prevAvailability[day], slots: daySlots } };
        });
    };

    const PERIODS = {
        Morning: { start: 5 * 60, end: 12 * 60 },
        Afternoon: { start: 12 * 60, end: 17 * 60 },
        Evening: { start: 17 * 60, end: 21 * 60 },
        Night: { start: 21 * 60, end: 24 * 60 + 5 * 60 }, // Appending 24*60 for next day early morning
    };

    const mergeTimeSlots = (slots) => {
        return slots;
    };

    const removeDuplicates = (array) => {
        return [...new Set(array)];
    };

    const timeToMins = (time) => {
        let [hours, minutes, period] = time.split(/[:\s]/);
        hours = parseInt(hours);
        minutes = parseInt(minutes);
        if (period === "PM" && hours !== 12) {
            hours += 12;
        } else if (period === "AM" && hours === 12) {
            hours = 0;
        }
        return hours * 60 + minutes;
    };

    const getPeriod = (time) => {
        const minutes = timeToMins(time);
        return Object.keys(PERIODS).find(period => minutes >= PERIODS[period].start && minutes < PERIODS[period].end);
    };

    const minsToTime = (minutes) => {
        let hours = Math.floor(minutes / 60);
        let mins = minutes % 60;
        let period = "AM";
        if (hours > 23) {
            // next day early morning (night period)
            hours -= 24;
        }
        if (hours >= 12) {
            period = "PM";
        }
        if (hours > 12) {
            // convert to 12-hour format
            hours -= 12;
        }
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')} ${period}`;
    };

    const handleAvailabilitySubmit = () => {
        let finalAvailability = {};
        let validationPassed = true;
        let isAnyDayChecked = false;

        for (const day in availability) {
            if (availability[day].isChecked) {
                isAnyDayChecked = true;

                let sortedSlots = [...availability[day].slots].sort((a, b) => {
                    return timeToMins(a.startTime) - timeToMins(b.startTime);
                });

                let previousEndTime = null; // Define it here

                for (let i = 0; i < sortedSlots.length; i++) {
                    let slot = sortedSlots[i];

                    let slotStartMins = timeToMins(slot.startTime);
                    let slotEndMins = timeToMins(slot.endTime);

                    if (previousEndTime !== null && slotStartMins < previousEndTime + 30) {
                        toast.error(`Start time for slot should be at least 30 minutes after the end time of any existing slot for ${day}`);
                        validationPassed = false;
                    }

                    if (slotStartMins >= slotEndMins) {
                        toast.error(`End time should be after start time for ${day}`);
                        validationPassed = false;
                    } else if (slotStartMins === slotEndMins) {
                        toast.error(`Start time and end time cannot be the same for ${day}`);
                        validationPassed = false;
                    } else {
                        let doesOverlap = false;

                        // Check for overlapping slots
                        for (let j = i + 1; j < sortedSlots.length; j++) {
                            let nextSlot = sortedSlots[j];
                            if (slotEndMins > timeToMins(nextSlot.startTime)) {
                                toast.error(`Time slot overlaps for ${day}`);
                                doesOverlap = true;
                                validationPassed = false;
                                break;
                            }
                        }

                        if (!doesOverlap) {
                            if (!(day in finalAvailability)) {
                                finalAvailability[day] = [];
                            }
                            finalAvailability[day].push(slot);
                            previousEndTime = slotEndMins; // Update it here
                        }
                    }
                }
            }
        }

        // if (Object.keys(finalAvailability).length === 0 && !isAnyDayChecked) {
        //     validationPassed = false;
        //     return toast.error("Select a day to proceed!");
        // }

        let finalPeriodAvailability = {};

        if (validationPassed) {
            for (const day in finalAvailability) {
                let dayTimes = finalAvailability[day];
                finalPeriodAvailability[day] = { Morning: [], Afternoon: [], Evening: [], Night: [] };

                for (let i = 0; i < dayTimes.length; i++) {
                    let timeSlot = dayTimes[i];
                    let startPeriod = getPeriod(timeSlot.startTime);
                    let endPeriod = getPeriod(timeSlot.endTime);

                    if (startPeriod === endPeriod) {
                        finalPeriodAvailability[day][startPeriod].push(timeSlot);
                    }
                    else {
                        let startSlot = { ...timeSlot, endTime: minsToTime(PERIODS[startPeriod].end) };
                        let endSlot = { ...timeSlot, startTime: minsToTime(PERIODS[endPeriod].start) };
                        finalPeriodAvailability[day][startPeriod].push(startSlot);

                        // Check if there is a slot in the next period that starts at the end time of the current slot
                        let nextPeriodStartTimeExists = dayTimes.some(slot => slot.startTime === timeSlot.endTime);
                        if (nextPeriodStartTimeExists) {
                            finalPeriodAvailability[day][endPeriod].push(endSlot);
                        }
                    }
                }
            }

            // merge dicts to a proper range
            for (const day in finalPeriodAvailability) {
                const periods = finalPeriodAvailability[day];

                for (const period in periods) {
                    let slots = periods[period];
                    let mergedSlots = mergeTimeSlots(slots);

                    periods[period] = removeDuplicates(mergedSlots.flatMap(slot => [slot.startTime, slot.endTime]));
                }
            }
        }

        if (validationPassed) {
            dispatch(setSellerAvailability(finalPeriodAvailability));
        }
    };

    return (
        <>
            <Toaster toastOptions={{ duration: 5000 }} />

            <div className="flex flex-row justify-between mb-5">
                <strong>Default</strong>
                <button
                    disabled={isAvailabiltyUpdating}
                    className="px-6 bg-black text-white rounded-md"
                    onClick={handleAvailabilitySubmit}
                >
                    {isAvailabiltyUpdating ? (
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
            <div className="w-full flex flex-col gap-6 overflow-x-auto">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className='w-full flex flex-col gap-2'>
                        {availability[day].slots.map((timeSlot, i) => (
                            <DayTimeSelector
                                key={i}
                                day={day}
                                isChecked={availability[day].isChecked}
                                startTime={timeSlot.startTime}
                                endTime={timeSlot.endTime}
                                onCheckboxChange={() => handleCheckboxChange(day)}
                                onTimeChange={(timeType, time) => handleTimeChange(day, timeType, time, i)}
                                onRemoveTimeSlot={() => handleRemoveTimeSlot(day, i)}
                                showDay={i === 0}
                                timeslotIndex={i}
                                handleAddTimeSlot={handleAddTimeSlot}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

function DayTimeSelector({ day, isChecked, startTime, endTime, onCheckboxChange, onTimeChange, onRemoveTimeSlot, showDay, timeslotIndex, handleAddTimeSlot }) {
    const handleStartTimeChange = (time) => {
        onTimeChange('startTime', time);
    };

    return (
        <div className="w-full flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
            <div className="w-1/4 flex items-center gap-1">
                {showDay && (
                    <>
                        <input
                            id="day-select"
                            type="checkbox"
                            className="scale-105 cursor-pointer"
                            checked={isChecked}
                            onChange={onCheckboxChange}
                        />
                        <label htmlFor="day-select" className="cursor-pointer">
                            {day}
                        </label>
                    </>
                )}
            </div>
            <div className="w-full flex gap-2">
                <div className={`w-full flex items-center gap-5`}>
                    <div className="w-full">
                        <TimeInput
                            value={startTime}
                            onChange={time => {
                                onTimeChange('startTime', time);
                                handleStartTimeChange(time);
                            }}
                        />
                    </div>
                    <div className="w-full">
                        <TimeInput
                            value={endTime}
                            onChange={time => onTimeChange('endTime', time)}
                        />
                    </div>
                </div>
                {timeslotIndex > 0 && (
                    <button
                        onClick={onRemoveTimeSlot}
                    >
                        <AiOutlineMinusCircle size={25} />
                    </button>
                )}
                {timeslotIndex === 0 && (
                    <button
                        onClick={() => handleAddTimeSlot(day)}
                    >
                        <AiOutlinePlusCircle size={25} />
                    </button>
                )}
            </div>
        </div>
    );
}

function TimeInput({ value, onChange }) {
    let [hour, minute, period] = value ? value.split(/[:\s]/) : ['12', '00', 'AM'];

    const handleHourChange = (e) => {
        hour = e.target.value;
        onChange(`${hour.padStart(2, "0")}:${minute} ${period}`);
    };

    // const handleHourChange = (e) => {
    //     hour = e.target.value;
    //     onChange(`${hour === "12" ? "12" : (hour % 12).toString().padStart(2, "0")}:${minute} ${period}`);
    // };

    const handleMinuteChange = (e) => {
        minute = e.target.value;
        onChange(`${hour}:${minute.padStart(2, '0')} ${period}`);
    };

    const handlePeriodChange = (e) => {
        period = e.target.value;
        onChange(`${hour}:${minute} ${period}`);
    };

    return (
        <div className="w-full bg-gray-300 rounded-md py-2 px-1 md:px-10 flex items-center justify-between gap-1">
            <div>
                <select value={hour} onChange={handleHourChange} className="bg-transparent">
                    {hours.map((hr, idx) =>
                        <option key={idx}>
                            {hr.toString().padStart(2, '0')}
                        </option>
                    )}
                </select>
                :
                <select value={minute} onChange={handleMinuteChange} className="bg-transparent">
                    {minutes.map(minute =>
                        <option key={minute}>
                            {String(minute).padStart(2, '0')}
                        </option>
                    )}
                </select>
            </div>
            <div className="w-[1px] h-[30px] bg-gray-400 " />
            <select value={period} onChange={handlePeriodChange} className="bg-transparent">
                {periods.map(period =>
                    <option key={period}>
                        {period}
                    </option>
                )}
            </select>
        </div >
    );
}

export default ManageAvailability

// if (validationPassed) {
//     for (const day in finalAvailability) {
//         let dayTimes = finalAvailability[day];
//         finalPeriodAvailability[day] = { Morning: [], Afternoon: [], Evening: [], Night: [] };

//         for (let i = 0; i < dayTimes.length; i++) {
//             let timeSlot = dayTimes[i];
//             let period = getPeriod(timeSlot.startTime);

//             finalPeriodAvailability[day][period].push(timeSlot);
//         }
//     }

//     for (const day in finalPeriodAvailability) {
//         const periods = finalPeriodAvailability[day];

//         for (const period in periods) {
//             let slots = periods[period];
//             let mergedSlots = mergeTimeSlots(slots);

//             periods[period] = mergedSlots.flatMap(slot => [slot.startTime, slot.endTime]);
//         }
//     }
// }

// const mergeTimeSlots = (slots) => {
//     if (slots.length === 0) {
//         return [];
//     }

//     let mergedSlots = [];
//     let startTime = slots[0].startTime;
//     let endTime = slots[0].endTime;

//     for (let i = 1; i < slots.length; i++) {
//         let slot = slots[i];
//         if (endTime === slot.startTime) {
//             endTime = slot.endTime;
//         } else {
//             mergedSlots.push({ startTime, endTime });
//             startTime = slot.startTime;
//             endTime = slot.endTime;
//         }
//     }

//     mergedSlots.push({ startTime, endTime });
//     return mergedSlots;
// };