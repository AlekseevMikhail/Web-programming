let input = document.getElementById("x_param");
let value_X = 0;
let value_Y = -2;
let flag = true;

draw();

$('form').eq(0).on("change", function(e){
	$('input[name^=Y]').each(function()
	{
		if(e.target !== this)
			this.checked = false;
	});
})

$('form').eq(0).on('submit', function() {
	return $('input[name^=field]:checked:enabled').length === 1;
});

function set_y(value){
	value_Y = value;
	document.getElementById('label_y').innerText = "Y = " + value_Y;
}

function check_input(){
	if(!/^-?\d+(\.|,)?\d*$/i.test(input.value)){
		alert("Значение \"X\" не валидно");
		input.value = "";
		flag = false;
	}else{
		value_X = input.value.replace(/[,]/,".");
		if(value_X<-3 && value_X>3){
			alert("Выход за пределы, введите число в интервале [-3;3]");
			input.value = "";
			flag = false;
		}else if(Number(value_X.split(".")[0]) >=3 && Number(value_X.split(".")[1])>0){
			alert("Выход за пределы, введите число в интервале [-3;3]");
			input.value = "";
			flag = false;
		}else if(Number(value_X.split(".")[0]) <=-3 && Number(value_X.split(".")[1])>0){
			alert("Выход за пределы, введите число в интервале [-3;3]");
			input.value = "";
			flag = false;
		}else {
			document.getElementById('label_x').innerText = "X = " + input.value;
			flag = true;
		}
	}
}

let button = document.getElementById("button");

button.onclick = function() {
	check_input();
	if(flag) {
		postData();
	}
}