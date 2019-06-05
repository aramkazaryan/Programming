let matrix = [];
let rows = 30;
let columns = 70;

for (let y = 0; y < rows; y++) {
    matrix[y] = [];
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 0) {
            matrix[y][x] = 0;
        }
        if (a >= 0 && a < 90) {
            matrix[y][x] = 1;
        }
        else if (a >= 90 && a < 93) {
            matrix[y][x] = 2;
        }
        else if (a >= 93 && a < 98) {
            matrix[y][x] = 3;
        }
        else if (a >= 98 && a < 99) {
            matrix[y][x] = 4;
        }
        else if (a >= 99 && a < 100) {
        matrix[y][x] = 5; 
        }
    }
}



// stex zangvacnery verjum Arr barov
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var VorsordArr = [];
var MardaspanAryucArr = [];
var side = 20;

function setup() {
    frameRate(60);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    //pttvum em matrix mejov u stexcum em object

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x, y, 2);
                grassEaterArr.push(et);

            }
            else if (matrix[y][x] == 3) {
                var gi = new Gishatich(x, y, 3);
                gishatichArr.push(gi);
            }
            else if (matrix[y][x] == 4) {
                var vr = new Vorsord(x, y, 4);
                VorsordArr.push(vr);
            }
            else if (matrix[y][x] == 5) {
                var ma = new MardaspanAryuc(x, y, 5);
                MardaspanAryucArr.push(ma);
            }
        }
    }

}
//draw uxaki nerkuma
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                noStroke();
                fill("#acacac");
                rect(x * side, y * side, side, side);
                stroke(1);
            }
        }
    }

    //kanchum em methodnery
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
        grassEaterArr[i].move();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
        gishatichArr[i].move();
        // gishatichArr[i].moveGrass();
        gishatichArr[i].mul();
        gishatichArr[i].die();
    }
    for (var i in VorsordArr) {
        VorsordArr[i].eat();
        VorsordArr[i].move();
        //VorsordArr[i].moveGrass();
        VorsordArr[i].mul();
        VorsordArr[i].die();
    }
    for (var i in MardaspanAryucArr) {
        //MardaspanAryucArr[i].eatVorsord();
        MardaspanAryucArr[i].eat();
        MardaspanAryucArr[i].move();
        //MardaspanAryucArr[i].moveGrass();
        MardaspanAryucArr[i].mul();
        MardaspanAryucArr[i].die();
    }
}

