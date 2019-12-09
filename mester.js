var jegyek = prompt("jegyeid összege");
var jsz = prompt("jegyeid száma");
var th = prompt("mennyi jegyet tudsz szerezni");
var elak = prompt("mit akarsz elérni");

var atlag = jegyek / jsz; //átlag
var x = elak * jsz + elak * th - jegyek; //mennyi jegyet kell hozzáadni, hogy elérjük az adottátlagot

var j2 = th * 5; // rontásnál mennyi jegyet kell hozzáadni, hogy elérjük az adottátlagot
var j1 = jegyek + j2 / jsz + th; // az átlag amit a rontásnál számolunk

if (String(x).includes(".")) {
    x = Math.round(x);
}

while (j1 > elak) {

    j2 = j2 - 1;
    j1 = (jegyek + j2) / (th + jsz);
}

if (String(j1).includes(".")) {
    j1 = Math.round(j1);
}

var t = th;
var n = 0; //nagyobb
var c = String(x / th);

var cc = String(j2 / th);

var ww = Number(cc.slice(0, 1));
var w = Number(c.slice(0, 1));

if (elak > atlag) {
    if (x - 5 * th > 0) {
        alert("nem lehet megcsinálni");//ha nem lehet megcsinálni 
    } else {
        switch (w) {
            case 1:

                while (t + n * 2 !== x) {

                    t = t - 1;
                    n = n + 1;
                } //1, 2 tartomány 

                alert(String(n) + "db" + " " + "kettes" + " " + "és" + " " + String(t) + "db" + " " + "egyes");
                break;
            case 2:
                while (t * 2 + n * 3 !== x) {

                    t = t - 1;
                    n = n + 1;
                } //1, 2 tartomány 

                alert(String(n) + "db" + " " + "hármas" + " " + "és" + " " + String(t) + "db" + " " + "kettes");
                // 3, 4 tartomány
                //2, 3 tartomány 
                break;
            case 3:
                while (t * 3 + n * 4 !== x) {

                    t = t - 1;
                    n = n + 1;
                } //1, 2 tartomány 

                alert(String(n) + "db" + " " + "négyes" + " " + "és" + " " + String(t) + "db" + " " + "hármas");
                // 3, 4 tartomány
                break;
            case 4:
                while (t * 4 + n * 5 !== x) {

                    t = t - 1;
                    n = n + 1;
                } //1, 2 tartomány 

                alert(String(n) + "db" + " " + "négyes" + " " + "és" + " " + String(t) + "db" + " " + "ötös");
                // 3, 4 tartomány
                //4,5 tartomány
                break;

            default:
                alert("valamit nem jól adtál meg");
                break;
        }
    }
} else {
    if (j2 - th < 0) {
        alert("nem lehet megcsinálni")
    switch (ww) {
        case 1:

            while (t + n * 2 !== x) {

                t = t - 1;
                n = n + 1;
            } //1, 2 tartomány 

            alert(String(n) + "db" + " " + "kettes" + " " + "és" + " " + String(t) + "db" + " " + "egyes");
            break;
        case 2:
            while (t * 2 + n * 3 !== x) {

                t = t - 1;
                n = n + 1;
            } //1, 2 tartomány 

            alert(String(n) + "db" + " " + "hármas" + " " + "és" + " " + String(t) + "db" + " " + "kettes");
            // 3, 4 tartomány
            //2, 3 tartomány 
            break;
        case 3:
            while (t * 3 + n * 4 !== x) {

                t = t - 1;
                n = n + 1;
            } //1, 2 tartomány 

            alert(String(n) + "db" + " " + "négyes" + " " + "és" + " " + String(t) + "db" + " " + "hármas");
            // 3, 4 tartomány
            break;
        case 4:
            while (t * 4 + n * 5 !== x) {

                t = t - 1;
                n = n + 1;
            } //1, 2 tartomány 

            alert(String(n) + "db" + " " + "négyes" + " " + "és" + " " + String(t) + "db" + " " + "ötös");
            // 3, 4 tartomány
            //4,5 tartomány
            break;

        default:
            alert("valamit nem jól adtál meg");
            break;
    }
}
}
