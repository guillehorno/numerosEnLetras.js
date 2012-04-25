(function( $ ) {
  $.fn.numeroEnLetras = function(options) {

    // Extiende de las opciones que vienen como parámetro. 
    var settings = $.extend( {
      'elemento_a_setear': null
    }, options);

    var ones=['','un','dos','tres','cuatro','cinco','seis','siete','ocho','nueve'];
var tens=['','','veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
var tenscomp=['','','veniti','treinta y ','cuarenta y ','cincuenta y ','sesenta y ','setenta y ','ochenta y ','noventa y '];
var teens=['diez','once','doce','trece','catorce','quince','dieciseis','diecisiete','dieciocho','diecinueve'];
var cientos=['','ciento','doscientos','trescientos','cuatrocientos','quinientos','seiscientos','setecientos','ochocientos','novecientos'];


    function convert_millions(num){
        if (num>=1000000){
            return convert_millions(Math.floor(num/1000000))+" millones "+convert_thousands(num%1000000);
        }
        else {
            return convert_thousands(num);
        }
    }

    function convert_thousands(num){
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
    }

    function convert_hundreds(num){
        if (num>99){
            return cientos[Math.floor(num/100)]+" "+convert_tens(num%100);
        }
        else{
            return convert_tens(num);
        }
    }

    function convert_tens(num){
        if (num<10) return ones[num];
        else if (num>=10 && num<20) return teens[num-10];
        else{
            return tenscomp[Math.floor(num/10)]+ones[num%10];
        }
    }

    function convert(num){
        if (num===0) return "cero";
        else return convert_millions(num);
    }
    
    // Do your awesome plugin stuff here
    var valor_en_letras = convert(this.val());
    if(settings.elemento_a_setear){
        var $elemento = $(settings.elemento_a_setear);
        if($elemento.is('input')){
            $elemento.val(valor_en_letras);
        }
        else{
            $elemento.html(valor_en_letras);
        }
        return this;
    }
    else{
        return valor_en_letras;
    }

  };
})( jQuery );