			function cnp_generation(){

			var date = document.getElementById('birthdate').value;
			var prenume = document.getElementById("prenume").value;
			var name = document.getElementById("nume").value;

			if(date!=="" && prenume!==""&& name!==""){
			var finalLetter = prenume.charAt(prenume.length-1);

			var year = date.split("-")[0];
			var month = date.split("-")[1];
			var day = date.split("-")[2];

			//default value
			var gender = 0;

			switch(finalLetter){
				case "a":
				if(year >=2000){
					gender = 6;
				}else{
					gender = 2;
				}
				break;
				default:
				if(year>=2000){
					gender = 5;
				}else{
					gender = 1;
				}
				break;

			}

			var cnpYear = year.charAt(2)+ year.charAt(3);

			var randomNumber = Math.floor(Math.random()*100000);

			var cnpWithoutLastDigit = gender+cnpYear+month+day+randomNumber;
			console.log(cnpWithoutLastDigit);
			var controlNumber ="279146358279";

			sum = 0;
			for(let i =0;i<cnpWithoutLastDigit.length;){
				for(let j=0;j<controlNumber.length;){
					sum = cnpWithoutLastDigit[i] * controlNumber[j] +sum;
					i++;j++;
				}
			}
			var lastDigit = sum %11;
			if(lastDigit = 10){
				lastDigit =1;
			}

			CNP = cnpWithoutLastDigit +lastDigit;
			document.getElementById("cnp").value = CNP;
			document.getElementById("birthdate").style.backgroundColor="";
			document.getElementById("prenume").style.backgroundColor="";
			document.getElementById("nume").style.backgroundColor="";
			}else{
				alert("Completeaza intai toate datele de sus(data nasterii +nume)");
				document.getElementById("birthdate").style.backgroundColor="#8b0000";
				document.getElementById("prenume").style.backgroundColor="#8b0000";
				document.getElementById("nume").style.backgroundColor="#8b0000";
			}
		}

			function generate_series(){

				var judet = document.getElementById("Judet").value;
				var prenume = document.getElementById("prenume").value;
			    var name = document.getElementById("nume").value;

				if(judet!=="" && prenume!==""&& name!==""){
					let seria = "";

					switch(judet){
						case "Bacau":
						let bacauSeries =["XC", "ZC"];
						randomSeries =Math.floor(Math.random()*2);
						seria = bacauSeries[randomSeries];
						break;
						case "Botosani":
						seria = "XT";
						break;
						case "Galati":
						let galatiSeries =["GL", "ZL"];
						randomSeries =Math.floor(Math.random()*2);
						seria = galatiSeries[randomSeries];
						break;
						case "Iasi":
						let iasiSeries =["MX", "MZ"];
						randomSeries =Math.floor(Math.random()*2);
						seria = iasiSeries[randomSeries];
						break;
						case "Neamt":
						seria ="NT";
						break;
						case "Suceava":
						let suceavaSeries =["SV", "XV"];
						randomSeries =Math.floor(Math.random()*2);
						seria = suceavaSeries[randomSeries];
						break;
						case "Vaslui":
						seria ="VS";
						break;
						case "Vrancea":
						seria="VN"
						break;
						default:
						alert("Nu putem crea buletin pentru un judet ce nu apartine Moldovei. Incercati in judetul de resedinta");
						document.getElementById("Judet").style.borderColor ="red";
						document.getElementById("Adresa").style.borderColor ="red";
					}

					let numar = Math.floor(Math.random()*1000000);
					if(seria!==""){
					let serieNumar = seria +" "+numar;
					document.getElementById("seria_numar").value = serieNumar;
					document.getElementById("Judet").style.backgroundColor="";
				    document.getElementById("Adresa").style.backgroundColor="";
				    document.getElementById("Judet").style.backgroundColor ="";
					document.getElementById("Adresa").style.backgroundColor ="";
					}
				

				}
				else{
				alert("Completeaza intai toate datele de domiciliu");
				document.getElementById("Judet").style.backgroundColor="#8b0000";
				document.getElementById("Adresa").style.backgroundColor="#8b0000";
				
			}
		}
			