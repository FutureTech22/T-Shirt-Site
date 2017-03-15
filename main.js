var shirticon1= document.getElementById('bluecart')
var shirticon2= document.getElementById('orangecart')
var shirticon3= document.getElementById('pinkcart')
var subtotal = 0;
var subtotalbox= document.getElementById('subtotal')
var totalbox= document.getElementById('total')
var shirt1isincart = false;
var shirt2isincart = false;
var shirt3isincart = false;

shirticon1.addEventListener("click",function(){

	if (shirt1isincart === false){
		subtotal +=29;
	
		shirt1isincart = true;	
	}
	else {
   		subtotal-=29;
   		
   		shirt1isincart = false;
	}
subtotalbox.innerHTML=subtotal
var total=subtotal *1.065
totalbox.innerHTML=total
} )


shirticon2.addEventListener("click",function(){

	if (shirt2isincart === false){
		subtotal +=29;
	
		shirt2isincart = true;	
	}
	else {
   		subtotal-=29;
   		shirt2isincart = false;
	}
subtotalbox.innerHTML=subtotal
var total=subtotal *1.065
totalbox.innerHTML=total
} )


shirticon3.addEventListener("click",function(){

	if (shirt3isincart === false){
		subtotal +=29;
	
		shirt3isincart = true;	
	}
	else {
   		subtotal-=29;
   		shirt3isincart = false;
	}
subtotalbox.innerHTML=subtotal
var total=subtotal *1.065
totalbox.innerHTML=total
} )


