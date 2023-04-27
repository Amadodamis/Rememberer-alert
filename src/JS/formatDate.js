function formatDate(date) {

    let hour;
    let month;

    if (date.getHours() < 10) {
        hour = `0${date.getHours()}`
    } else {
        hour = `${date.getHours()}`
    }

    if (date.getMonth() < 9) {
        month = `0${date.getMonth() + 1}`
    } else {
        month = `${date.getMonth() + 1}`
    }

    let actualDateFormatted = `${date.getFullYear()}-${month}-${date.getDate()}T${hour}:${date.getMinutes()}`

    return actualDateFormatted

}

function maxDate(date) {

    let maxDateFormatted = `${date.getFullYear() + 1}-0${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}`

    return maxDateFormatted
}

export { formatDate, maxDate }