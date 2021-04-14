function padNumber(number, minDigits) {
    var numberStr = number.toString();
    const originalLength = numberStr.length;
    for (var i = 0; i < minDigits - originalLength; i++) {
        numberStr = "0" + numberStr;
    }

    return numberStr;
}

export function dateFilter(date) {
    if (date === null) {
        return "";
    }

    const year = padNumber(date.getFullYear(), 4);
    const month = padNumber(date.getMonth() + 1, 2);
    const day = padNumber(date.getDate(), 2);
    return `${year}-${month}-${day}`;
}

export function dateTimeFilter(date) {
    if (date === null) {
        return "";
    }

    const hour = padNumber(date.getHours() % 12, 2);
    const minute = padNumber(date.getMinutes(), 2);
    const amPm = date.getHours() > 12 ? "PM" : "AM";

    return `${dateFilter(date)} ${hour}:${minute} ${amPm}`;
}