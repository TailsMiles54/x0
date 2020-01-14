var arr = [1,2,3,4,5,6,7,8,9];

let hod = 'O';

function change(event, field) {
	let i = 1;

	if (event.keyCode == 32)
	{
		if (hod == 'O') {
		document.getElementById(field.id).value = hod;
		hod = 'X';
		document.getElementById("min").innerHTML = hod;
		console.log(hod);
		check();
		}
	}

  else if (event.keyCode != 32)
  {
    alert("Press >Space<");
    document.getElementById(field.id).value = '';
    return;
  }

	while(i<5)
	{
		var rand = Math.floor(Math.random() * arr.length);
		if (document.getElementById(arr[rand]).value == (''))
		{
		console.log(hod);
		document.getElementById(arr[rand]).value = hod;
		hod = 'O';
		document.getElementById("min").innerHTML = hod;
    check();
		i = 5;
		}
	}
}

function restart() {
  document.getElementById("1").style.backgroundColor = "#F0E68C";
document.getElementById("2").style.backgroundColor = "#F0E68C";
document.getElementById("3").style.backgroundColor = "#F0E68C";
document.getElementById("4").style.backgroundColor = "#F0E68C";
document.getElementById("5").style.backgroundColor = "#F0E68C";
document.getElementById("6").style.backgroundColor = "#F0E68C";
document.getElementById("7").style.backgroundColor = "#F0E68C";
document.getElementById("8").style.backgroundColor = "#F0E68C";
document.getElementById("9").style.backgroundColor = "#F0E68C";
document.getElementById("1").value = '';
document.getElementById("2").value = '';
document.getElementById("3").value = '';
document.getElementById("4").value = '';
document.getElementById("5").value = '';
document.getElementById("6").value = '';
document.getElementById("7").value = '';
document.getElementById("8").value = '';
document.getElementById("9").value = '';
};

function check()
{
//Горизонтально
if ((document.getElementById('1').value == document.getElementById('2').value) && (document.getElementById('1').value == document.getElementById('3').value) && document.getElementById('1').value != '' && document.getElementById('2').value != '' && document.getElementById('3').value != '')
{
  document.getElementById("1").style.backgroundColor = "#00FF00";
  document.getElementById("2").style.backgroundColor = "#00FF00";
  document.getElementById("3").style.backgroundColor = "#00FF00";
  mess();
}

if ((document.getElementById('4').value == document.getElementById('5').value) && (document.getElementById('4').value == document.getElementById('6').value) && document.getElementById('4').value != '' && document.getElementById('5').value != '' && document.getElementById('6').value != '')
{
  document.getElementById("4").style.backgroundColor = "#00FF00";
  document.getElementById("5").style.backgroundColor = "#00FF00";
  document.getElementById("6").style.backgroundColor = "#00FF00";
  mess();
}

if ((document.getElementById('7').value == document.getElementById('8').value) && (document.getElementById('7').value == document.getElementById('9').value) && document.getElementById('7').value != '' && document.getElementById('8').value != '' && document.getElementById('9').value != '')
{
  document.getElementById("7").style.backgroundColor = "#00FF00";
  document.getElementById("8").style.backgroundColor = "#00FF00";
  document.getElementById("9").style.backgroundColor = "#00FF00";
  mess();
}

//Вертикально
if ((document.getElementById('1').value == document.getElementById('4').value) && (document.getElementById('1').value == document.getElementById('7').value) && document.getElementById('1').value != '' && document.getElementById('4').value != '' && document.getElementById('7').value != '')
{
  document.getElementById("1").style.backgroundColor = "#00FF00";
  document.getElementById("4").style.backgroundColor = "#00FF00";
  document.getElementById("7").style.backgroundColor = "#00FF00";
  mess();
}

if ((document.getElementById('2').value == document.getElementById('5').value) && (document.getElementById('2').value == document.getElementById('8').value) && document.getElementById('2').value != '' && document.getElementById('5').value != '' && document.getElementById('8').value != '')
{
  document.getElementById("2").style.backgroundColor = "#00FF00";
  document.getElementById("5").style.backgroundColor = "#00FF00";
  document.getElementById("8").style.backgroundColor = "#00FF00";
  mess();
}

if ((document.getElementById('3').value == document.getElementById('6').value) && (document.getElementById('3').value == document.getElementById('9').value) && document.getElementById('3').value != '' && document.getElementById('6').value != '' && document.getElementById('9').value != '')
{
  document.getElementById("3").style.backgroundColor = "#00FF00";
  document.getElementById("6").style.backgroundColor = "#00FF00";
  document.getElementById("9").style.backgroundColor = "#00FF00";
  mess();
}

//Крест
if ((document.getElementById('1').value == document.getElementById('5').value) && (document.getElementById('1').value == document.getElementById('9').value) && document.getElementById('1').value != '' && document.getElementById('5').value != '' && document.getElementById('9').value != '')
{
  document.getElementById("1").style.backgroundColor = "#00FF00";
  document.getElementById("5").style.backgroundColor = "#00FF00";
  document.getElementById("9").style.backgroundColor = "#00FF00";
  mess();
}
if ((document.getElementById('3').value == document.getElementById('5').value) && (document.getElementById('3').value == document.getElementById('7').value) && document.getElementById('3').value != '' && document.getElementById('5').value != '' && document.getElementById('7').value != '')
{
  document.getElementById("3").style.backgroundColor = "#00FF00";
  document.getElementById("5").style.backgroundColor = "#00FF00";
  document.getElementById("7").style.backgroundColor = "#00FF00";
  mess();
}
}

function mess()
{
  if(hod == 'O')
    alert("win x");
    restart();
  if(hod == 'X')
    alert("win o");
    restart();
}
