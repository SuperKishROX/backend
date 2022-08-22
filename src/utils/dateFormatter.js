function reformatDate(dateStr) {
    var date = new Date(dateStr);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + "-" + month + "-" + year;
}

function formatToMongooseDate(dateStr) {
    dArr = dateStr.split("-");  // ex input "dd-mm-yyyy"
    return dArr[2] + "-" + dArr[1] + "-" + dArr[0].substring(2); //ex out: "18/01/10"
}

module.exports = {
    reformatDate,
    formatToMongooseDate
}