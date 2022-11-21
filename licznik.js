let suma = 1;

console.log(suma)
suma += 1;

document.getElementById("wynik").value=suma
document.getElementById("plus").addEventListener("click", function(){
	suma +=1;
	document.getElementById("wynik").value=suma
})
document.getElementById("minus").addEventListener("click", function(){
	suma -=1;
	document.getElementById("wynik").value=suma
})
