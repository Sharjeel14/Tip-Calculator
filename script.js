function fivePercent() {
    var person = document.getElementById("peopleInput").value;
    let bill = document.getElementById("billTextInput").value;
    let totalTip = (5 / 100) * bill;
    let tip = totalTip / person;
    if (bill == 0 && person == 0) {
        alert("Enter Bill Amount and Number of People");
    } else if (bill == 0) {
        alert("Enter Bill")
    } else if (person == 0) {
        alert("Enter person")
    } else {
        tip = parseFloat(tip).toFixed(2);
        totalTip = parseFloat(totalTip).toFixed(2);
        // alert("Tip Calculated" + tip);
        document.getElementById("tipAmount").innerHTML = "$" + totalTip;
        document.getElementById("tipTotalAmount").innerHTML = "$" + tip;
    }
}

function tenPercent() {
    var person = document.getElementById("peopleInput").value;
    let bill = document.getElementById("billTextInput").value;
    let totalTip = (10 / 100) * bill;
    let tip = totalTip / person;
    if (bill == 0 && person == 0) {
        alert("Enter Bill Amount and Number of People");
    } else if (bill == 0) {
        alert("Enter Bill")
    } else if (person == 0) {
        alert("Enter person")
    } else {
        tip = parseFloat(tip).toFixed(2);
        totalTip = parseFloat(totalTip).toFixed(2);
        // alert("Tip Calculated" + tip);
        document.getElementById("tipAmount").innerHTML = "$" + totalTip;
        document.getElementById("tipTotalAmount").innerHTML = "$" + tip;
    }
}

function fifteenPercent() {
    var person = document.getElementById("peopleInput").value;
    let bill = document.getElementById("billTextInput").value;
    let totalTip = (15 / 100) * bill;
    let tip = totalTip / person;
    if (bill == 0 && person == 0) {
        alert("Enter Bill Amount and Number of People");
    } else if (bill == 0) {
        alert("Enter Bill")
    } else if (person == 0) {
        alert("Enter person")
    } else {
        tip = parseFloat(tip).toFixed(2);
        totalTip = parseFloat(totalTip).toFixed(2);
        // alert("Tip Calculated" + tip);
        document.getElementById("tipAmount").innerHTML = "$" + totalTip;
        document.getElementById("tipTotalAmount").innerHTML = "$" + tip;
    }
}

function twentyFivePercent() {
    var person = document.getElementById("peopleInput").value;
    let bill = document.getElementById("billTextInput").value;
    let totalTip = (25 / 100) * bill;
    let tip = totalTip / person;
    if (bill == 0 && person == 0) {
        alert("Enter Bill Amount and Number of People");
    } else if (bill == 0) {
        alert("Enter Bill")
    } else if (person == 0) {
        alert("Enter person")
    } else {
        tip = parseFloat(tip).toFixed(2);
        totalTip = parseFloat(totalTip).toFixed(2);
        // alert("Tip Calculated" + tip);
        document.getElementById("tipAmount").innerHTML = "$" + totalTip;
        document.getElementById("tipTotalAmount").innerHTML = "$" + tip;
    }
}

function fiftyPercent() {
    var person = document.getElementById("peopleInput").value;
    let bill = document.getElementById("billTextInput").value;
    let totalTip = (50 / 100) * bill;
    let tip = totalTip / person;
    if (bill == 0 && person == 0) {
        alert("Enter Bill Amount and Number of People");
    } else if (bill == 0) {
        alert("Enter Bill")
    } else if (person == 0) {
        alert("Enter person")
    } else {
        tip = parseFloat(tip).toFixed(2);
        totalTip = parseFloat(totalTip).toFixed(2);
        // alert("Tip Calculated" + tip);
        document.getElementById("tipAmount").innerHTML = "$" + totalTip;
        document.getElementById("tipTotalAmount").innerHTML = "$" + tip;
    }
}



function custom() {
    let customTip = document.getElementById("customInput").value;
    var person = document.getElementById("peopleInput").value;
    let bill = document.getElementById("billTextInput").value;
    let totalTip = (customTip / 100) * bill;
    let tip = totalTip / person;
    if (customTip == 0) {
        alert("Please Enter Custom Tip")
    } else if (bill == 0 && person == 0) {
        alert("Enter Bill Amount and Number of People");
    } else if (bill == 0) {
        alert("Enter Bill")
    } else if (person == 0) {
        alert("Enter person")
    } else {
        tip = parseFloat(tip).toFixed(2);
        totalTip = parseFloat(totalTip).toFixed(2);
        // alert("Tip Calculated" + tip);
        document.getElementById("tipAmount").innerHTML = "$" + totalTip;
        document.getElementById("tipTotalAmount").innerHTML = "$" + tip;
    }
}

var input = document.getElementById("customInput");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();

    }
});



function reset() {
    document.getElementById("tipAmount").innerHTML = "$" + "0.00";
    document.getElementById("tipTotalAmount").innerHTML = "$" + "0.00";
}