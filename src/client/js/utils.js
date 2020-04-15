

const getTravelDaysLeft = (currentDate, travelDate) => {
    let timeDifference = Math.abs(currentDate.getTime() - travelDate.getTime())
    return Math.ceil(timeDifference / (1000 * 3600 * 24));
}


const formatToDate = (date) => {
    let travelDate = date.split('-');
    return new Date(`${travelDate[0]}-${travelDate[1]}/${travelDate[2]}`);
}

const replaceSpaces = (string) => {
    return string.replace(/\s/g, '+')
}


export { getTravelDaysLeft, formatToDate, replaceSpaces}