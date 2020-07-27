var ref = firebase.database().ref("resume/education");
ref.on('value', getData);

function getData(data) {
    var string = "";
    var education = data.val();
    var keys = Object.keys(education);

    string += "<table class='table' cellspacing='0' data-empty='No matching records found'>";

    for (var i = keys.length - 1; i >= 0; i--) {
        var cgpa = education[i].cgpa;
        var description = education[i].description;
        var dtend = education[i].dtend;
        var dtstart = education[i].dtstart;
        var location = education[i].location;
        string += "<tr>";
        string += "<td class='body-item mbr-fonts-style display-7'>" + location + "</td>";
        string += "<td class='body-item mbr-fonts-style display-7'>" + description + "</td>";
        string += "<td class='body-item mbr-fonts-style display-7 text-right' style='width:25%'>" + dtstart + " - " + dtend + "</td>";
        string += "</tr>";
    }
    string += "</table>";
    $("#education").append(string);
}