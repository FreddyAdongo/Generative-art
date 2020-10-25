/* let noiseVal;
let noiseScale = 0.02;
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    noFill();
    stroke(255);

    beginShape();
    for(var x = 0; x < width; x++) {
        var nx = map(x, width, 0, 0, 10);
        var y = height * noise(nx);
        vertex(x, y);
    }

    endShape();
    

} */ // perlin noise graph


var t;

function setup() {
    createCanvas(400, 400);
    background(255);
    stroke(0, 15);
    /* background(51); */
    noFill(); 
    t = 0;
}

function draw() {

    /* var x1 = width * noise(t + 15);
    var x2 = width * noise(t + 25);
    var x3 = width * noise(t + 35);
    var x4 = width * noise(t + 45);
    var x5 = width * noise(t + 55);
    var y1 = height * noise(t + 65);
    var y2 = height * noise(t + 75);
    var y3 = height * noise(t + 85);
    var y4 = height * noise(t + 100);
    var y5 = height * noise(t + 105);
    
    bezier(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5);

    t += 0.0025;
 */

    translate(width / 2, height / 2);
    beginShape();
    for (var i = 0; i < 500; i++) {
        var ang = map(i, 0, 500, 0, TWO_PI);
        var rad = 200 * noise(i * 0.02, t * 0.005);
        var x = rad * cos(ang);
        var y = rad * sin(ang);
        curveVertex(x, y);
    }

    endShape(CLOSE);

    t += 6;

}