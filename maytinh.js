
var x = "";
var y = "";
var z = "";
var kq ="";

function show(a) {
  
  if( x == "" && (a =="=" || a == "mrc" || a == "m+" || a == "m-" || a == "+" || a =="-" || a=="x" || a=="÷" || a=="C")){
  	document.getElementById('calc-display-input').value = "MATH ERROR!!!";
  }
  else{
  	if(x == ""){
  		x = x+a;
  		document.getElementById('calc-display-input').value = x;
  	}
  	else{
  		if(a !="=" && a != "mrc" && a != "m+" && a != "m-" && a != "+" && a !="-" && a!="x" && a!="÷" && a!="C"){
  		    x = x+a;
  			document.getElementById('calc-display-input').value = x;	
  		}
  		if((  a == "mrc" || a == "m+" || a == "m-" )  ){
  			document.getElementById('calc-display-input').value = "MATH ERROR!!!";
  			x="";
  		}
  		if( a == "=" && y ==""){
  			document.getElementById('calc-display-input').value = "MATH ERROR!!!";
  			x="";
  		}
  		if(a=="=" && y != ""){
  			kq = tinh( parseFloat(y),parseFloat(x),z[z.length - 1]);
  			
  			// alert(parseFloat(y));
  			// alert(parseFloat(x));

  			document.getElementById('calc-display-input').value = kq;
  			x = kq;   // Để tính tiếp lưu giá trị AND
  			y = "";
  			z = "";
  		}
  		if( a == "+" || a =="-" || a=="x" || a=="÷" ){
  			// z = z+a;
  			// y = x;
  			// x = "";
        if( z.length == 0){
          z = z+a;
          y = x;
          x = "";
        }
        else{
          z = z + a;
          y = tinh( parseFloat(y),parseFloat(x),z[z.length - 2]);
          x = "";
        }
  		}
  		if( a=="C" ){
  			var b= x.length;
  			x = x.substring(0,b-1);
  			document.getElementById('calc-display-input').value = x;
  		}
 
  	}
  }

 }

function tinh(a,b,c){
	if(c == "+") return (a+b);
	if(c == "-") return (a-b);
	if(c == "x") return (a*b);
	if(c == "÷") return (a/b);
}


