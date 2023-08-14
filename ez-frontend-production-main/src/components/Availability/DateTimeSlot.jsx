import React, { useCallback, useRef } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useSelector } from 'react-redux';
import { format, addMinutes } from 'date-fns';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

dayjs.extend(isBetween);
dayjs.extend(weekOfYear);

const DateTimeSlot = ({ duration, date, setDate, isDateSelected, setIsDateSelected, selectedTime, setSelectedTime }) => {
    const { profile } = useSelector(state => state.user);
    const refsMap = React.useRef({});

    const isTimePassed = (time, selectedDate) => {
        const now = dayjs();
        const noticePeriod = profile?.noticePeriod; // Get notice period from profile
        const compareTime = dayjs(`${selectedDate.format('YYYY-MM-DD')} ${time}`, 'YYYY-MM-DD h:mm A');
        return (now.diff(compareTime, 'minute') > -noticePeriod);
    };

    const handleDateChange = (newValue) => {
        setDate(newValue);
        setIsDateSelected(true);
        setSelectedTime(null);

        setTimeout(() => {
            const selectTimeDiv = document.getElementById('select-time');
            const selectTimeDivPosition = selectTimeDiv.offsetTop;
            window.scrollTo({ top: selectTimeDivPosition, behavior: 'smooth' });
        }, 100)
    };

    const setTime = (time) => {
        setSelectedTime(time);
    };

    const timeSlots = [
        { period: 'Morning', times: ['8:00 AM', '9:00 AM', '10:00 AM'] },
        { period: 'Afternoon', times: ['12:00 PM', '1:00 PM', '2:00 PM'] },
        { period: 'Evening', times: ['5:00 PM', '6:00 PM', '7:00 PM'] },
        { period: 'Night', times: ['9:00 PM', '10:00 PM', '11:00 PM'] },
    ];

    const hasAvailableSlots = (obj) => {
        return obj && Object.values(obj).some(day => Object.values(day).flat().length > 0);
    };
    const hasAnyAvailableSlots = (availability) => {
        return Object.values(availability).some(day =>
            Object.values(day).some(slot => Array.isArray(slot) && slot.length > 0)
        );
    };
    const useProfileAvailability = hasAnyAvailableSlots(profile?.availability || {});
    const isDayDisabled = useCallback((dateToCheck) => {
        const today = dayjs().startOf('day');
        const isPastDate = dayjs(dateToCheck).isBefore(today, 'day');

        if (!useProfileAvailability || !profile?.availability) {
            // Enable all dates except the previous date
            return isPastDate;
        }

        const day = dayjs(dateToCheck).format('dddd');
        return !hasAvailableSlots(profile.availability[day]);
    }, [profile, useProfileAvailability]);

    let availableTimeSlots = [];
    const generateTimeSlots = (startTime, endTime, duration) => {
        const timeSlots = [];
        let current = new Date(`01/01/2000 ${startTime}`);
        const end = new Date(`01/01/2000 ${endTime}`);

        while (current <= end) {
            timeSlots.push(format(current, 'hh:mm a'));
            current = addMinutes(current, duration);
        }

        return timeSlots;
    };

    if (date && useProfileAvailability) {
        const weekday = dayjs(date).format('dddd');

        let periods = profile?.availability[weekday];

        let timeSlotsPerPeriod = {};

        for (let period in periods) {
            let times = periods[period];
            if (times.length > 0) {
                for (let i = 0; i < times.length; i += 2) {
                    let timeSlots = generateTimeSlots(times[i], times[i + 1], duration);
                    if (!timeSlotsPerPeriod[period]) {
                        timeSlotsPerPeriod[period] = timeSlots;
                    } else {
                        timeSlotsPerPeriod[period] = timeSlotsPerPeriod[period].concat(timeSlots);
                    }
                }
            }
        }

        availableTimeSlots = Object.entries(timeSlotsPerPeriod).map(([period, times]) => ({
            period,
            times,
        }));
    }

    return (
        <>
            <div className=' prent flex flex-col gap-5 items-center justify-center mb-14'>
                <h1 className='font-semibold text-2xl text-gray-700 pb-5'>Pick a date</h1>
                <LocalizationProvider className="child" dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateCalendar']}>
                        <DemoItem label=" ">
                            <DateCalendar
                                minDate={dayjs()}
                                value={date}
                                onChange={handleDateChange}
                                shouldDisableDate={isDayDisabled}
                                sx={{
                                    "& .Mui-selected, & .Mui-selected.Mui-focusVisible": {
                                        backgroundColor: "#00c853 !important",
                                        color: "white !important",
                                    },
                                }}
                            />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <div id="select-time">
                {isDateSelected && (
                    <div className='flex flex-col gap-4 items-center justify-center mb-10 select-none'>
                        <h1 className='font-semibold text-2xl text-gray-700'>Pick a time</h1>
                        <div className='flex flex-col gap-4 w-full'>
                            {useProfileAvailability && availableTimeSlots
                                ? availableTimeSlots
                                    .filter(slot => slot.times.length > 0)
                                    .map((slot, index) => {
                                        if (!refsMap.current[index]) {
                                            refsMap.current[index] = React.createRef();
                                        }
                                        return (
                                            <div key={index}>
                                                <h1 className='text-sm font-bold pb-1'>{slot.period}</h1>
                                                <div className="flex items-center text-xs">
                                                    <div className="w-[40px] h-[50px] flex justify-center items-center cursor-pointer border hover:bg-gray-100 rounded-l-xl">
                                                        <FaChevronLeft
                                                            className="text-green-500 w-[30px] h-[30px]"
                                                            onClick={() => refsMap.current[index].current.scrollBy({ top: 0, left: -300, behavior: 'smooth' })}
                                                        />
                                                    </div>
                                                    <div ref={refsMap.current[index]} className="flex items-center gap-3 text-xs overflow-x-auto md:overflow-x-hidden">
                                                        {slot.times.map((time, index) => (
                                                            <TimeSlotButton
                                                                time={time}
                                                                selectedDate={date}
                                                                isTimePassed={isTimePassed}
                                                                setTime={setTime}
                                                                selectedTime={selectedTime}
                                                                key={index}
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className="w-[40px] h-[50px] flex justify-center items-center cursor-pointer border hover:bg-gray-200 rounded-r-xl">
                                                        <FaChevronRight
                                                            className="text-green-500 w-[30px] h-[30px]"
                                                            onClick={() => refsMap.current[index].current.scrollBy({ top: 0, left: 300, behavior: 'smooth' })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                : timeSlots.map((slot, index) => (
                                    <div className='flex md:flex-row flex-col gap-4 md:gap-8 md:items-center justify-between' key={index}>
                                        <h1 className='text-sm font-bold pb-1'>{slot.period}</h1>
                                        <div className="flex items-center gap-3 text-xs">
                                            <div className="flex items-center gap-3 text-xs overflow-x-auto">
                                                {slot.times.map((time, index) => (
                                                    <TimeSlotButton
                                                        time={time}
                                                        selectedDate={date}
                                                        setTime={setTime}
                                                        isTimePassed={isTimePassed}
                                                        selectedTime={selectedTime}
                                                        key={index}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

const TimeSlotButton = ({ time, selectedDate, setTime, isTimePassed, selectedTime }) => {
    const isDisabled = isTimePassed(time, selectedDate);
    const isSelected = time === selectedTime;

    return (
        <button
            className={`rounded-xl px-10 py-2 flex items-center justify-center w-[150px] ${isSelected ? 'bg-green-500 text-white' : isDisabled ? 'bg-gray-300 text-gray-500' : 'border border-green-500'}`}
            onClick={() => {
                if (!isDisabled) {
                    setTime(time);
                }
            }}
            disabled={isDisabled}
        >
            {time}
        </button>
    );
};

export default DateTimeSlot;