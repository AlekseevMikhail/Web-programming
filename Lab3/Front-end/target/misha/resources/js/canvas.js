
function getR() {
	let R_vals =[1,1.5,2,2.5,3]
	if(isANumber(parseFloat($("[id='newResultForm:messageR']").text().replace(',','.'))) &&
	R_vals.includes(parseFloat($("[id='newResultForm:messageR']").text().replace(',','.')))){
		return parseFloat($("[id='newResultForm:messageR']").text())
	}else {
	}

}


function getSign(x){
	if (x<0){
		return -1;
	}else{
		return 1;
	}

}


function coordinate_arrow(context, x0, y0, x1, y1) {

	var length_head =7
	var delta_x = x0 - x1;

	context.font='15px courier new';

	context.beginPath()
	context.lineWidth = 2
	context.moveTo(x0, y0)
	context.lineTo(x1, y1)
	context.stroke()


	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x1+(getSign(delta_x)*length_head),y1+(getSign(delta_x)*length_head))
	context.lineTo(x1-length_head,y1+length_head)
	context.fill()

}

function getDashLength(x,y){
	let dash_length

	console.log(x,y)

	if(x>y){
		dash_length = y / 6
	}else{
		dash_length = x / 6
	}

	return dash_length


}
function getRArray(R_value) {

	let R=[]
	if (R_value != "") {
		R_value=parseFloat(R_value)
		R[0] = R_value
		R[1] = R_value / 2
		R[2] = -R_value / 2
		R[3] = -R_value
	}else R=["R","R/2","-R/2","-R"]

	return R
}

function coordinate_system(context, height_pers, width_pers, R){

	let dash_length



	console.log(R)

	context.strokeStyle = "black";
	context.fillStyle = "black";


	y=context.canvas.height*height_pers
	x=context.canvas.width*width_pers

	y_coef=(context.canvas.height-y)/2
	x_coef=(context.canvas.width-x)/2

	dash_length=getDashLength(x,y)

	coordinate_arrow(context, x_coef , context.canvas.height *0.5, context.canvas.width - x_coef, context.canvas.height *0.5)
	context.fillText('X', context.canvas.width - x_coef-10, context.canvas.height * 0.5+15)
	coordinate_arrow(context, context.canvas.width *0.5, context.canvas.height - y_coef, context.canvas.width *0.5, y_coef)
	context.fillText('Y', context.canvas.width * 0.5+10, y_coef+15)

	let counterx=0

	for (let i = -2; i <=2 ; i++) {
		if (i !=0){
			context.fillText(R[counterx],context.canvas.width/2+6,context.canvas.height/2+dash_length*i+5)
			context.beginPath()
			context.moveTo(context.canvas.width/2-4,context.canvas.height/2+dash_length*i)
			context.lineTo(context.canvas.width/2+4,context.canvas.height/2+dash_length*i)
			context.stroke()
			counterx++
		}
	}

	let countery=3
	for (let i = -2; i <=2 ; i++) {
		if(i != 0){
			console.log(dash_length)
			context.fillText(R[countery],context.canvas.width/2+dash_length*i-5, context.canvas.height/2-10)
			context.beginPath()
			context.moveTo(context.canvas.width/2+dash_length*i, context.canvas.height/2+4)
			context.lineTo(context.canvas.width/2+dash_length*i, context.canvas.height/2-4)
			context.stroke()
			countery--
		}
	}


}
function draw(r_array=getRArray(getR())){


	let context =  $('#canvas')[0].getContext('2d')

	context.clearRect(0, 0, context.canvas.width, context.canvas.height)

	let step = getDashLength(context.canvas.width, context.canvas.height)

	context.strokeStyle = "red"
	context.fillStyle = "red"

	let x = context.canvas.width/2;
	let y = context.canvas.height/2;

	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x-2*step, y);
	context.lineTo(x-2*step, y-step);
	context.lineTo(x, y-step);
	context.fill();

	context.beginPath();
	context.moveTo(x, y);
	context.arc(x, y, 2*step, -(3*Math.PI)/2,  0, true);
	context.fill();

	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x-step, y);
	context.lineTo(x, y+2*step);
	context.fill()

	coordinate_system(context,1,1,r_array)

}


function drawResult(x, y, R,alpha,red,green) {
	let context =  $('#canvas')[0].getContext('2d');
	let dash_length = 2*getDashLength(context.canvas.width, context.canvas.height)/R



	context.strokeStyle = `rgba(${red},${green},0,${alpha})`;
	context.fillStyle = `rgba(${red},${green},0,${alpha})`;

	context.beginPath()
	context.moveTo(context.canvas.width/2+x*dash_length,context.canvas.height/2-y*dash_length)
	context.arc(context.canvas.width/2+x*dash_length,context.canvas.height/2-y*dash_length,4,0,2*Math.PI)
	context.fill()
}

function clickPoint(event){

	if($("[id='newResultForm:messageR']").text() != "") {

		R=$("[id='newResultForm:messageR']").text()
		let context =  $('#canvas')[0].getContext('2d');
		let dash_length = 4*getDashLength(context.canvas.width, context.canvas.height)/R

		let x = (2*event.offsetX - context.canvas.width)/dash_length
		let y = -((2*event.offsetY - context.canvas.height)/dash_length)

		if ((x>=-3 && x<=4) &&
			(y>=-5 && y<=5)){


			$('[id="newResultForm:kostyl"]').attr("value",x.toFixed(5).toString())
			$('[id="newResultForm:y_hinput"]').attr("value",y.toFixed(5).toString())
			$("[id='newResultForm:submit']")[0].disabled = false
			$("[id='newResultForm:submit']")[0].click()
		} else
			alert("Координаты ограничены вариантом Л/Р")

	}else alert("Введите R")

}




function drawPoints(R=$("tbody tr")[$("tbody tr").length-1].cells[2].textContent) {


	let tbody_tr=$("tbody tr")

	if (tbody_tr.length>0) {
		let i_old;
		let iter = 1;
		if (tbody_tr.length>5){
			i_old = tbody_tr.length -5
		}else i_old=0


		for (let i = tbody_tr.length-1; i >= i_old ; i--) {
			if (tbody_tr[i].cells[3].textContent.trim() == "true")
				drawResult(parseFloat(tbody_tr[i].cells[0].textContent), parseFloat(tbody_tr[i].cells[1].textContent),parseFloat(R),5 / (5 * iter),0,255)
		    else drawResult(parseFloat(tbody_tr[i].cells[0].textContent), parseFloat(tbody_tr[i].cells[1].textContent), parseFloat(R),5 / (5 * iter),255 , 0)
			iter++
		}


	}
}


$(window).on("load",()=> {

	$("#canvas_div")[0].innerHTML = '<canvas id="canvas"  width="550px" height="550px" position="centre"></canvas>'
	$("#canvas").on("click",event=> {
			console.log("clicked: ")
			console.log(event)
			clickPoint(event)
		}
	)
	draw(getRArray($("tbody tr")[$("tbody tr").length-1].cells[2].textContent))
	drawPoints()
})


