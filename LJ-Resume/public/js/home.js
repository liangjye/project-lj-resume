var ref = firebase.database().ref("resume/personal");
ref.on('value', getData);

function getData(data) {
    var string = "";
    var personal = data.val();
    var keys = Object.keys(personal);

    var lastname = personal.lastname;
    var firstname = personal.firstname;

    $("#name").append(lastname + " " + firstname + "'s Portfolio!");
}