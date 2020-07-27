var ref = firebase.database().ref("resume/skill");
ref.on('value', getData);

function getData(data) {
    var string = "";
    var skill = data.val();
    var keys = Object.keys(skill);

    string += "<table class='table' cellspacing='0' data-empty='No matching records found'>";

    for (var i = 0 ; i < keys.length; i++) {
        var description = skill[i].description;

        string += "<tr>";
        string += "<td class='body-item mbr-fonts-style display-7'>" + description + "</td>";
        string += "</tr>";
    }
    string += "</table>";
    $("#skill").append(string);
}