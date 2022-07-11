let yFLAG = false;
let rFLAG = false;
let xFLAG = false;


function validateY() {
    this.value = this.value.replace(/[^\d.\-]/g, ""); //разрешаем ввод только цифр 0-9, запятой и минуса

    if(this.value.lastIndexOf("-")> 0) { //если пользователь вводит тире (минус) не самым первым символом...
        this.value = this.value.substr(0, this.value.lastIndexOf("-"));//то удаляем этот минус
    }

    if(this.value[0]== "-") {//если первый символ это минус (число отрицательно)...
        if(this.value[0]== "." || this.value[1]== "4" || this.value[1]== "5" || this.value[1]== "6" || this.value[1]== "7" || this.value[1]== "8" || this.value[1]== "9"){
            this.value = this.value.substr(0, 1);//то запрещаем вводить цифры 6,7,8,9
        }
        if(this.value[1]== "3" && this.value[2]!=""){
            this.value = this.value.substr(0, 2);//то запрещаем вводить число больше 0
        }

        if(this.value.length>2 && this.value[2]!=".") this.value=this.value[0]+this.value[1]+"."+this.value[2]; //если третий символ введён и он не запятая, то вставляем запятую между вторым и третим символом

        if(this.value.length>8) this.value = this.value.substr(0, 8); //если количество символов равно 8 (5 знаков после запятой), не даём вводить больше
    }else{ //если число положительно (первым введён не минус, а цифра)...
        if(this.value[0]== "." || this.value[0]== "4" || this.value[0]== "5" || this.value[0]== "6" || this.value[0]== "7" || this.value[0]== "8" || this.value[0]== "9"){
            this.value = this.value.substr(0, 0); //то эта цифра должна быть от 0 до 3
        }
        if(this.value[0]== "3" && this.value[1]!= ""){
            this.value = this.value.substr(0, 1); //то эта цифра должна быть от 0 до 3
        }

        if(this.value.length>1 && this.value[1]!=".") this.value=this.value[0]+"."+this.value[1]; //если второй символ введён и он не запятая, то вставляем запятую между первым и вторым символом
        if(this.value.length>7) this.value = this.value.substr(0, 7); //если количество символов равно 7 (5 знаков после запятой), не даём вводить больше
    }

    if(this.value.match(/\./g).length > 1) { //не даём ввести больше одной запятой
        this.value = this.value.substr(0, 0);
    }

    if(this.value.match(/\-/g).length > 1) { //не даём ввести больше одного минуса
        this.value = this.value.substr(0, 0);
    }
}

function validateYValue(yValue){
    if(isNaN(Number(yValue)) || yValue === undefined){
        $('#text_input_Y').css('background-color','red');
        yFLAG = true;
        return;
    }

    if(Number(yValue) < -3 || Number(yValue) > 3){
        $('#text_input_Y').css('background-color','red');
        yFLAG = true;
        return;
    }

    yFLAG = false;
    $('#text_input_Y').css('background-color','#FFF');

}

function validateXValue(xValue){
    if(isNaN(Number(xValue))){
        $('#text_input_X').css('background-color','red');
        xFLAG = true;
        return;
    }

    if(Number(xValue) < -5 || Number(xValue) > 3){
        $('#text_input_X').css('background-color','red');
        xFLAG = true;
        return;
    }

    xFLAG = false;
    $('#text_input_X').css('background-color','#FFF');

}
