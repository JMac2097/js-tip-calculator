

// calculate the tip

function calculateTip() {
    let billAmmount = document.getElementById('billAmmount').value,
        serviceQuality = document.getElementById('serviceQuality').value,
        numberOfPeople = document.getElementById('peopleAmmount').value;

    // Validate input
    if (billAmmount === "" || serviceQuality === 0) {
        alert('Please enter a value');
        return;
    }

    // check to see if this input is empty or less than or equal to 1
    if (numberOfPeople === "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById('each').style.display = "none";  // TODO: Switch this for class changes
    } else {
        document.getElementById('each').style.display = "block"; // TODO: Switch this for class changes
    }

    //calculate the tip
    let total = (billAmmount * serviceQuality) / numberOfPeople;
    // round it to two decimal places
    total = Math.round(total * 100) / 100;
    // always have two digits after decimal point
    total = total.toFixed(2);
    // display the tip
    document.getElementById('totalTip').style.display = "block"; // TODO: Switch this for class changes
    document.getElementById('tip').innerHTML = total;

};

// hide the tip ammount on load
document.getElementById('totalTip').style.display = "none";  // TODO: Switch this for class changes
document.getElementById('each').style.display = "none";     // TODO: Switch this for class changes

// click to call the function
// document.getElementById('calculate').onclick = function() {
//     calculateTip();
// };

document.getElementById('calculate').addEventListener('click', calculateTip);