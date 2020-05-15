

function sprawdzMase()
{
var masa = parseFloat(document.getElementById("masa").value);
	//replace( /,/, '.' ); //zamień "," na "."
	if ( isNaN(parseFloat(masa)))
	{
		alert("Masa musi być liczbą. Część dziesiętną oddziel \'.\' ");
	}
	else if (masa<=0 ) 
	{
		alert("Masa musi być liczbą dodatnią.");
	}
	else return true;
	
	return false;
}

function sprawdzWzrost()
{
var wzrost = parseFloat(document.getElementById("wzrost").value)/100;
	if ( isNaN(parseFloat(wzrost))) 
	{
		alert("Wzrost musi być liczbą. Część dziesiętną oddziel \'.\' ");
	}
	else if (wzrost<=0) 
	{
		alert("Wzrost musi być liczbą dodatnią.");
	}
	else return true;
	
	return false;
}

function wylicz()
{
	if(sprawdzMase() && sprawdzWzrost()){	
	var masa = parseFloat(document.getElementById("masa").value);
	var wzrost = parseFloat(document.getElementById("wzrost").value)/100;	
	var wynik = (masa/(wzrost*wzrost)).toPrecision(4);
	var komentarz = "Twoje BMI wynosi" 	
	var kolor = "black"		
			
			if (wynik<16) {
				komentarz += " " + wynik + ".</br> Oznacza to wygłodzenie";
				kolor = "red"
			}
			else if (wynik<=16.99)  komentarz +=  " " + wynik + ".</br> Oznacza to wychudzenie";
			else if (wynik<=18.49)  komentarz +=  " " + wynik + ".</br> Oznacza to niedowagę";
			else if (wynik<=24.99)   komentarz +=  " " + wynik + ".</br> Oznacza to wartość prawidłową";
			else if (wynik<=29.99)   komentarz +=  " " + wynik + ".</br> Oznacza to nadwagę";
			else if (wynik<=34.99)  {
				komentarz +=  " " + wynik + ".</br> Oznacza to I stopień otyłości";
				kolor = "red"
			}
			else if (wynik<=39.99)  {
				komentarz +=  " " + wynik + ". </br>Oznacza to II stopień otyłości tzw. otyłość kliniczną";
				kolor = "red"
			}
			else   komentarz +=  " " + wynik + ".</br> Oznacza to III stopień otyłości tzw. otyłość skrajną";
			document.getElementById("wynik").style.color = kolor;
			document.getElementById("wynik").innerHTML=komentarz;
	}

}

