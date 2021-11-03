var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

function findMonths (startDate, endDate) {
    var start = startDate.split('-');
    var end = endDate.split('-');
    var startYear = parseInt(start[0]);
    var endYear = parseInt(end[0]);
    var months = 0;

    for (var i = startYear; i <= endYear; i++) {
        var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
        var startMon = i === startYear ? parseInt(start[1])-1 : 0;
        for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
            months++;
        }
    }
    return months;
}

function formatMonths(startDate, endDate) {
    var years = 0;
    var months = 0;
    numberOfMonths = findMonths(startDate, endDate);
    if (numberOfMonths >= 12) {
        years = Math.floor(numberOfMonths / 12);
        months = numberOfMonths - (years * 12);
        if (months > 1) {
            return (years + " yrs " + months + " mos");
        } else if (months == 1) {
            return (years + " yrs " + months + " mo");
        } else return (years + " yrs");
    } else if (numberOfMonths == 1) {
        return (numberOfMonths + " mo")
    } else return (numberOfMonths + " mos");
}

document.getElementById("months1").innerHTML = "(" + formatMonths('2021-10-01', today) + ")";
document.getElementById("months2").innerHTML = "(" + formatMonths('2019-01-01', today) + ")";