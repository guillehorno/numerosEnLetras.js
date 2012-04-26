var numeroEnLetras = function(){

	var ones=['','un','dos','tres','cuatro','cinco','seis','siete','ocho','nueve'];
	var tens=['','','veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
	var tenscomp=['','','veinti','treinta y ','cuarenta y ','cincuenta y ','sesenta y ','setenta y ','ochenta y ','noventa y '];
	var teens=['diez','once','doce','trece','catorce','quince','dieciseis','diecisiete','dieciocho','diecinueve'];
	var cientos=['','ciento','doscientos','trescientos','cuatrocientos','quinientos','seiscientos','setecientos','ochocientos','novecientos'];

    var convert_millions = function(num){
        if (num>=1000000){
            return convert_millions(Math.floor(num/1000000))+" millones "+convert_thousands(num%1000000);
        }
        else {
            return convert_thousands(num);
        }
    };

     var convert_thousands = function(num){
        if (num>=1000){
            var divisor;
            if(Math.floor(num/1000) == 1) divisor = "mil";
            else {
                if(Math.floor(num/1000) > 9){
                    divisor =  convert_hundreds(Math.floor(num/1000))+" mil";
                }
                else{
                    divisor = ones[Math.floor(num/1000)]+" mil";
                }
            } 
            return divisor+" "+convert_hundreds(num%1000);
        }
        else{
            return convert_hundreds(num);
        }
    };

    var convert_hundreds = function(num){
        if (num>99){
            return cientos[Math.floor(num/100)]+" "+convert_tens(num%100);
        }
        else{
            return convert_tens(num);
        }
    };

    var convert_tens = function(num){
        if (num<10) return ones[num];
        else if (num>=10 && num<20) return teens[num-10];
        else{
            if((num/10)%1 === 0) return tens[Math.floor(num/10)];
            else return tenscomp[Math.floor(num/10)]+ones[num%10];
        }
    };

    return function convert(num){
        if (num===0) return "cero";
        else return convert_millions(num);
    };
}();