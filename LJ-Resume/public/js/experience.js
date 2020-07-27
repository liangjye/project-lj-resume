var ref = firebase.database().ref("resume/experience");
ref.on('value', getData);

function getData(data) {
    var string = "";
    var experience = data.val();
    var keys = Object.keys(experience);

    string += "<table class='table' cellspacing='0' data-empty='No matching records found'>";

    for (var i = keys.length - 1; i >= 0; i--) {
        var company = experience[i].company;
        var description = experience[i].description;
        var title = experience[i].title;
        var dtend = experience[i].dtend;
        var dtstart = experience[i].dtstart;
        string += "<tr>";
        string += "<td class='body-item mbr-fonts-style display-7'>" + company + " - " + title + "</td>";
        string += "<td class='body-item mbr-fonts-style display-7 text-right'>" + dtstart + " - " + dtend + "</td>";
        string += "</tr>";
        string += "<tr>";
        string += "<td colspan='2' class='body-item mbr-fonts-style display-7 text-justify'>" + description + "</td>";
        string += "</tr>";
    }
    string += "</table>";
    $("#experience").append(string);
}