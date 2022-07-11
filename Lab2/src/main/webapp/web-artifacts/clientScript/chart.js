function chartClick(event) {
    let r = $('#text_input_r option:selected').val();
    let target = event.target.closest("div")
    let rect = target.getBoundingClientRect();
    let x = ((event.x - rect.left) - 150) * r / 100
    let y = (150 - (event.y - rect.top)) * r/ 100;

    makeRequestByInputs(x.toFixed(5),y.toFixed(5));

}

function drawCircle(x,y,r) {
    const circle = createElement('circle').attr({
        cx: 150 + x * 100 / r,
        cy: 150 - y * 100 / r,
        r: 6,
    }).addClass('crossing');

    $('#image-coordinates').append(circle);
}


function updateChart(radius) {
    $('.crossing').remove();
    let data = circlesByRadius(radius);
    for(let i = 0; i < data.length ; i++){
        let currentCircleData = data[i];
        console.log(currentCircleData);
        drawCircle(currentCircleData[0], currentCircleData[1],currentCircleData[2]);
    }
}

function circlesByRadius(radius) {
    let tableRows = document.querySelectorAll("table tr");
    let params;
    let arrayOfContextWithSameRadius = [];
    let arrayIterator = 0;

    for (let i = 1; i < tableRows.length; i++) {
        params = tableRows[i].innerHTML.replaceAll("<","").replaceAll(">","").replaceAll("td","").replaceAll(/\s{2,}/g, '').split("/");
        if(params[2] == radius){
            arrayOfContextWithSameRadius[arrayIterator++] = params;
        }
    }
    return arrayOfContextWithSameRadius;
}