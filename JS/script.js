function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = "$ " + value.toFixed(2)
    return value
}

function formatPeople(value) {
    if (value === "1") {
        return "1 Person"
    }
    else {
        return value + " People"
    }
}

function update() {
    let bill = Number(document.getElementById("billAmount").value);
    let tip = document.getElementById("tipAmount").value;
    let split = document.getElementById("splitBy").value;
    
    let tipValue = bill * tip/100;
    let billValueEach = (bill + tipValue) / split;
    let tipValueEach = tipValue / split;

    document.getElementById("tipPercent").innerHTML = tip  + "%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalBill").innerHTML = formatMoney(bill + tipValue);

    document.getElementById("SplitPerson").innerHTML = formatPeople(split);
    document.getElementById("billEach").innerHTML = formatMoney(billValueEach);
    document.getElementById("tipEach").innerHTML = formatMoney(tipValueEach);
}

let container = document.getElementById("container")
container.addEventListener('input', update)
    
