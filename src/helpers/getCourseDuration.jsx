function getCourseDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;

    const hoursLabel = hours === 1 ? 'hour' : 'hours';
    const minutesLabel = remainingMinutes === 1 ? 'minute' : 'minutes';

    return `${formattedHours}:${formattedMinutes} ${hoursLabel} ${minutesLabel}`;
}

export default getCourseDuration;