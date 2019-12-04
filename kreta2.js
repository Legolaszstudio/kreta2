function getVars(){
    let jegyek = Number(document.getElementsByName("sum")[0].value);
    let jegyekSzama = Number(document.getElementsByName("count")[0].value);
    let turesHatar = Number(document.getElementsByName("th")[0].value);
    let eler = Number(document.getElementsByName("reach")[0].value);
    buttonClick(jegyek,jegyekSzama,turesHatar,eler);
}

function setText(input){
    let output = document.getElementById("outputDialog");
    output.innerText = capitalizeFirstLetter(input);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function buttonClick(jegyek,jsz,th,elak) {
    var atlag = jegyek / jsz; //átlag
    var x = elak * jsz + elak * th - jegyek; //mennyi jegyet kell hozzáadni, hogy elérjük az adottátlagot
    var j2 = th * 5; // rontásnál mennyi jegyet kell hozzáadni, hogy elérjük az adottátlagot
    var j1 = jegyek + j2 / jsz + th; // az átlag amit a rontásnál számolunk
    if(Number.isInteger(x)== false){
        x= Math.round(x);
    }

    switch (Math.round(atlag)) {
        case 1:
            switch (Math.round(elak)) {
                case 1:
                    if (elak < atlag) {
                        while (j1 > elak) {

                            while (j1 > elak) {

                                j2 = j2 - 1;
                                j1 = (jegyek + j2) / (th + jsz);
                            }
                            if (j2 - th < 0) {
                                setText("nem lehet megcsinálni")
                            } else {
                                if (j2 - th == 0) {
                                    setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                                } else {
                                    if (j2 - 5 * th > 0) {
                                        setText("nem lehet megcsinálni");
                                    } else {
                                        if (j2 - th > 5) {
                                            if (j2 - th * 2 > 5) {
                                                if (j2 - th * 3 > 5) {
                                                    if (j2 - th * 4 > 5) {
                                                        setText(Math.round(th - (j2 - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + Math.round(j2 - 4 * th) + " " + "ötös"); // 4 5 
                                                    }

                                                } else {
                                                    setText(Math.round(th - (j2 - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + Math.round(j2 - 3 * th) + " " + "négyes"); // 3 4
                                                }
                                            } else {
                                                setText(Math.round(th - (j2 - 2 * th)) + "db" + " " + "kettes" + " " + "és" + " " + Math.round(j2 - 2 * th) + " " + "hármas"); //2 3 
                                            }
                                        } else {
                                            setText(Math.round(th - (j2 - th)) + "db" + " " + "egyes" + " " + "és" + " " + Math.round(j2 - th) + " " + "kettes"); //1 2 
                                        }
                                    }
                                }
                            }

                        }

                    } else {
                        if (elak == atlag) {
                            setText("szerezz" + " " + String(th) + "db" + " " + "egyest");
                        } else {
                            if (x - 5 * th == 0) {
                                setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                            } else {
                                if (x - 5 * th > 0) {
                                    setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                                } else {
                                    if ((x - 5 * th) > th) {
                                        if ((x - 4 * th) > th) {
                                            if ((x - 3 * th) > th) {
                                                if ((x - 2 * th) > th) {
                                                    if (x - 2 * th < 0) {
                                                        setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                                    } else {
                                                        setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                                    }

                                                }
                                            } else {
                                                if (x - 3 * th < 0) {
                                                    setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                                } else {
                                                    setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                                }
                                            }
                                        } else {
                                            if (x - 4 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                            }

                                        }
                                    } else {
                                        if (x - 5 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                        }

                                    }
                                }
                            }

                        }


                    }

                    break;

                case 2:
                    if (x - 5 * th == 0) {
                        setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                    } else {
                        if (x - 5 * th > 0) {
                            setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                        } else {
                            if ((x - 5 * th) > th) {
                                if ((x - 4 * th) > th) {
                                    if ((x - 3 * th) > th) {
                                        if ((x - 2 * th) > th) {
                                            if (x - 2 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                            }

                                        }
                                    } else {
                                        if (x - 3 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                        }
                                    }
                                } else {
                                    if (x - 4 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    }

                                }
                            } else {
                                if (x - 5 * th < 0) {
                                    setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                } else {
                                    setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                }

                            }
                        }
                    }


                    break;
                case 3:
                    if (x - 5 * th == 0) {
                        setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                    } else {
                        if (x - 5 * th > 0) {
                            setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                        } else {
                            if ((x - 5 * th) > th) {
                                if ((x - 4 * th) > th) {
                                    if ((x - 3 * th) > th) {
                                        if ((x - 2 * th) > th) {
                                            if (x - 2 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes"); //2 1 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                            }

                                        }
                                    } else {
                                        if (x - 3 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes"); //3 2 
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes"); // 3 2 
                                        }
                                    }
                                } else {
                                    if (x - 4 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas"); //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas"); //5 és vagy 4 kell
                                    }

                                }
                            } else {
                                if (x - 5 * th < 0) {
                                    setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest"); //5 és vagy 4 kell
                                } else {
                                    setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest"); //5 és vagy 4 kell
                                }

                            }
                        }
                    }



                    break;
                case 4:
                    if (x - 5 * th == 0) {
                        setText("szerezz" + " " + th + "db" + " " + "ötöst"); //ha csak 5 kell
                    } else {
                        if (x - 5 * th > 0) {
                            setText("nem lehet megcsinálni"); //ha nem lehet megcsinálni 
                        } else {
                            if ((x - 5 * th) > th) {
                                if ((x - 4 * th) > th) {
                                    if ((x - 3 * th) > th) {
                                        if ((x - 2 * th) > th) {
                                            if (x - 2 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes"); //2 1 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes"); // 2 1  
                                            }

                                        }
                                    } else {
                                        if (x - 3 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes"); //3 2 
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes"); // 3 2 
                                        }
                                    }
                                } else {
                                    if (x - 4 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas"); //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas"); //5 és vagy 4 kell
                                    }

                                }
                            } else {
                                if (x - 5 * th < 0) {
                                    setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest"); //5 és vagy 4 kell
                                } else {
                                    setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest"); //5 és vagy 4 kell
                                }

                            }
                        }
                    }



                    break;
                case 5:
                    if (x - 5 * th == 0) {
                        setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                    } else {
                        if (x - 5 * th > 0) {
                            setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                        } else {
                            if ((x - 5 * th) > th) {
                                if ((x - 4 * th) > th) {
                                    if ((x - 3 * th) > th) {
                                        if ((x - 2 * th) > th) {
                                            if (x - 2 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                            }

                                        }
                                    } else {
                                        if (x - 3 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                        }
                                    }
                                } else {
                                    if (x - 4 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    }

                                }
                            } else {
                                if (x - 5 * th < 0) {
                                    setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                } else {
                                    setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                }

                            }
                        }
                    }



                    break;
                default:
                    setText("valamit nem jól adtál meg")
                    break;
            }
            break;
            //--------------------------------------------------------------------------------------------
        case 2:
            switch (Math.round(elak)) {
                case 1:
                    while (j1 > elak) {

                        j2 = j2 - 1;
                        j1 = (jegyek + j2) / (th + jsz);
                    }
                    if (j2 - th < 0) {
                        setText("nem lehet megcsinálni")
                    } else {
                        if (j2 - th == 0) {
                            setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                        } else {
                            if (j2 - 5 * th > 0) {
                                setText("nem lehet megcsinálni");
                            } else {
                                if (j2 - th > th) {
                                    if (j2 - th * 2 > th) {
                                        if (j2 - th * 3 > th) {
                                            if (j2 - th * 4 > th) {

                                                if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                }
                                            }
                                            //----------------------------------------------------------------------------------------------------------------------------------------                
                                        } else {
                                            if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                            }
                                        }
                                        //--------------------------------------------------------------------------------------------------------------------------------            
                                    } else {
                                        if (Math.round(th - (j2 - 2 * th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                        } else {
                                            setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                        }
                                    }
                                    //-------------------------------------------------------------------------------------------------------------------------------
                                } else {
                                    if (Math.round(th - (j2 - th)) < 0) {
                                        setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                    } else {
                                        setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                    }
                                }
                            }
                        }
                    }

                    break;
                case 2:
                    if (elak == atlag) {
                        setText("szerezz" + " " + String(th) + "db" + " " + "kettest");
                    } else {
                        if (elak < atlag) {

                            while (j1 > elak) {

                                j2 = j2 - 1;
                                j1 = (jegyek + j2) / (th + jsz);
                            }
                            while (j1 > elak) {

                                j2 = j2 - 1;
                                j1 = (jegyek + j2) / (th + jsz);
                            }
                            if (j2 - th < 0) {
                                setText("nem lehet megcsinálni")
                            } else {
                                if (j2 - th == 0) {
                                    setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                                } else {
                                    if (j2 - 5 * th > 0) {
                                        setText("nem lehet megcsinálni");
                                    } else {
                                        if (j2 - th > th) {
                                            if (j2 - th * 2 > th) {
                                                if (j2 - th * 3 > th) {
                                                    if (j2 - th * 4 > th) {

                                                        if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                            setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                        } else {
                                                            setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                        }
                                                    }
                                                    //----------------------------------------------------------------------------------------------------------------------------------------                
                                                } else {
                                                    if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                        setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                                    } else {
                                                        setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                                    }
                                                }
                                                //--------------------------------------------------------------------------------------------------------------------------------            
                                            } else {
                                                if (Math.round(th - (j2 - 2 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                                }
                                            }
                                            //-------------------------------------------------------------------------------------------------------------------------------
                                        } else {
                                            if (Math.round(th - (j2 - th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                            }
                                        }
                                    }
                                }
                            }


                        } else {
                            if (x - 5 * th == 0) {
                                setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                            } else {
                                if (x - 5 * th > 0) {
                                    setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                                } else {
                                    if ((x - 5 * th) > th) {
                                        if ((x - 4 * th) > th) {
                                            if ((x - 3 * th) > th) {
                                                if ((x - 2 * th) > th) {
                                                    if (x - 2 * th < 0) {
                                                        setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                                    } else {
                                                        setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                                    }

                                                }
                                            } else {
                                                if (x - 3 * th < 0) {
                                                    setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                                } else {
                                                    setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                                }
                                            }
                                        } else {
                                            if (x - 4 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                            }

                                        }
                                    } else {
                                        if (x - 5 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                        }

                                    }
                                }
                            }

                        }

                    }

                    break;
                case 3:
                    if (x - 5 * th == 0) {
                        setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                    } else {
                        if (x - 5 * th > 0) {
                            setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                        } else {
                            if ((x - 5 * th) > th) {
                                if ((x - 4 * th) > th) {
                                    if ((x - 3 * th) > th) {
                                        if ((x - 2 * th) > th) {
                                            if (x - 2 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                            }

                                        }
                                    } else {
                                        if (x - 3 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                        }
                                    }
                                } else {
                                    if (x - 4 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    }

                                }
                            } else {
                                if (x - 5 * th < 0) {
                                    setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                } else {
                                    setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                }

                            }
                        }
                    }




                    break;
                case 4:
                    if (x - 5 * th == 0) {
                        setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                    } else {
                        if (x - 5 * th > 0) {
                            setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                        } else {
                            if ((x - 5 * th) > th) {
                                if ((x - 4 * th) > th) {
                                    if ((x - 3 * th) > th) {
                                        if ((x - 2 * th) > th) {
                                            if (x - 2 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                            }

                                        }
                                    } else {
                                        if (x - 3 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                        }
                                    }
                                } else {
                                    if (x - 4 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    }

                                }
                            } else {
                                if (x - 5 * th < 0) {
                                    setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                } else {
                                    setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                }

                            }
                        }
                    }


                    break;
                case 5:
                    if (x - 5 * th == 0) {
                        setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                    } else {
                        if (x - 5 * th > 0) {
                            setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                        } else {
                            if ((x - 5 * th) > th) {
                                if ((x - 4 * th) > th) {
                                    if ((x - 3 * th) > th) {
                                        if ((x - 2 * th) > th) {
                                            if (x - 2 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                            }

                                        }
                                    } else {
                                        if (x - 3 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                        }
                                    }
                                } else {
                                    if (x - 4 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    }

                                }
                            } else {
                                if (x - 5 * th < 0) {
                                    setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                } else {
                                    setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                }

                            }
                        }
                    }


                    break;
                default:
                    setText("valalmit nem adtál meg jól")
                    break;
            }
            break;
            //-----------------------------------------------------------------------------------------------
        case 3:
            switch (Math.round(elak)) {
                case 1:
                    while (j1 > elak) {

                        j2 = j2 - 1;
                        j1 = (jegyek + j2) / (th + jsz);
                    }
                    if (j2 - th < 0) {
                        setText("nem lehet megcsinálni")
                    } else {
                        if (j2 - th == 0) {
                            setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                        } else {
                            if (j2 - 5 * th > 0) {
                                setText("nem lehet megcsinálni");
                            } else {
                                if (j2 - th > th) {
                                    if (j2 - th * 2 > th) {
                                        if (j2 - th * 3 > th) {
                                            if (j2 - th * 4 > th) {

                                                if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                }
                                            }
                                            //----------------------------------------------------------------------------------------------------------------------------------------                
                                        } else {
                                            if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                            }
                                        }
                                        //--------------------------------------------------------------------------------------------------------------------------------            
                                    } else {
                                        if (Math.round(th - (j2 - 2 * th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                        } else {
                                            setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                        }
                                    }
                                    //-------------------------------------------------------------------------------------------------------------------------------
                                } else {
                                    if (Math.round(th - (j2 - th)) < 0) {
                                        setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                    } else {
                                        setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                    }
                                }
                            }
                        }
                    }

                    break;
                case 2:
                    while (j1 > elak) {

                        j2 = j2 - 1;
                        j1 = (jegyek + j2) / (th + jsz);
                    }
                    if (j2 - th < 0) {
                        setText("nem lehet megcsinálni")
                    } else {
                        if (j2 - th == 0) {
                            setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                        } else {
                            if (j2 - 5 * th > 0) {
                                setText("nem lehet megcsinálni");
                            } else {
                                if (j2 - th > th) {
                                    if (j2 - th * 2 > th) {
                                        if (j2 - th * 3 > th) {
                                            if (j2 - th * 4 > th) {

                                                if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                }
                                            }
                                            //----------------------------------------------------------------------------------------------------------------------------------------                
                                        } else {
                                            if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                            }
                                        }
                                        //--------------------------------------------------------------------------------------------------------------------------------            
                                    } else {
                                        if (Math.round(th - (j2 - 2 * th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                        } else {
                                            setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                        }
                                    }
                                    //-------------------------------------------------------------------------------------------------------------------------------
                                } else {
                                    if (Math.round(th - (j2 - th)) < 0) {
                                        setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                    } else {
                                        setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                    }
                                }
                            }
                        }
                    }

                    break;
                case 3:
                    if (elak == atlag) {
                        setText("szerezz" + " " + String(th) + "db" + " " + "hármast");
                    } else {
                        if (elak < atlag) {


                            while (j1 > elak) {

                                j2 = j2 - 1;
                                j1 = (jegyek + j2) / (th + jsz);
                            }
                            if (j2 - th < 0) {
                                setText("nem lehet megcsinálni")
                            } else {
                                if (j2 - th == 0) {
                                    setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                                } else {
                                    if (j2 - 5 * th > 0) {
                                        setText("nem lehet megcsinálni");
                                    } else {
                                        if (j2 - th > th) {
                                            if (j2 - th * 2 > th) {
                                                if (j2 - th * 3 > th) {
                                                    if (j2 - th * 4 > th) {

                                                        if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                            setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                        } else {
                                                            setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                        }
                                                    }
                                                    //----------------------------------------------------------------------------------------------------------------------------------------                
                                                } else {
                                                    if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                        setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                                    } else {
                                                        setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                                    }
                                                }
                                                //--------------------------------------------------------------------------------------------------------------------------------            
                                            } else {
                                                if (Math.round(th - (j2 - 2 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                                }
                                            }
                                            //-------------------------------------------------------------------------------------------------------------------------------
                                        } else {
                                            if (Math.round(th - (j2 - th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                            }
                                        }
                                    }
                                }
                            }

                        } else {
                            if (x - 5 * th == 0) {
                                setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                            } else {
                                if (x - 5 * th > 0) {
                                    setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                                } else {
                                    if ((x - 5 * th) > th) {
                                        if ((x - 4 * th) > th) {
                                            if ((x - 3 * th) > th) {
                                                if ((x - 2 * th) > th) {
                                                    if (x - 2 * th < 0) {
                                                        setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                                    } else {
                                                        setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                                    }

                                                }
                                            } else {
                                                if (x - 3 * th < 0) {
                                                    setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                                } else {
                                                    setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                                }
                                            }
                                        } else {
                                            if (x - 4 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                            }

                                        }
                                    } else {
                                        if (x - 5 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                        }

                                    }
                                }
                            }

                        }


                    }

                    break;
                case 4:
                    if (x - 5 * th == 0) {
                        setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                    } else {
                        if (x - 5 * th > 0) {
                            setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                        } else {
                            if ((x - 5 * th) > th) {
                                if ((x - 4 * th) > th) {
                                    if ((x - 3 * th) > th) {
                                        if ((x - 2 * th) > th) {
                                            if (x - 2 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                            }

                                        }
                                    } else {
                                        if (x - 3 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                        }
                                    }
                                } else {
                                    if (x - 4 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    }

                                }
                            } else {
                                if (x - 5 * th < 0) {
                                    setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                } else {
                                    setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                }

                            }
                        }
                    }


                    break;
                case 5:
                    if (x - 5 * th == 0) {
                        setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                    } else {
                        if (x - 5 * th > 0) {
                            setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                        } else {
                            if ((x - 5 * th) > th) {
                                if ((x - 4 * th) > th) {
                                    if ((x - 3 * th) > th) {
                                        if ((x - 2 * th) > th) {
                                            if (x - 2 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                            }

                                        }
                                    } else {
                                        if (x - 3 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                        }
                                    }
                                } else {
                                    if (x - 4 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    }

                                }
                            } else {
                                if (x - 5 * th < 0) {
                                    setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                } else {
                                    setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                }

                            }
                        }
                    }




                    break;
                default:
                    setText("valamit nem adtál meg jól")
                    break;
            }
            break;
            //------------------------------------------------------------------------------------------
        case 4:
            switch (Math.round(elak)) {
                case 1:
                    while (j1 > elak) {

                        j2 = j2 - 1;
                        j1 = (jegyek + j2) / (th + jsz);
                    }
                    if (j2 - th < 0) {
                        setText("nem lehet megcsinálni")
                    } else {
                        if (j2 - th == 0) {
                            setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                        } else {
                            if (j2 - 5 * th > 0) {
                                setText("nem lehet megcsinálni");
                            } else {
                                if (j2 - th > th) {
                                    if (j2 - th * 2 > th) {
                                        if (j2 - th * 3 > th) {
                                            if (j2 - th * 4 > th) {

                                                if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                }
                                            }
                                            //----------------------------------------------------------------------------------------------------------------------------------------                
                                        } else {
                                            if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                            }
                                        }
                                        //--------------------------------------------------------------------------------------------------------------------------------            
                                    } else {
                                        if (Math.round(th - (j2 - 2 * th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                        } else {
                                            setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                        }
                                    }
                                    //-------------------------------------------------------------------------------------------------------------------------------
                                } else {
                                    if (Math.round(th - (j2 - th)) < 0) {
                                        setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                    } else {
                                        setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                    }
                                }
                            }
                        }
                    }

                    break;
                case 2:
                    while (j1 > elak) {

                        j2 = j2 - 1;
                        j1 = (jegyek + j2) / (th + jsz);
                    }
                    if (j2 - th < 0) {
                        setText("nem lehet megcsinálni")
                    } else {
                        if (j2 - th == 0) {
                            setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                        } else {
                            if (j2 - 5 * th > 0) {
                                setText("nem lehet megcsinálni");
                            } else {
                                if (j2 - th > th) {
                                    if (j2 - th * 2 > th) {
                                        if (j2 - th * 3 > th) {
                                            if (j2 - th * 4 > th) {

                                                if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                }
                                            }
                                            //----------------------------------------------------------------------------------------------------------------------------------------                
                                        } else {
                                            if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                            }
                                        }
                                        //--------------------------------------------------------------------------------------------------------------------------------            
                                    } else {
                                        if (Math.round(th - (j2 - 2 * th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                        } else {
                                            setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                        }
                                    }
                                    //-------------------------------------------------------------------------------------------------------------------------------
                                } else {
                                    if (Math.round(th - (j2 - th)) < 0) {
                                        setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                    } else {
                                        setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                    }
                                }
                            }
                        }
                    }

                    break;
                case 3:
                    while (j1 > elak) {

                        j2 = j2 - 1;
                        j1 = (jegyek + j2) / (th + jsz);
                    }
                    if (j2 - th < 0) {
                        setText("nem lehet megcsinálni")
                    } else {
                        if (j2 - th == 0) {
                            setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                        } else {
                            if (j2 - 5 * th > 0) {
                                setText("nem lehet megcsinálni");
                            } else {
                                if (j2 - th > th) {
                                    if (j2 - th * 2 > th) {
                                        if (j2 - th * 3 > th) {
                                            if (j2 - th * 4 > th) {

                                                if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                }
                                            }
                                            //----------------------------------------------------------------------------------------------------------------------------------------                
                                        } else {
                                            if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                            }
                                        }
                                        //--------------------------------------------------------------------------------------------------------------------------------            
                                    } else {
                                        if (Math.round(th - (j2 - 2 * th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                        } else {
                                            setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                        }
                                    }
                                    //-------------------------------------------------------------------------------------------------------------------------------
                                } else {
                                    if (Math.round(th - (j2 - th)) < 0) {
                                        setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                    } else {
                                        setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                    }
                                }
                            }
                        }
                    }

                    break;
                case 4:
                    if (elak == atlag) {
                        setText("szerezz" + " " + String(th) + "db" + " " + "négyest");
                    } else {
                        if (elak < atlag) {


                            while (j1 > elak) {

                                j2 = j2 - 1;
                                j1 = (jegyek + j2) / (th + jsz);
                            }
                            if (j2 - th < 0) {
                                setText("nem lehet megcsinálni")
                            } else {
                                if (j2 - th == 0) {
                                    setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                                } else {
                                    if (j2 - 5 * th > 0) {
                                        setText("nem lehet megcsinálni");
                                    } else {
                                        if (j2 - th > th) {
                                            if (j2 - th * 2 > th) {
                                                if (j2 - th * 3 > th) {
                                                    if (j2 - th * 4 > th) {

                                                        if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                            setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                        } else {
                                                            setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                        }
                                                    }
                                                    //----------------------------------------------------------------------------------------------------------------------------------------                
                                                } else {
                                                    if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                        setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                                    } else {
                                                        setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                                    }
                                                }
                                                //--------------------------------------------------------------------------------------------------------------------------------            
                                            } else {
                                                if (Math.round(th - (j2 - 2 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                                }
                                            }
                                            //-------------------------------------------------------------------------------------------------------------------------------
                                        } else {
                                            if (Math.round(th - (j2 - th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                            }
                                        }
                                    }
                                }
                            }



                        } else {
                            if (x - 5 * th == 0) {
                                setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                            } else {
                                if (x - 5 * th > 0) {
                                    setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                                } else {
                                    if ((x - 5 * th) > th) {
                                        if ((x - 4 * th) > th) {
                                            if ((x - 3 * th) > th) {
                                                if ((x - 2 * th) > th) {
                                                    if (x - 2 * th < 0) {
                                                        setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                                    } else {
                                                        setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                                    }

                                                }
                                            } else {
                                                if (x - 3 * th < 0) {
                                                    setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                                } else {
                                                    setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                                }
                                            }
                                        } else {
                                            if (x - 4 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                            }

                                        }
                                    } else {
                                        if (x - 5 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                        }

                                    }
                                }
                            }

                        }


                    }

                    break;
                case 5:
                    if (x - 5 * th == 0) {
                        setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                    } else {
                        if (x - 5 * th > 0) {
                            setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                        } else {
                            if ((x - 5 * th) > th) {
                                if ((x - 4 * th) > th) {
                                    if ((x - 3 * th) > th) {
                                        if ((x - 2 * th) > th) {
                                            if (x - 2 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                            }

                                        }
                                    } else {
                                        if (x - 3 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                        }
                                    }
                                } else {
                                    if (x - 4 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                    }

                                }
                            } else {
                                if (x - 5 * th < 0) {
                                    setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                } else {
                                    setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                }

                            }
                        }
                    }


                    break;
                default:
                    setText("valamit nem adtál meg jól");
            }

            break;


            //------------------------------------------------------------------------------------------------
        case 5:
            switch (Math.round(elak)) {
                case 1:
                    while (j1 > elak) {

                        j2 = j2 - 1;
                        j1 = (jegyek + j2) / (th + jsz);
                    }
                    if (j2 - th < 0) {
                        setText("nem lehet megcsinálni")
                    } else {
                        if (j2 - th == 0) {
                            setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                        } else {
                            if (j2 - 5 * th > 0) {
                                setText("nem lehet megcsinálni");
                            } else {
                                if (j2 - th > th) {
                                    if (j2 - th * 2 > th) {
                                        if (j2 - th * 3 > th) {
                                            if (j2 - th * 4 > th) {

                                                if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                }
                                            }
                                            //----------------------------------------------------------------------------------------------------------------------------------------                
                                        } else {
                                            if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                            }
                                        }
                                        //--------------------------------------------------------------------------------------------------------------------------------            
                                    } else {
                                        if (Math.round(th - (j2 - 2 * th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                        } else {
                                            setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                        }
                                    }
                                    //-------------------------------------------------------------------------------------------------------------------------------
                                } else {
                                    if (Math.round(th - (j2 - th)) < 0) {
                                        setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                    } else {
                                        setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                    }
                                }
                            }
                        }
                    }

                    break;
                case 2:
                    while (j1 > elak) {

                        j2 = j2 - 1;
                        j1 = (jegyek + j2) / (th + jsz);
                    }
                    if (j2 - th < 0) {
                        setText("nem lehet megcsinálni")
                    } else {
                        if (j2 - th == 0) {
                            setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                        } else {
                            if (j2 - 5 * th > 0) {
                                setText("nem lehet megcsinálni");
                            } else {
                                if (j2 - th > th) {
                                    if (j2 - th * 2 > th) {
                                        if (j2 - th * 3 > th) {
                                            if (j2 - th * 4 > th) {

                                                if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                }
                                            }
                                            //----------------------------------------------------------------------------------------------------------------------------------------                
                                        } else {
                                            if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                            }
                                        }
                                        //--------------------------------------------------------------------------------------------------------------------------------            
                                    } else {
                                        if (Math.round(th - (j2 - 2 * th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                        } else {
                                            setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                        }
                                    }
                                    //-------------------------------------------------------------------------------------------------------------------------------
                                } else {
                                    if (Math.round(th - (j2 - th)) < 0) {
                                        setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                    } else {
                                        setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                    }
                                }
                            }
                        }
                    }

                    break
                case 3:
                    while (j1 > elak) {

                        j2 = j2 - 1;
                        j1 = (jegyek + j2) / (th + jsz);
                    }
                    if (j2 - th < 0) {
                        setText("nem lehet megcsinálni")
                    } else {
                        if (j2 - th == 0) {
                            setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                        } else {
                            if (j2 - 5 * th > 0) {
                                setText("nem lehet megcsinálni");
                            } else {
                                if (j2 - th > th) {
                                    if (j2 - th * 2 > th) {
                                        if (j2 - th * 3 > th) {
                                            if (j2 - th * 4 > th) {

                                                if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                }
                                            }
                                            //----------------------------------------------------------------------------------------------------------------------------------------                
                                        } else {
                                            if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                            }
                                        }
                                        //--------------------------------------------------------------------------------------------------------------------------------            
                                    } else {
                                        if (Math.round(th - (j2 - 2 * th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                        } else {
                                            setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                        }
                                    }
                                    //-------------------------------------------------------------------------------------------------------------------------------
                                } else {
                                    if (Math.round(th - (j2 - th)) < 0) {
                                        setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                    } else {
                                        setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                    }
                                }
                            }
                        }
                    }

                    break;
                case 4:
                    while (j1 > elak) {

                        j2 = j2 - 1;
                        j1 = (jegyek + j2) / (th + jsz);
                    }
                    if (j2 - th < 0) {
                        setText("nem lehet megcsinálni")
                    } else {
                        if (j2 - th == 0) {
                            setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                        } else {
                            if (j2 - 5 * th > 0) {
                                setText("nem lehet megcsinálni");
                            } else {
                                if (j2 - th > th) {
                                    if (j2 - th * 2 > th) {
                                        if (j2 - th * 3 > th) {
                                            if (j2 - th * 4 > th) {

                                                if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                }
                                            }
                                            //----------------------------------------------------------------------------------------------------------------------------------------                
                                        } else {
                                            if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                            }
                                        }
                                        //--------------------------------------------------------------------------------------------------------------------------------            
                                    } else {
                                        if (Math.round(th - (j2 - 2 * th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                        } else {
                                            setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                        }
                                    }
                                    //-------------------------------------------------------------------------------------------------------------------------------
                                } else {
                                    if (Math.round(th - (j2 - th)) < 0) {
                                        setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                    } else {
                                        setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                    }
                                }
                            }
                        }
                    }

                    break;
                case 5:
                    if (elak == atlag) {
                        setText("szerezz" + " " + String(th) + "db" + " " + "ötöst");
                    }
                    if (elak < atlag) {


                        while (j1 > elak) {

                            j2 = j2 - 1;
                            j1 = (jegyek + j2) / (th + jsz);
                        }
                        if (j2 - th < 0) {
                            setText("nem lehet megcsinálni")
                        } else {
                            if (j2 - th == 0) {
                                setText(Math.round(th) + "db" + " " + "egyes" + " " + "kell")
                            } else {
                                if (j2 - 5 * th > 0) {
                                    setText("nem lehet megcsinálni");
                                } else {
                                    if (j2 - th > th) {
                                        if (j2 - th * 2 > th) {
                                            if (j2 - th * 3 > th) {
                                                if (j2 - th * 4 > th) {

                                                    if (Math.round(th - (j2 - 4 * th)) < 0) {
                                                        setText(String(Math.abs(Math.round(th - (j2 - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th - Math.abs(Math.round(th - (j2 - 4 * th))) * 2)) + " " + "ötös");
                                                    } else {
                                                        setText(String(Math.round(th - (j2 - 4 * th))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round(j2 - 4 * th)) + " " + "ötös");
                                                    }
                                                }
                                                //----------------------------------------------------------------------------------------------------------------------------------------                
                                            } else {
                                                if (Math.round(th - (j2 - 3 * th)) < 0) {
                                                    setText(String(Math.abs(Math.round(th - (j2 - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th - Math.abs(Math.round(th - (j2 - 3 * th))) * 2)) + " " + "négyes");
                                                } else {
                                                    setText(String(Math.round(th - (j2 - 3 * th))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round(j2 - 3 * th)) + " " + "négyes"); // 3 4
                                                }
                                            }
                                            //--------------------------------------------------------------------------------------------------------------------------------            
                                        } else {
                                            if (Math.round(th - (j2 - 2 * th)) < 0) {
                                                setText(String(Math.abs(Math.round(th - (j2 - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th - Math.abs(Math.round(th - (j2 - 2 * th))) * 2)) + " " + "hármas");
                                            } else {
                                                setText(String(Math.round(th - (j2 - 2 * th))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round(j2 - 2 * th)) + " " + "hármas"); //2 3
                                            }
                                        }
                                        //-------------------------------------------------------------------------------------------------------------------------------
                                    } else {
                                        if (Math.round(th - (j2 - th)) < 0) {
                                            setText(String(Math.abs(Math.round(th - (j2 - th)))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th - Math.abs(Math.round(th - (j2 - th))) * 2)) + " " + "kettes");
                                        } else {
                                            setText(String(Math.round(th - (j2 - th))) + "db" + " " + "egyes" + " " + "és" + " " + String(Math.round(j2 - th)) + " " + "kettes"); //1 2 
                                        }
                                    }
                                }
                            }
                        }


                    } else {
                        if (x - 5 * th == 0) {
                            setText("szerezz" + " " + th + "db" + " " + "ötöst") //ha csak 5 kell
                        } else {
                            if (x - 5 * th > 0) {
                                setText("nem lehet megcsinálni") //ha nem lehet megcsinálni 
                            } else {
                                if ((x - 5 * th) > th) {
                                    if ((x - 4 * th) > th) {
                                        if ((x - 3 * th) > th) {
                                            if ((x - 2 * th) > th) {
                                                if (x - 2 * th < 0) {
                                                    setText("Szerezz" + " " + String(th - Math.abs(x - 2 * th)) + "db" + " " + "kettes " + " " + "és" + " " + String(th - (th - Math.abs(x - 2 * th))) + "db" + " " + "egyes") //2 1 
                                                } else {
                                                    setText("Szerezz" + " " + String(Math.round((th - (x - 2 * th)))) + "db" + " " + "kettes" + " " + "és" + " " + String(Math.round((Math.abs(x - 2 * th)))) + "db" + " " + "egyes") // 2 1  
                                                }

                                            }
                                        } else {
                                            if (x - 3 * th < 0) {
                                                setText("Szerezz" + " " + String(th - Math.abs(x - 3 * th)) + "db" + " " + "hármas" + " " + "és" + " " + String(th - (th - Math.abs(x - 3 * th))) + "db" + " " + "kettes") //3 2 
                                            } else {
                                                setText("Szerezz" + " " + String(Math.round((th - (x - 3 * th)))) + "db" + " " + "hármas" + " " + "és" + " " + String(Math.round((Math.abs(x - 3 * th)))) + "db" + " " + "ketes") // 3 2 
                                            }
                                        }
                                    } else {
                                        if (x - 4 * th < 0) {
                                            setText("Szerezz" + " " + String(th - Math.abs(x - 4 * th)) + "db" + " " + "négyes" + " " + "és" + " " + String(th - (th - Math.abs(x - 4 * th))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                        } else {
                                            setText("Szerezz" + " " + String(Math.round((th - (x - 4 * th)))) + "db" + " " + "négyes" + " " + "és" + " " + String(Math.round((Math.abs(x - 4 * th)))) + "db" + " " + "hármas") //5 és vagy 4 kell
                                        }

                                    }
                                } else {
                                    if (x - 5 * th < 0) {
                                        setText("Szerezz" + " " + String(th - Math.abs(x - 5 * th)) + "db" + " " + "ötöst" + " " + "és" + " " + String(th - (th - Math.abs(x - 5 * th))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                    } else {
                                        setText("Szerezz" + " " + String(Math.round((th - (x - 5 * th)))) + "db" + " " + "ötöst" + " " + "és" + " " + String(Math.round((Math.abs(x - 5 * th)))) + "db" + " " + "négyest") //5 és vagy 4 kell
                                    }

                                }
                            }
                        }

                    }

                    break;

                default:
                    setText("valamit nem adtál meg jól")
                    break;
            }

            break;
            //-----------------------------------------------------------------------------------------
        default:
            setText("valamit nem jól adtál meg")
            break;
    }

}
