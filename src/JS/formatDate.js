function formatDate(date) {

    let hour;
    let month;
    let minutes;

    //cuando los meses/horas/minutos comienzan son menores que 10, se le agrega un 0 adelante. 

    date.getHours() < 10 ? hour = `0${date.getHours()}` : hour = `${date.getHours()}`

    date.getMonth() < 9 ? month = `0${date.getMonth() + 1}` : month = `${date.getMonth() + 1}`

    date.getMinutes() < 10 ? minutes = `0${date.getMinutes()}` : minutes = `${date.getMinutes()}`


    let actualDateFormatted = `${date.getFullYear()}-${month}-${date.getDate()}T${hour}:${minutes}`

    return actualDateFormatted

}

function maxDate(date) {

    let maxDateFormatted = `${date.getFullYear() + 1}-0${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}`

    return maxDateFormatted
}

function formatDateToObject(date, message) {


    let year = date.getFullYear()
    let month
    let day
    let hour
    let minutes

    date.getHours() < 10 ? hour = `0${date.getHours()}` : hour = `${date.getHours()}`
    date.getMonth() < 9 ? month = `0${date.getMonth() + 1}` : month = `${date.getMonth() + 1}`
    date.getMinutes() < 10 ? minutes = `0${date.getMinutes()}` : minutes = `${date.getMinutes()}`
    date.getDate() < 10 ? day = `0${date.getDate()}` : day = `${date.getDate()}`

    let dateObject = {
        id: "provisionalId",
        year: year,
        month: month,
        day: day,
        hour: hour,
        minutes: minutes,
        message: message,
    }



    return dateObject
}





export { formatDate, maxDate, formatDateToObject }