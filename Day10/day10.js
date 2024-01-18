function getCurrentDateTime()
{
    var currentDate = new Date();

    var formattedDate = currentDate.toLocaleDateString();

    var formattedDate = currentDate.toLocaleTimeString();

    console.log("Current Date" + formattedDate);
    console.log("Current Time" + formattedDate);
}

getCurrentDateTime();