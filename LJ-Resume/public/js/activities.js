var ref = firebase.database().ref("resume/activities");
ref.on('value', getData);

function getData(data) {
    var string = "";
    var activities = data.val();
    var keys = Object.keys(activities);

    string += "<table class='table' cellspacing='0' data-empty='No matching records found'>";

    for (var i = keys.length - 1; i >= 0; i--) {
        var name = activities[i].name;
        var date = activities[i].date;

        string += "<tr>";
        string += "<td class='body-item mbr-fonts-style display-7'>" + name + "</td>";
        string += "<td class='body-item mbr-fonts-style display-7 text-right'>" + date + "</td>";
        string += "</tr>";
    }
    string += "</table>";
    $("#activities").append(string);
}