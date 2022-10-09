function calculateDaysBetweenDates(begin, end) { 
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var beginYear = beginDate.getFullYear();
    var endYear = endDate.getFullYear();
    var beginMonth = beginDate.getMonth();
    var endMonth = endDate.getMonth();
    var beginDay = beginDate.getDate();
    var endDay = endDate.getDate();
    var days = 0;
    var months = 0;
    var years = 0;
    if (beginYear == endYear) {
        if (beginMonth == endMonth) {
            days = endDay - beginDay;
        } else {
            months = endMonth - beginMonth;
            days = endDay - beginDay;
        }
    } else {
        years = endYear - beginYear;
        months = endMonth - beginMonth;
        days = endDay - beginDay;
    }
    return years + " years, " + months + " months, " + days + " days";
}
var begin = "2015-01-01";
var end = "2016-01-01";
var days = calculateDaysBetweenDates(begin, end);
console.log(days);

