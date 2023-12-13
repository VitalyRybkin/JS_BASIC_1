const celsius = 30;
let foreingheit = (celsius) => (9 / 5) * celsius + 32;
console.log(celsius, foreingheit(celsius))

let my_name = "Vitaliy";
let admin = my_name;
console.log(admin);

function countForeignheit() {
    let getData = Number(document.getElementById("degreesVal").value);
    if (getData == null || getData == "" || Number.isNaN(getData)) {
        return document.getElementById("result").innerHTML = "No degrees entered ...";
    }
    
    if(document.getElementById('foriegnheit_radio').checked) document.getElementById("result").innerHTML = Math.round((9 / 5) * getData + 32) + '°F';
    if(document.getElementById('celsius_radio').checked) document.getElementById("result").innerHTML = Math.round((5 / 9) * (getData - 32)) + '°C';
}

function checkRadio() {
    if (document.getElementById('celsius_radio').checked) {
        document.getElementById('foreignheit-header').innerText = 'Celsius:';
        document.getElementById('degreesVal').placeholder = 'Enter Foreignheit...';
    }
    else if (document.getElementById('foriegnheit_radio').checked) {
        document.getElementById('foreignheit-header').innerText = 'Foreignheit:';
        document.getElementById('degreesVal').placeholder = 'Enter Celsius...';
    }

    countForeignheit();
}

function countRadians() {
    let getData = Number(document.getElementById("degreesVal").value);
    if (getData == null || getData == "" || Number.isNaN(getData)) {
        return document.getElementById("radians-result").innerHTML = "No degrees entered ...";
    }
    
    if(document.getElementById('radians_radio').checked) document.getElementById("radians-result").innerHTML = (getData * Math.PI / 180).toFixed(5) + ' radians';
    if(document.getElementById('degrees_radio').checked) document.getElementById("radians-result").innerHTML = Math.round(getData * 180 / Math.PI) + '°';
}

function checkRadians() {
    if (document.getElementById('degrees_radio').checked) {
        document.getElementById('radians-header').innerText = 'Degrees:';
        document.getElementById('degreesVal').placeholder = 'Enter radians...';
    }
    else if (document.getElementById('radians_radio').checked) {
        document.getElementById('radians-header').innerText = 'Radians:';
        document.getElementById('degreesVal').placeholder = 'Enter degrees...';
    }

    countRadians();
}

function checkSin() {
    if (document.getElementById('sin-radio').checked) {
        document.getElementById('sin-header').innerText = 'Sinus:';
    }
    else if (document.getElementById('cos-radio').checked) {
        document.getElementById('sin-header').innerText = 'Cosinus:';
    }
    else if ((document.getElementById('tan-radio').checked)) {
        document.getElementById('sin-header').innerText = 'Tangens:';
    }
    else if ((document.getElementById('cot-radio').checked)) {
        document.getElementById('sin-header').innerText = 'Cotangens:';
    }

    countSin();
}

function countSin() {
    let getData = Number(document.getElementById("sinDegreesVal").value);
    if (getData == null || getData == "" || Number.isNaN(getData)) {
        return document.getElementById("sin-result").innerHTML = "No degrees entered ...";
    }
    
    let sin = Math.sin(getData * Math.PI / 180);
    let cos = Math.sin(Math.abs(90 - getData) * Math.PI / 180)
    
    if(document.getElementById('sin-radio').checked) document.getElementById("sin-result").innerHTML = sin;
    if(document.getElementById('cos-radio').checked) document.getElementById("sin-result").innerHTML = cos;
    if(document.getElementById('tan-radio').checked) document.getElementById("sin-result").innerHTML = sin / cos;
    if(document.getElementById('cot-radio').checked) document.getElementById("sin-result").innerHTML = cos / sin;
}