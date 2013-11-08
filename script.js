directoryMatch = function(){
	var name = document.getElementById("dirMatch").value;
	toString(name);
	var lowerName = name.toLowerCase();
	console.log(lowerName);
	var firstDigitInName = lowerName.substr(0,1);
	console.log(firstDigitInName);
	var secondDigitInName = lowerName.substr(1,1);
	console.log(secondDigitInName);
	var thirdDigitInName = lowerName.substr(2,1);
	console.log(thirdDigitInName);
	if(firstDigitInName=="a" || firstDigitInName=="b" || firstDigitInName=="c"){
		var dir1 = "2";
		//document.getElementById("dirMatchResult").innerHTML = dir1;
	}else if(firstDigitInName=="d" || firstDigitInName=="e" || firstDigitInName=="f"){
		var dir1 = "3";
		document.getElementById("dirMatchResult").innerHTML = dir1;
	}else if(firstDigitInName=="g" || firstDigitInName=="h" || firstDigitInName=="i"){
		var dir1 = "4";
		document.getElementById("dirMatchResult").innerHTML = dir1;
	}else if(firstDigitInName=="j" || firstDigitInName=="k" || firstDigitInName=="l"){
		var dir1 = "5";
		document.getElementById("dirMatchResult").innerHTML = dir1;
	}else if(firstDigitInName=="m" || firstDigitInName=="n" || firstDigitInName=="o"){
		var dir1 = "6";
		document.getElementById("dirMatchResult").innerHTML = dir1;
	}else if(firstDigitInName=="p" || firstDigitInName=="q" || firstDigitInName=="r" || firstDigitInName=="s"){
		var dir1 = "7";
		document.getElementById("dirMatchResult").innerHTML = dir1;
	}else if(firstDigitInName=="t" || firstDigitInName=="u" || firstDigitInName=="v"){
		var dir1 = "8";
		document.getElementById("dirMatchResult").innerHTML = dir1;
	}else if(firstDigitInName=="w" || firstDigitInName=="x" || firstDigitInName=="y" || firstDigitInName=="z"){
		var dir1 = "9";
		document.getElementById("dirMatchResult").innerHTML = dir1;
	};
	
	if(secondDigitInName=="a" || secondDigitInName=="b" || secondDigitInName=="c"){
		var dir2 = "2";
		//document.getElementById("dirMatchResult").innerHTML = dir2;
	}else if(secondDigitInName=="d" || secondDigitInName=="e" || secondDigitInName=="f"){
		var dir2 = "3";
		document.getElementById("dirMatchResult").innerHTML = dir2;
	}else if(secondDigitInName=="g" || secondDigitInName=="h" || secondDigitInName=="i"){
		var dir2 = "4";
		document.getElementById("dirMatchResult").innerHTML = dir2;
	}else if(secondDigitInName=="j" || secondDigitInName=="k" || secondDigitInName=="l"){
		var dir2 = "5";
		document.getElementById("dirMatchResult").innerHTML = dir2;
	}else if(secondDigitInName=="m" || secondDigitInName=="n" || secondDigitInName=="o"){
		var dir2 = "6";
		document.getElementById("dirMatchResult").innerHTML = dir2;
	}else if(secondDigitInName=="p" || secondDigitInName=="q" || secondDigitInName=="r" || secondDigitInName=="s"){
		var dir2 = "7";
		document.getElementById("dirMatchResult").innerHTML = dir2;
	}else if(secondDigitInName=="t" || secondDigitInName=="u" || secondDigitInName=="v"){
		var dir2 = "8";
		document.getElementById("dirMatchResult").innerHTML = dir2;
	}else if(secondDigitInName=="w" || secondDigitInName=="x" || secondDigitInName=="y" || secondDigitInName=="z"){
		var dir2 = "9";
		document.getElementById("dirMatchResult").innerHTML = dir2;
	};

	if(thirdDigitInName=="a" || thirdDigitInName=="b" || thirdDigitInName=="c"){
		var dir3 = "2";
		//document.getElementById("dirMatchResult").innerHTML = dir3;
	}else if(thirdDigitInName=="d" || thirdDigitInName=="e" || thirdDigitInName=="f"){
		var dir3 = "3";
		document.getElementById("dirMatchResult").innerHTML = dir3;
	}else if(thirdDigitInName=="g" || thirdDigitInName=="h" || thirdDigitInName=="i"){
		var dir3 = "4";
		document.getElementById("dirMatchResult").innerHTML = dir3;
	}else if(thirdDigitInName=="j" || thirdDigitInName=="k" || thirdDigitInName=="l"){
		var dir3 = "5";
		document.getElementById("dirMatchResult").innerHTML = dir3;
	}else if(thirdDigitInName=="m" || thirdDigitInName=="n" || thirdDigitInName=="o"){
		var dir3 = "6";
		document.getElementById("dirMatchResult").innerHTML = dir3;
	}else if(thirdDigitInName=="p" || thirdDigitInName=="q" || thirdDigitInName=="r" || thirdDigitInName=="s"){
		var dir3 = "7";
		document.getElementById("dirMatchResult").innerHTML = dir3;
	}else if(thirdDigitInName=="t" || thirdDigitInName=="u" || thirdDigitInName=="v"){
		var dir3 = "8";
		document.getElementById("dirMatchResult").innerHTML = dir3;
	}else if(thirdDigitInName=="w" || thirdDigitInName=="x" || thirdDigitInName=="y" || thirdDigitInName=="z"){
		var dir3 = "9";
		document.getElementById("dirMatchResult").innerHTML = dir3;
	};
	//var result = concat(dir1,dir2,dir3);
	document.getElementById("dirMatchResult").innerHTML = "The directory Match is: "+dir1+dir2+dir3;

}

