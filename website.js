

function funct() {
    var i, count = 0;
    for (i = 0; i < 50; i++) {
        var box = document.getElementsByClassName("activities");
        if (box[i].checked) {
            count++;
        }
    }
    var percent = 100 * count / 50;
    var message;
    if (percent == 0) {
        message = "You really didn't do anything during quarantine...";
    } else if (percent < 50) {
        message = "You should try doing more things on this list!";
    } else if (percent < 100) {
        message = "You had a really eventful quarantine!";
    } else {
        message = "You are an expert at surving quarantine!";
    }
    alert("You scored " + count + " out of 50: " + percent + "%.\n" + message);
}

