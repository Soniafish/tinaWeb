var video;
var WorkOut7m;
var FIGUREROBICS;
var yoga;
var stepData;
$(document).ready(function (){
	// TV
	WorkOut7m=document.getElementById("WorkOut7m");
	WorkOut7m.play();
	video=WorkOut7m;
	FIGUREROBICS=document.getElementById("FIGUREROBICS");
	yoga=document.getElementById("yoga");

	//google chart & localstorage
	stepData=window.localStorage.getItem("stepData");
	if(stepData==null){
		stepData=[];
		for (var i = 1; i < 32; i++) {
			stepData[0]=['day', 'step', 'calorie'];
			stepData[i]=[i.toString(),  0,  0];
		}
		console.log(stepData);
	}else{
		stepData=JSON.parse(stepData);
	}
});

	function changeToTv() {
		$("#tv").css("color", "#0000FF");
		$("#management1").css("color", "#B9B9FF");
		$("#hot1").css("color", "#B9B9FF");
		$("#news1").css("color", "#B9B9FF");
		$("#topic1").css("color", "#B9B9FF");

		$("#content").css("display", "block");
		showWorkOut7m();
		$("#management2").css("display", "none");
		$("#hot2").css("display", "none");
		$("#news2").css("display", "none");
		$("#topic2").css("display", "none");
	}
	function changeTomanagement(){
		$("#tv").css("color", "#B9B9FF");
		$("#management1").css("color", "#0000FF");
		$("#hot1").css("color", "#B9B9FF");
		$("#news1").css("color", "#B9B9FF");
		$("#topic1").css("color", "#B9B9FF");

		$("#content").css("display", "none");
		WorkOut7m.pause();
		FIGUREROBICS.pause();
		yoga.pause();
		$("#management2").css("display", "block");
		$("#hot2").css("display", "none");
		$("#news2").css("display", "none");
		$("#topic2").css("display", "none");
	}	
	function changeToHot() {
		$("#tv").css("color", "#B9B9FF");
		$("#management1").css("color", "#B9B9FF");
		$("#hot1").css("color", "#0000FF");
		$("#news1").css("color", "#B9B9FF");
		$("#topic1").css("color", "#B9B9FF");

		$("#content").css("display", "none");
		WorkOut7m.pause();
		FIGUREROBICS.pause();
		yoga.pause();
		$("#management2").css("display", "none");
		$("#hot2").css("display", "block");
		$("#news2").css("display", "none");
		$("#topic2").css("display", "none");
	}

	function changeToNews() {
		$("#tv").css("color", "#B9B9FF");
		$("#management1").css("color", "#B9B9FF");
		$("#hot1").css("color", "#B9B9FF");
		$("#news1").css("color", "#0000FF");
		$("#topic1").css("color", "#B9B9FF");

		$("#content").css("display", "none");
		WorkOut7m.pause();
		FIGUREROBICS.pause();
		yoga.pause();
		$("#management2").css("display", "none");
		$("#hot2").css("display", "none");
		$("#news2").css("display", "block");
		$("#topic2").css("display", "none");
	}

	function changeToTopic() {
		$("#tv").css("color", "#B9B9FF");
		$("#management1").css("color", "#B9B9FF");
		$("#hot1").css("color", "#B9B9FF");
		$("#news1").css("color", "#B9B9FF");
		$("#topic1").css("color", "#0000FF");

		$("#content").css("display", "none");
		WorkOut7m.pause();
		FIGUREROBICS.pause();
		yoga.pause();
		$("#management2").css("display", "none");
		$("#hot2").css("display", "none");
		$("#news2").css("display", "none");
		$("#topic2").css("display", "block");
	}

	function changeToBack() {
		changeToTv();
		$("#tv").css("color", "#B9B9FF");
	}

	// TV
		function showWorkOut7m(){
		$("#WorkOut7m").css("display", "block");
		WorkOut7m.play();
		$("#FIGUREROBICS").css("display", "none");
		FIGUREROBICS.pause();
		$("#yoga").css("display", "none");
		yoga.pause();
		video=WorkOut7m;

		// FWorkOut7m.style.display="block";
		// WorkOut7m.play();
		// FIGUREROBICS.style.display="none";
		// FIGUREROBICS.pause();
		// yoga.style.display="none";
		// yoga.pause();
		// video=WorkOut7m;
	}

	function showFIGUREROBICS(){
		FIGUREROBICS.style.display="block";
		FIGUREROBICS.play();
		WorkOut7m.style.display="none";
		WorkOut7m.pause();
		yoga.style.display="none";
		yoga.pause();
		video=FIGUREROBICS;
	}

	function showYoga(){
		yoga.style.display="block";
		yoga.play();
		FIGUREROBICS.style.display="none";
		FIGUREROBICS.pause();
		WorkOut7m.style.display="none";
		WorkOut7m.pause();
		video=yoga;
	}
	//BMI
	function getBmi(){
		var bmiHeight=$("#bmiHeight").val();
		var bmiWeight=$("#bmiWeight").val();

		// bmiHeight=document.getElementById("bmiHeight").value;
		// bmiWeight=document.getElementById("bmiWeight").value;
		var h = Number(bmiHeight);
    	var w = Number(bmiWeight);
    	var yourBmi = w / (h * h) * 10000;
    	if (yourBmi>24) {
    		$("#bmi").html("BMI:"+Math.round(yourBmi*100)/100+",過重");
    	}else if(yourBmi<18.5){
    		$("#bmi").html("BMI:"+Math.round(yourBmi*100)/100+",過輕");
    	}else{
    		$("#bmi").html("BMI:"+Math.round(yourBmi*100)/100+",健康");
    	}
	}
 //google chart
 google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable(stepData);
    var options = {
      title: 'Monthly Sports Profile',
      hAxis: {title: 'Day',  titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0},
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  function addData(){
  if ($("#day").val()=="") {//空白的
    alert("日期請輸入數字1-31");
    return false;//不送出表單
  }else if($("#day").val()>31||$("#day").val()<1){
    alert("日期請輸入數字1-31");
    return false;//不送出表單
  };
  if ($("#step").val()=="") {
    alert("請輸當日健走步數");
    return false;//不送出表單
  };
  var d=$("#day").val();
  var s=$("#step").val();
  s=Number(s);
  var c=s*0.3;
  stepData[Number(d)]=[d, s, c];
  
  drawChart(); //加入google.visualization.arrayToDataTable
   window.localStorage.setItem("stepData", JSON.stringify(stepData));//存入localStorage
 
  return true;//送出
};