let data_cookies="";
let saveX
let flagErrorY = false
function postData(){
    const xhr = new XMLHttpRequest();

    saveX = value_X

    analysis_param(delete_Virgule(value_Y),"Y");
    analysis_param(delete_Virgule(value_X),"X");

    if(!flagErrorY) {
        var body = 'x=' + encodeURIComponent(delete_Virgule(saveX)) +
            '&y=' + encodeURIComponent(delete_Virgule(value_Y)) +
            '&r=' + encodeURIComponent(delete_Virgule(R)) +
            '&xx=' + encodeURIComponent(delete_Virgule(value_X));

        xhr.open("POST", 'treatment.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.addEventListener('readystatechange', function () {
            if ((xhr.readyState === 4) && (xhr.status === 200)) {
                if (Cookies.get('data_AMN') !== undefined) {
                    data_cookies = Cookies.get('data_AMN');
                }
                data_cookies += check_good_php(xhr.responseText);
                Cookies.set("data_AMN", data_cookies);
                addToTable();
            }
        });
        xhr.send(body);
    }
}

function check_good_php(param) {
    if(param.split("/")[0].split(";")[0] === '1'){
        alert("Ошибка в отправленных данных");
    }else{
        drawPoint(saveX * 10, value_Y * 10, R * 10);
        return param;
    }
}

function delete_Virgule(value){
    if(/,/i.test(value)){
        return(value.replace(/[,]/,"."));
    }else{
        return (value);
    }
}

function analysis_param(analysis, name){
    if(name === "X") {
        if(!/^-?\d+(\.|,)?[1-9]*$/i.test(analysis)){
            let sp = analysis.split("0")
            let sp1 = analysis.split(".")[0] + '.' +analysis.split(".")[1].split("0")[0]
            if(sp1 == -R/2 && sp[sp.length - 1] > 0 && value_Y > 0){
                value_X = Number(value_X) + 1
            }
            if(Number(sp[0]) == -R && sp[sp.length - 1] > 0 && value_Y == 0){
                value_X = Number(value_X) + 1
            }else if(Number(sp[0]) == R && sp[sp.length - 1] > 0 && value_Y == 0){
                value_X = Number(value_X) + 1
            }
        }
    }else{
        if(analysis === -2 || analysis === -1.5 || analysis === -1|| analysis === -0.5 || analysis === 0 || analysis === 0.5
            || analysis === 1|| analysis === 1.5 || analysis === 2){
            flagErrorY = false;
        }else{
            flagErrorY = true;
            if(analysis === 0){
                flagErrorY = false;
            }else
                alert("Не трогайте, пожалуйста, 'Y'")
        }
    }
}