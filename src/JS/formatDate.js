export default function formatDate(date) {

    let actualDateFormatted = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}`

    return actualDateFormatted

}