function makeRequestByClick() {
    let xValue = $("#text_input_X option:selected").val();
    let yValue = $("#text_input_Y").val();
    let rValue = $('#text_input_r option:selected').val();

    if(validateYValue(yValue) || validateXValue(xValue)){
        return;
    }
}

function makeRequestByInputs(x,y) {
    $("#text_input_Y").val(y);

    $("#text_input_X").append(new Option("option text", x));
    $("#text_input_X").val(x)

    $("#submitButton").click();
}
//здесь мы не даём пользователю ввести в поле для Y ввести не те данные



//Добавление скрипта для валидации перед отправкой
document.addEventListener('DOMContentLoaded', function () {
    //присваиваем данный скрипт нашему полю ввода координаты Y
    document.querySelector("#text_input_Y").onkeyup = validateY
});


$( document ).ready(function() {
    let tableRows = document.querySelectorAll("table tr");
    let params = tableRows[1].innerHTML.replaceAll("<","").replaceAll(">","").replaceAll("td","").replaceAll(/\s{2,}/g, '').split("/");
    let currentRadiusContexts = params[2];
    updateChart(currentRadiusContexts);
});

function updateChartOnRChange(){
    let currentR = Number($('#text_input_r option:selected').val());
    console.log(currentR);
    updateChart(currentR);
}


createElement = (name) => $(
    document.createElementNS('http://www.w3.org/2000/svg', name));
