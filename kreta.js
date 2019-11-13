var jegyek = prompt("megszerzett jegyek összege") ; //megszerzett jegyek összege
var jsz = prompt("jegyek száma")    ;   //jegyek száma
var th = prompt("mennyi jegyet tudsz szerezni?")       ; //tűréshatár (mennyi jegy alatt akarja elérni)
var elak = prompt("mit akarsz elérni?")    ;  //az a jegy amit el akar érni


var atlag = jegyek/jsz;
var x = elak*jsz+elak*th-jegyek



 switch (atlag) {
    case 1:
         switch (Math.round(elak)) {
            case 1 :
                    alert("szerezz"+" "+th+"db"+" "+"1-est") //ha csak 1 kell
                 break;

            case 2 :
         if (x-5*th == 0) {
             alert("szerezz"+" "+th+"db"+" "+"5-öst") //ha csak 5 kell
         }else{
             if(x-5*th > 0){
                 alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni 
             }else{
                if(Math.abs(x-5*th) > 5){
                    if (Math.abs(x-4*th) > 4) {
                        if (Math.abs(x-3*th) > 3) {
                            if (Math.abs(x-2*th) > 2) {
                                alert("Szerezz"+" "+Math.round((th-Math.abs(x-2*th)))+"db"+" "+"2-est"+ " "+"és"+" "+Math.round((Math.abs(x-2*th))) +"db"+" "+"1-est") // 2 és 1 kell
                            }
                        }else{
                            alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"3-ast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"2-est")  // 3 és vagy 2 kell 
                        }
                    }else{
                        alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"4-est"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"3-ast") //4 és vagy 3 kell
                    }
                }else{
                    alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"5-öst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"4-est") //5 és vagy 4 kell
                }
             }
         }
           case 3:
                if (x-5*th == 0) {
                    alert("szerezz"+" "+th+"db"+" "+"5-öst")  //ha csak 5 kell
                }else{
                    if(x-5*th > 0){
                      alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni   
                    }else{
                        if (Math.abs(x-5*th) > 5) {
                            if (Math.abs(x-4*th) > 4) {
                                if (Math.abs(x-3*th) > 3) {
                                    alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"3-ast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"2-est")  // 3 és vagy 2 kell  
                                }
                            }else{
                                alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"4-est"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"3-ast") //4 és vagy 3 kell  
                            }
                        }else{
                            alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"5-öst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"4-est") //5 és vagy 4 kell
                        }
                    }
                } 
         default:
                 break;
         }
         break;
//--------------------------------------------------------------------------------------------
    case 2:

        break;
//-----------------------------------------------------------------------------------------------
    case 3:

        break;
//------------------------------------------------------------------------------------------
    case 4:

        break;
 //------------------------------------------------------------------------------------------------

     default:
         alert("nem kell javítanod")
         break;
 }