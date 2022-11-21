let suma = 1;

console.log(suma)
suma += 1;

function showScore(){
	document.getElementById("wynik").value=suma

}

	showScore()
document.getElementById("plus").addEventListener("click", function(){
	suma +=1;
	showScore()
})
document.getElementById("minus").addEventListener("click", function(){
	suma -=1;
	showScore()
})
document.getElementById("resetuj").addEventListener("click", function(){
	suma=0
	showScore()
})
