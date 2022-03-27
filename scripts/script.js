const calc = document.getElementById("calc");
const clear = document.getElementById("clear");

function clearAll() {
    namep.value = "";
    weight.value = "";
    height.value = "";
    result.innerText = "";
}

function calcIMC() {
    const namep = document.getElementById("namep").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (namep !== "" && height !== "" && weight !== "") {

        const valueIMC = (weight / (height * height)).toFixed(2);

        let classification = ""

        if (valueIMC < 18.5) {
            classification = "abaixo do peso"
        }
        else if (valueIMC < 25) {
            classification = "no peso ideal"
        }
        else if (valueIMC < 30) {
            classification = "levemente acima do peso, atenção."
        }
        else if (valueIMC < 35) {
            classification = "com obesidade grau I, cuidado."
        }
        else if (valueIMC < 40) {
            classification = "com obesidade grau II, cuidado."
        }
        else {
            classification = "com obesidade grau III, procure um profissional da saúde."
        }
        result.innerText = `${namep} seu IMC é ${valueIMC}, você está ${classification}`;

    }

    else {
        result.innerText = "Preencha todos os campos.";
    }

}

calc.addEventListener("click", calcIMC);
clear.addEventListener("click", clearAll);