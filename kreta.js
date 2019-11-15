var jegyek = Number(prompt("megszerzett jegyek összege") ); //megszerzett jegyek összege
var jsz = Number(prompt("jegyek száma"))    ;   //jegyek száma
var th = Number(prompt("mennyi jegyet tudsz szerezni?"))       ; //tűréshatár (mennyi jegy alatt akarja elérni)
var elak = Number(prompt("mit akarsz elérni?"))    ;  //az a jegy amit el akar érni


var atlag = jegyek/jsz;
var x = elak*jsz+elak*th-jegyek;
var j2 = th*5;
var j1 = jegyek+j2/jsz+th;

switch (atlag) {
    case 1:
            switch (Math.round(elak)) {
               case 1 :
                       alert("szerezz"+" "+th+"db"+" "+"eggyest") //ha csak 1 kell
                    break;
   
               case 2 :
            if (x-5*th == 0) {
                alert("szerezz"+" "+th+"db"+" "+"ötöst") //ha csak 5 kell
            }else{
                if(x-5*th > 0){
                    alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni 
                }else{
                   if(Math.abs(x-5*th) > 5){
                       if (Math.abs(x-4*th) > 5) {
                           if (Math.abs(x-3*th) > 5) {
                               if (Math.abs(x-2*th) > 5) {
                                   alert("Szerezz"+" "+Math.round((th-Math.abs(x-2*th)))+"db"+" "+"kettest"+ " "+"és"+" "+Math.round((Math.abs(x-2*th))) +"db"+" "+"egyest") // 2 és 1 kell
                               }
                           }else{
                               alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"hármast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"kettest")  // 3 és vagy 2 kell 
                           }
                       }else{
                           alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"négyest"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"hármast") //4 és vagy 3 kell
                       }
                   }else{
                       alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"ötöst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"négyest") //5 és vagy 4 kell
                   }
                }
            }
            break;
              case 3:
                   if (x-5*th == 0) {
                       alert("szerezz"+" "+th+"db"+" "+"ötöst")  //ha csak 5 kell
                   }else{
                       if(x-5*th > 0){
                         alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni   
                       }else{
                           if (Math.abs(x-5*th) > 5) {
                               if (Math.abs(x-4*th) > 5) {
                                   if (Math.abs(x-3*th) > 5) {
                                       alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"hármast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"kettest")  // 3 és vagy 2 kell  
                                   }
                               }else{
                                   alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"négyest"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"hármast") //4 és vagy 3 kell  
                               }
                           }else{
                               alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"ötöst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"négyest") //5 és vagy 4 kell
                           }
                       }
                   } 
               break;
               case 4: 
               if (x-5*th == 0) {
                   alert("szerezz"+" "+th+"db"+" "+"ötöst")  //ha csak 5 kell
               }else{
                   if(x-5*th > 0){
                     alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni   
                   }else{
                       if (Math.abs(x-5*th) > 5) {
                           if (Math.abs(x-4*th) > 5) {
                               if (Math.abs(x-3*th) > 5) {
                                   alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"hármast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"kettest")  // 3 és vagy 2 kell  
                               }
                           }else{
                               alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"négyest"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"hármast") //4 és vagy 3 kell  
                           }
                       }else{
                           alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"ötöst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"négyest") //5 és vagy 4 kell
                       }
                   }
               } 
               break;
               case 5:
                       if (x-5*th == 0) {
                           alert("szerezz"+" "+th+"db"+" "+"ötöst")  //ha csak 5 kell
                       }else{
                           if(x-5*th > 0){
                             alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni   
                           }else{
                               if (Math.abs(x-5*th) > 5) {
                                   if (Math.abs(x-4*th) > 5) {
                                       if (Math.abs(x-3*th) > 5) {
                                           alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"hármast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"kettest")  // 3 és vagy 2 kell  
                                       }
                                   }else{
                                       alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"négyest"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"hármast") //4 és vagy 3 kell  
                                   }
                               }else{
                                   alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"ötöst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"négyest") //5 és vagy 4 kell
                               }
                           }
                       } 
               break;
            default:
                alert("valamit nem jól adtál meg")
                    break;
            }
            break;
   //--------------------------------------------------------------------------------------------
       case 2:
            switch (Math.round(elak)) {
                case 1:
                   while(j1>elak){
   
                       j2=j2-1;
                       j1= (jegyek+j2)/(th+jsz);
                       }
                       if (j2-th<0) {
                         alert("nem lehet megcsinálni")
                       } else {
                         if (j2-th==0) {
                           console.log(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                         }else{
                           if (j2-5*th>0) {
                             alert("nem lehet megcsinálni");
                           } else {
                             if (j2-th > 5) {
                               if (j2-th*2 > 5) {
                                 if (j2-th*3 > 5) {
                                   if (j2-th*4 > 5) {
                                     alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                   }
                                     
                                   } else {
                                   alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                 }
                               } else {
                                 alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                               }
                             } else {
                               alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                             }
                           }
                         }
                       }
                    
                    break;
               case 2:
                    alert("szerezz"+" "+th+"db"+" "+"kettest")  //ha csak 2 kell)
                   break;
               case 3:
                   if (x-5*th == 0) {
                       alert("szerezz"+" "+th+"db"+" "+"ötöst") //ha csak 5 kell
                   }else{
                       if(x-5*th > 0){
                           alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni 
                       }else{
                          if(Math.abs(x-5*th) > 5){
                              if (Math.abs(x-4*th) > 5) {
                                  if (Math.abs(x-3*th) > 5) {
                                      if (Math.abs(x-2*th) > 5) {
                                          alert("Szerezz"+" "+Math.round((th-Math.abs(x-2*th)))+"db"+" "+"kettest"+ " "+"és"+" "+Math.round((Math.abs(x-2*th))) +"db"+" "+"egyest") // 2 és 1 kell
                                      }
                                  }else{
                                      alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"hármast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"kettest")  // 3 és vagy 2 kell 
                                  }
                              }else{
                                  alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"négyest"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"hármast") //4 és vagy 3 kell
                              }
                          }else{
                              alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"ötöst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"négyest") //5 és vagy 4 kell
                          }
                       }
                   }
                    break;
               case 4:
                   if (x-5*th == 0) {
                       alert("szerezz"+" "+th+"db"+" "+"ötöst") //ha csak 5 kell
                   }else{
                       if(x-5*th > 0){
                           alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni 
                       }else{
                          if(Math.abs(x-5*th) > 5){
                              if (Math.abs(x-4*th) > 5) {
                                  if (Math.abs(x-3*th) > 5) {
                                      if (Math.abs(x-2*th) > 5) {
                                          alert("Szerezz"+" "+Math.round((th-Math.abs(x-2*th)))+"db"+" "+"kettest"+ " "+"és"+" "+Math.round((Math.abs(x-2*th))) +"db"+" "+"egyest") // 2 és 1 kell
                                      }
                                  }else{
                                      alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"hármast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"kettest")  // 3 és vagy 2 kell 
                                  }
                              }else{
                                  alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"négyest"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"hármast") //4 és vagy 3 kell
                              }
                          }else{
                              alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"ötöst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"négyest") //5 és vagy 4 kell
                          }
                       }
                   }
                   break;
               case 5:
                   if (x-5*th == 0) {
                       alert("szerezz"+" "+th+"db"+" "+"ötöst") //ha csak 5 kell
                   }else{
                       if(x-5*th > 0){
                           alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni 
                       }else{
                          if(Math.abs(x-5*th) > 5){
                              if (Math.abs(x-4*th) > 5) {
                                  if (Math.abs(x-3*th) > 5) {
                                      if (Math.abs(x-2*th) > 5) {
                                          alert("Szerezz"+" "+Math.round((th-Math.abs(x-2*th)))+"db"+" "+"kettest"+ " "+"és"+" "+Math.round((Math.abs(x-2*th))) +"db"+" "+"egyest") // 2 és 1 kell
                                      }
                                  }else{
                                      alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"hármast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"kettest")  // 3 és vagy 2 kell 
                                  }
                              }else{
                                  alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"négyest"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"hármast") //4 és vagy 3 kell
                              }
                          }else{
                              alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"ötöst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"négyest") //5 és vagy 4 kell
                          }
                       }
                   }
                   break;
                default:
                    alert("valalmit nem adtál meg jól")
                    break;
            }
           break;
   //-----------------------------------------------------------------------------------------------
       case 3:
            switch (Math.round(elak)) {
                case 1:
                       while(j1>elak){
   
                           j2=j2-1;
                           j1= (jegyek+j2)/(th+jsz);
                           }
                           if (j2-th<0) {
                             alert("nem lehet megcsinálni")
                           } else {
                             if (j2-th==0) {
                               alert(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                             }else{
                               if (j2-5*th>0) {
                                 alert("nem lehet megcsinálni");
                               } else {
                                 if (j2-th > 5) {
                                   if (j2-th*2 > 5) {
                                     if (j2-th*3 > 5) {
                                       if (j2-th*4 > 5) {
                                         alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                       }
                                         
                                       } else {
                                       alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                     }
                                   } else {
                                     alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                                   }
                                 } else {
                                   alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                                 }
                               }
                             }
                           }
                    break;
               case 2:
                       while(j1>elak){
   
                           j2=j2-1;
                           j1= (jegyek+j2)/(th+jsz);
                           }
                           if (j2-th<0) {
                             alert("nem lehet megcsinálni")
                           } else {
                             if (j2-th==0) {
                               alert(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                             }else{
                               if (j2-5*th>0) {
                                 alert("nem lehet megcsinálni");
                               } else {
                                 if (j2-th > 5) {
                                   if (j2-th*2 > 5) {
                                     if (j2-th*3 > 5) {
                                       if (j2-th*4 > 5) {
                                         alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                       }
                                         
                                       } else {
                                       alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                     }
                                   } else {
                                     alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                                   }
                                 } else {
                                   alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                                 }
                               }
                             }
                           }
                   break;
               case 3:
                       while(j1>elak){
   
                           j2=j2-1;
                           j1= (jegyek+j2)/(th+jsz);
                           }
                           if (j2-th<0) {
                             alert("nem lehet megcsinálni")
                           } else {
                             if (j2-th==0) {
                               alert(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                             }else{
                               if (j2-5*th>0) {
                                 alert("nem lehet megcsinálni");
                               } else {
                                 if (j2-th > 5) {
                                   if (j2-th*2 > 5) {
                                     if (j2-th*3 > 5) {
                                       if (j2-th*4 > 5) {
                                         alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                       }
                                         
                                       } else {
                                       alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                     }
                                   } else {
                                     alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                                   }
                                 } else {
                                   alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                                 }
                               }
                             }
                           }
                   break;
               case 4:
                       if (x-5*th == 0) {
                           alert("szerezz"+" "+th+"db"+" "+"ötöst")  //ha csak 5 kell
                       }else{
                           if(x-5*th > 0){
                             alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni   
                           }else{
                               if (Math.abs(x-5*th) > 5) {
                                   if (Math.abs(x-4*th) > 5) {
                                       if (Math.abs(x-3*th) > 5) {
                                           alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"hármast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"kettest")  // 3 és vagy 2 kell  
                                       }
                                   }else{
                                       alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"négyest"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"hármast") //4 és vagy 3 kell  
                                   }
                               }else{
                                   alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"ötöst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"négyest") //5 és vagy 4 kell
                               }
                           }
                       } 
                   break;
               case 5: 
               if (x-5*th == 0) {
                   alert("szerezz"+" "+th+"db"+" "+"ötöst")  //ha csak 5 kell
               }else{
                   if(x-5*th > 0){
                     alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni   
                   }else{
                       if (Math.abs(x-5*th) > 5) {
                           if (Math.abs(x-4*th) > 5) {
                               if (Math.abs(x-3*th) > 5) {
                                   alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"hármast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"kettest")  // 3 és vagy 2 kell  
                               }
                           }else{
                               alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"négyest"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"hármast") //4 és vagy 3 kell  
                           }
                       }else{
                           alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"ötöst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"négyest") //5 és vagy 4 kell
                       }
                   }
               } 
                   break;
               default:
                   alert("valamit nem adtál meg jól")
                    break;
            }
           break;
   //------------------------------------------------------------------------------------------
       case 4:
           switch (Math.round(elak)) {
            case 1:
                    while(j1>elak){

                        j2=j2-1;
                        j1= (jegyek+j2)/(th+jsz);
                        }
                        if (j2-th<0) {
                          alert("nem lehet megcsinálni")
                        } else {
                          if (j2-th==0) {
                            console.log(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                          }else{
                            if (j2-5*th>0) {
                              alert("nem lehet megcsinálni");
                            } else {
                              if (j2-th > 5) {
                                if (j2-th*2 > 5) {
                                  if (j2-th*3 > 5) {
                                    if (j2-th*4 > 5) {
                                      alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                    }
                                      
                                    } else {
                                    alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                  }
                                } else {
                                  alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                                }
                              } else {
                                alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                              }
                            }
                          }
                        }
                break;
            case 2:
                    while(j1>elak){

                        j2=j2-1;
                        j1= (jegyek+j2)/(th+jsz);
                        }
                        if (j2-th<0) {
                          alert("nem lehet megcsinálni")
                        } else {
                          if (j2-th==0) {
                            console.log(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                          }else{
                            if (j2-5*th>0) {
                              alert("nem lehet megcsinálni");
                            } else {
                              if (j2-th > 5) {
                                if (j2-th*2 > 5) {
                                  if (j2-th*3 > 5) {
                                    if (j2-th*4 > 5) {
                                      alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                    }
                                      
                                    } else {
                                    alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                  }
                                } else {
                                  alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                                }
                              } else {
                                alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                              }
                            }
                          }
                        }
                break
            case 3 :
                    while(j1>elak){

                        j2=j2-1;
                        j1= (jegyek+j2)/(th+jsz);
                        }
                        if (j2-th<0) {
                          alert("nem lehet megcsinálni")
                        } else {
                          if (j2-th==0) {
                            console.log(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                          }else{
                            if (j2-5*th>0) {
                              alert("nem lehet megcsinálni");
                            } else {
                              if (j2-th > 5) {
                                if (j2-th*2 > 5) {
                                  if (j2-th*3 > 5) {
                                    if (j2-th*4 > 5) {
                                      alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                    }
                                      
                                    } else {
                                    alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                  }
                                } else {
                                  alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                                }
                              } else {
                                alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                              }
                            }
                          }
                        } 
                break;
            case 4:
                        alert(Math.round(th)+"db"+" "+"négyes kell")
                break
            case 5:
                    if (x-5*th == 0) {
                        alert("szerezz"+" "+th+"db"+" "+"ötöst") //ha csak 5 kell
                    }else{
                        if(x-5*th > 0){
                            alert("nem lehet megcsinálni")       //ha nem lehet megcsinálni 
                        }else{
                           if(Math.abs(x-5*th) > 5){
                               if (Math.abs(x-4*th) > 5) {
                                   if (Math.abs(x-3*th) > 5) {
                                       if (Math.abs(x-2*th) > 5) {
                                           alert("Szerezz"+" "+Math.round((th-Math.abs(x-2*th)))+"db"+" "+"kettest"+ " "+"és"+" "+Math.round((Math.abs(x-2*th))) +"db"+" "+"egyest") // 2 és 1 kell
                                       }
                                   }else{
                                       alert("Szerezz"+" "+Math.round((th-Math.abs(x-3*th)))+"db"+" "+"hármast"+ " "+"és"+" "+Math.round((Math.abs(x-3*th))) +"db"+" "+"kettest")  // 3 és vagy 2 kell 
                                   }
                               }else{
                                   alert("Szerezz"+" "+Math.round((th-Math.abs(x-4*th)))+"db"+" "+"négyest"+ " "+"és"+" "+Math.round((Math.abs(x-4*th))) +"db"+" "+"hármast") //4 és vagy 3 kell
                               }
                           }else{
                               alert("Szerezz"+" "+Math.round((th-Math.abs(x-5*th)))+"db"+" "+"ötöst"+ " "+"és"+" "+Math.round((Math.abs(x-5*th))) +"db"+" "+"négyest") //5 és vagy 4 kell
                           }
                        }
                    }
        break;
           }
              
    //------------------------------------------------------------------------------------------------
       case 5:
               switch (Math.round(elak)) {
                   case 1:
                           while(j1>elak){
   
                               j2=j2-1;
                               j1= (jegyek+j2)/(th+jsz);
                               }
                               if (j2-th<0) {
                                 alert("nem lehet megcsinálni")
                               } else {
                                 if (j2-th==0) {
                                   console.log(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                                 }else{
                                   if (j2-5*th>0) {
                                     alert("nem lehet megcsinálni");
                                   } else {
                                     if (j2-th > 5) {
                                       if (j2-th*2 > 5) {
                                         if (j2-th*3 > 5) {
                                           if (j2-th*4 > 5) {
                                             alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                           }
                                             
                                           } else {
                                           alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                         }
                                       } else {
                                         alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                                       }
                                     } else {
                                       alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                                     }
                                   }
                                 }
                               }
                       break;
                   case 2:
                           while(j1>elak){
   
                               j2=j2-1;
                               j1= (jegyek+j2)/(th+jsz);
                               }
                               if (j2-th<0) {
                                 alert("nem lehet megcsinálni")
                               } else {
                                 if (j2-th==0) {
                                   console.log(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                                 }else{
                                   if (j2-5*th>0) {
                                     alert("nem lehet megcsinálni");
                                   } else {
                                     if (j2-th > 5) {
                                       if (j2-th*2 > 5) {
                                         if (j2-th*3 > 5) {
                                           if (j2-th*4 > 5) {
                                             alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                           }
                                             
                                           } else {
                                           alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                         }
                                       } else {
                                         alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                                       }
                                     } else {
                                       alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                                     }
                                   }
                                 }
                               }
                       break
                   case 3 :
                           while(j1>elak){
   
                               j2=j2-1;
                               j1= (jegyek+j2)/(th+jsz);
                               }
                               if (j2-th<0) {
                                 alert("nem lehet megcsinálni")
                               } else {
                                 if (j2-th==0) {
                                   console.log(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                                 }else{
                                   if (j2-5*th>0) {
                                     alert("nem lehet megcsinálni");
                                   } else {
                                     if (j2-th > 5) {
                                       if (j2-th*2 > 5) {
                                         if (j2-th*3 > 5) {
                                           if (j2-th*4 > 5) {
                                             alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                           }
                                             
                                           } else {
                                           alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                         }
                                       } else {
                                         alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                                       }
                                     } else {
                                       alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                                     }
                                   }
                                 }
                               }
                       break;
                   case 4:
                           while(j1>elak){
   
                               j2=j2-1;
                               j1= (jegyek+j2)/(th+jsz);
                               }
                               if (j2-th<0) {
                                 alert("nem lehet megcsinálni")
                               } else {
                                 if (j2-th==0) {
                                   console.log(Math.round(th)+"db"+" "+"egyes"+" "+"kell")
                                 }else{
                                   if (j2-5*th>0) {
                                     alert("nem lehet megcsinálni");
                                   } else {
                                     if (j2-th > 5) {
                                       if (j2-th*2 > 5) {
                                         if (j2-th*3 > 5) {
                                           if (j2-th*4 > 5) {
                                             alert(Math.round(th-(j2-4*th))+"db"+" "+"négyes"+" "+"és"+" "+Math.round(j2-4*th)+" "+"ötös");// 4 5 
                                           }
                                             
                                           } else {
                                           alert(Math.round(th-(j2-3*th))+"db"+" "+"hármas"+" "+"és"+" "+Math.round(j2-3*th)+" "+"négyes");// 3 4
                                         }
                                       } else {
                                         alert(Math.round(th-(j2-2*th))+"db"+" "+"kettes"+" "+"és"+" "+Math.round(j2-2*th)+" "+"hármas");//2 3 
                                       }
                                     } else {
                                       alert(Math.round(th-(j2-th))+"db"+" "+"egyes"+" "+"és"+" "+Math.round(j2-th)+" "+"kettes"); //1 2 
                                     }
                                   }
                                 }
                               }
                       break
                   case 5:
                               alert(Math.round(th)+"db"+" "+"ötös kell")
                       break;
                   
                   default:
                       alert("valamit nem adtál meg jól")
                       break;
               }
   
       break;
    //-----------------------------------------------------------------------------------------
    default:
            alert("valamit nem jól adtál meg")
            break;
}