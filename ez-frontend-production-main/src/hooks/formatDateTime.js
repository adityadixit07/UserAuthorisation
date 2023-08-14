import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);


export const getFormattedDateTime = ({ timezone, time, formattedDate }) => {
    // Parse the date and time
    const dateTime = dayjs(`${formattedDate} ${time}`, 'DD MMM YYYY hh:mm A');

    // Convert to the desired timezone
    const dateTimeInTimezone = dateTime.utc().tz(timezone);

    // Format the date and time
    const formattedDateTime = dateTimeInTimezone.format();

    return formattedDateTime;
};

export const formattedBookingsDate = (dateString) => {
    var date = new Date(dateString);

    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero based
    var year = date.getFullYear();

    return day + '/' + month + '/' + year;
};