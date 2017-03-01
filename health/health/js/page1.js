var tv;
		var management1;
		var hot1;
		var news1;
		var topic1;
		var content;
		var management2;
		var hot2;
		var news2;
		var topic2;
		var video;
		var WorkOut7m;
		var FIGUREROBICS;
		var yoga;
		var bmiHeight;
		var bmiWeight;
		var bmi;

		window.onload=function () {
			tv=document.getElementById("tv");
			management1=document.getElementById("management1");
			hot1=document.getElementById("hot1");
			news1=document.getElementById("news1");
			topic1=document.getElementById("topic1");
			content=document.getElementById("content");
			management2=document.getElementById("management2");
			hot2=document.getElementById("hot2");
			news2=document.getElementById("news2");
			topic2=document.getElementById("topic2");

			// TV
			WorkOut7m=document.getElementById("WorkOut7m");
			WorkOut7m.play();
			video=WorkOut7m;
			FIGUREROBICS=document.getElementById("FIGUREROBICS");
			yoga=document.getElementById("yoga");

			//BMI
			bmi=document.getElementById("bmi");
		};
		function changeToTv() {
			tv.style.color="#0000FF";
			management1.style.color="#B9B9FF";
			hot1.style.color="#B9B9FF";
			news1.style.color="#B9B9FF";
			topic1.style.color="#B9B9FF";

			content.style.display="block";
			showWorkOut7m();
			management2.style.display="none";
			hot2.style.display="none";
			news2.style.display="none";
			topic2.style.display="none";
		}
		function changeTomanagement(){
			tv.style.color="#B9B9FF";
			management1.style.color="#0000FF";
			hot1.style.color="#B9B9FF";
			news1.style.color="#B9B9FF";
			topic1.style.color="#B9B9FF";

			content.style.display="none";
			WorkOut7m.pause();
			FIGUREROBICS.pause();
			yoga.pause();
			management2.style.display="block";
			hot2.style.display="none";
			news2.style.display="none";
			topic2.style.display="none";
		}	
		function changeToHot() {
			tv.style.color="#B9B9FF";
			management1.style.color="#B9B9FF";
			hot1.style.color="#0000FF";
			news1.style.color="#B9B9FF";
			topic1.style.color="#B9B9FF";

			content.style.display="none";
			WorkOut7m.pause();
			FIGUREROBICS.pause();
			yoga.pause();
			management2.style.display="none";
			hot2.style.display="block";
			news2.style.display="none";
			topic2.style.display="none";
		}

		function changeToNews() {
			tv.style.color="#B9B9FF";
			management1.style.color="#B9B9FF";
			hot1.style.color="#B9B9FF";
			news1.style.color="#0000FF";
			topic1.style.color="#B9B9FF";

			content.style.display="none";
			WorkOut7m.pause();
			FIGUREROBICS.pause();
			yoga.pause();
			management2.style.display="none";
			hot2.style.display="none";
			news2.style.display="block";
			topic2.style.display="none";
		}

		function changeToTopic() {
			tv.style.color="#B9B9FF";
			management1.style.color="#B9B9FF";
			hot1.style.color="#B9B9FF";			
			news1.style.color="#B9B9FF";
			topic1.style.color="#0000FF";

			content.style.display="none";
			WorkOut7m.pause();
			FIGUREROBICS.pause();
			yoga.pause();
			management2.style.display="none";
			hot2.style.display="none";
			news2.style.display="none";
			topic2.style.display="block";
		}

		function changeToBack() {
			tv.style.color="#B9B9FF";
			management1.style.color="#B9B9FF";
			hot1.style.color="#B9B9FF";			
			news1.style.color="#B9B9FF";
			topic1.style.color="#B9B9FF";

			content.style.display="block";
			showWorkOut7m();
			management2.style.display="none";
			hot2.style.display="none";
			news2.style.display="none";
			topic2.style.display="none";
		}

		// TV
			function showWorkOut7m(){
			WorkOut7m.style.display="block";
			WorkOut7m.play();
			FIGUREROBICS.style.display="none";
			FIGUREROBICS.pause();
			yoga.style.display="none";
			yoga.pause();
			video=WorkOut7m;
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
			bmiHeight=document.getElementById("bmiHeight").value;
			bmiWeight=document.getElementById("bmiWeight").value;
			var h = Number(bmiHeight);
        	var w = Number(bmiWeight);
        	var yourBmi = w / (h * h) * 10000;
        	bmi.innerHTML=Math.round(yourBmi*100)/100;
		}
     //google chart
     google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      var dataArray = [
          ['day', 'step', 'calorie'],
          ['1',  10000,     3000],
          ['2',  8100,      2430],
          ['3',  6600,       1980],
          ['4',  10300,      3090],
          ['5',  9100,      2730],
          ['6',  4170,      1251],
          ['7',  6560,       1968],
          ['8',  10030,      3009],
          ['9',  7100,      2130],
          ['10',  5170,      1551],
          ['11',  9660,       2898],
          ['12',  8130,      2439],
          ['13',  6560,       1968],
          ['14',  6670,       1992],
          ['15',  5660,       1698],
          ['16',  9660,       2898],
          ['17',  11660,       3498],
          ['18',  8670,       2601],
          ['19',  9860,       2958],
          ['20',  6160,       1848],
          ['21',  6650,       1995],
          ['22',  9650,       2895],
          ['23',  8960,       2688],
          ['24',  6450,       1935],
          ['25',  10330,       3099],
          ['26',  8330,       2949],
          ['27',  8660,       2598],
          ['28',  6660,       1998],
          ['29',  9660,       2898],
          ['30',  7960,       2388],
          ['31',  10790,       3237]
        ];

      function drawChart() {
        var data = google.visualization.arrayToDataTable(dataArray);

        var options = {
          title: 'Monthly Sports Profile',
          hAxis: {title: 'Day',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
          // backgroundColor.fill: gray
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
      dataArray[Number(d)]=[d, s, c];
      drawChart();
      //加入google.visualization.arrayToDataTable

      return true;//送出
    };