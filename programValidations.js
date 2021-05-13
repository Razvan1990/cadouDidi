			function programValidations(){

				var prenume = document.getElementById("prenume").value;
				var name = document.getElementById("nume").value;
				var nume_tata = document.getElementById("prenume_tata").value;
				var nume_mama = document.getElementById("prenume_mama").value;
				var adresa = document.getElementById("Adresa").value;
				var email =document.getElementById("email").value;
				var telephone = document.getElementById("telephone").value;
				var birthdate = document.getElementById("birthdate").value;

				var year = birthdate.split("-")[0];
				var yearInt = parseInt(year);

				let arrayOfPersonalInfo = [name, prenume, nume_tata, nume_mama, adresa, email, telephone, birthdate];

				var checkedFamilyMember = null;
				var familyMember = document.getElementsByName("answer");
			//aici va returna practic intreg JSON-ul cu cheie-valoarea: 0:input #Tata -> check in Google Dev
				for(let i =0;i<familyMember.length;i++){
					if(familyMember[i].checked){
						checkedFamilyMember = familyMember[i].value;
						break;
					
					}
				}
				//console.log(checkedFamilyMember);

				var checkedBestAnimal = null;
				var bestAnimal = document.getElementsByName("answer2");

				for(let i =0;i<bestAnimal.length;i++){
					if(bestAnimal[i].checked){
						checkedBestAnimal = bestAnimal[i].value;
						break;
					}

				}

				var checkedFavouriteMagazine = null;
				var favouriteMagazine = document.getElementsByName("answer3");

				for (let i =0;i<favouriteMagazine.length;i++){
					if(favouriteMagazine[i].checked){
						checkedFavouriteMagazine = favouriteMagazine[i].value;
						break;
					}
				}
			//for debug reasons
				let arrayOfPersonalQuestions = [checkedFamilyMember, checkedBestAnimal, checkedFavouriteMagazine];

				for(let i =0;i<arrayOfPersonalQuestions.length;i++){
					console.log(arrayOfPersonalQuestions[i]);
				}
			/**Validarile **/

		//validare nume pentru mama si tata sa fie prezent

			if(arrayOfPersonalInfo[2]==="" || arrayOfPersonalInfo[3]===""){
				alert("Nu lasati necompletate campurile pentru prenumele parintilor");
				document.getElementsById("prenume_tata").style.borderColor="#8b0000";
				document.getElementsById("prenume_mama").style.borderColor ="#8b0000";
				return false;
			}
			
			for(let i =0;i<arrayOfPersonalInfo.length-4;i++){
				if(arrayOfPersonalInfo[i].charAt(0)!==arrayOfPersonalInfo[i].charAt(0).toUpperCase()){
					alert("Va rugam completati prima litera cu majuscula");
					document.getElementById("prenume").style.borderColor="#8b0000";
				    document.getElementById("nume").style.borderColor ="#8b0000";
					document.getElementById("prenume_tata").style.borderColor="#8b0000";
				    document.getElementById("prenume_mama").style.borderColor ="#8b0000";
				   

				    return false;
				    break;

				
			}

		}
		//validare adresa sa fie prezenta + sa contina strada
			if(arrayOfPersonalInfo[4]===""){
				alert("Va rugam sa completati adresa");
				document.getElementById("Adresa").style.borderColor ="#8b0000";
				return false;
			}
			else if(arrayOfPersonalInfo[4].search("Strada")===-1 && arrayOfPersonalInfo[4].search("Str.")===-1 && arrayOfPersonalInfo[4].search("strada")===-1
			 && arrayOfPersonalInfo[4].search("str.")===-1 && arrayOfPersonalInfo[4].search("STR.")===-1 && arrayOfPersonalInfo[4].search("STRADA")===-1 ){
				alert("Adresa trebuie sa contina neaparat strada. Completati Strada, STRADA, Str. STR etc.");
			    document.getElementById("Adresa").style.backgroundColor ="#8b0000";
				return false;
			}	
			
	//validare data nastere
			if (birthdate!==""){
			var currentDate = new Date();

			var month = currentDate.getMonth()+1;
			if(month <10){
				month = '0'+ month;
			}
			var day = currentDate.getDate();
			if(day < 10){
				day = '0'+day; 
			}

			var today = currentDate.getFullYear() +"-"+month +"-"+day;




			if(arrayOfPersonalInfo[7]>today || currentDate.getFullYear() < yearInt + 14){
				alert("Ai introdus o data din viitor sau nu ai inca 14 ani pentru a-ti face buletin. Te rugam sa re-generezi CNP-UL apoi!!");
				document.getElementById("birthdate").style.borderColor ="#8b0000";
				document.getElementById("cnp").value ="";
				return false;
			}
		} 
	//validare sa avem daca e generat cnp si seria+numar buletin
			var cnp = document.getElementById("cnp").value;
			var seriaBuletin = document.getElementById("seria_numar").value;

			let arrayOfGeneratedStuff = [cnp, seriaBuletin];

			if(arrayOfGeneratedStuff[0]===""){
				alert("Atentie! Trebuie intai sa generezi CNP-ul pentru a putea trimite formularul");
				document.getElementById("cnp").style.borderColor ="#8b0000";
				return false;
			}

			if(arrayOfGeneratedStuff[1]===""){
				alert("Atentie! Trebuie intai sa generezi seria si numar buletin pentru a putea trimite formularul");
				document.getElementById("seria_numar").style.borderColor ="#8b0000";
				return false;
			}
	/*validare pentru optiunile alese*/

	//1. validare pentru prima intrebare

			if(checkedFamilyMember===null){
				alert("Trebuie sa completezi chestionarul personal");
				document.getElementById("tata").style.outline ="2px solid red";
				document.getElementById("elena").style.outline ="2px solid red";
				document.getElementById("ico").style.outline ="2px solid red";
				document.getElementById("luci").style.outline ="2px solid red";
				return false;
			}else if(checkedFamilyMember !=="luci"){
				alert("Nu cred ca esti DIDI. Didi sigur ar pune alta optiune aici!");
				document.getElementById("tata").style.outline ="2px solid red";
				document.getElementById("elena").style.outline ="2px solid red";
				document.getElementById("ico").style.outline ="2px solid red";
				document.getElementById("luci").style.outline ="2px solid red";
				return false;
			}

	//2. validare pentru a doua intrebare		
			if(checkedBestAnimal===null){
				alert("Trebuie sa completezi chestionarul personal");
				document.getElementById("miti").style.outline ="2px solid red";
				document.getElementById("tomi").style.outline ="2px solid red";
				document.getElementById("ricki").style.outline ="2px solid red";
				document.getElementById("altceva").style.outline ="2px solid red";
				return false;
			}else if(checkedBestAnimal !=="tomi"){
				alert("Nu cred ca esti DIDI. Didi sigur ar pune alta optiune aici!")
				document.getElementById("miti").style.outline ="2px solid red";
				document.getElementById("tomi").style.outline ="2px solid red";
				document.getElementById("ricki").style.outline ="2px solid red";
				document.getElementById("altceva").style.outline ="2px solid red";
				return false;
			}
	//3. validare pentru a treia intrebare
			if(checkedFavouriteMagazine===null){
				alert("Trebuie sa completezi chestionarul personal");
				document.getElementById("lidl").style.outline ="2px solid red";
				document.getElementById("grecu").style.outline ="2px solid red";
				document.getElementById("pepco").style.outline ="2px solid red";
				document.getElementById("penny").style.outline ="2px solid red";
				return false;
			}else if(checkedFavouriteMagazine!=="pepco"){
				alert("Nu cred ca esti DIDI. Didi sigur ar pune alta optiune aici!")
				document.getElementById("lidl").style.outline ="2px solid red";
				document.getElementById("grecu").style.outline ="2px solid red";
				document.getElementById("pepco").style.outline ="2px solid red";
				document.getElementById("penny").style.outline ="2px solid red";
				return false;
			}



			     var myAnswer = confirm("Ai completat corect tot? Daca da te rog sa ne trimiti formularul?");
					if(myAnswer ===true){			

					window.open("redirect.html");
				}else{
					alert("Hai sa completam din nou");
					return false;
				}
			}