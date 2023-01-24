let font1;

var weather;
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&APPID=00400fa79c76538700580ea8c8bf2a39";
var units = "&units=metric";
var img;
var Btnimg;

var input;
var input1;
var Vinput;
var img1;

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  button = createImg("Openbtn.png");
  button.position(50, 350);
  button.mousePressed(Hide1);
  button.size(40, 40);
  scale(1);
  
    button = createImg("Closebtn.png");
  button.position(90, 310);
  button.mousePressed(Show1);
  button.size(30, 30);
  scale(1);
  
  Cover1 = select("#cover1");
  col1 = color(0);
  Cover1.size(300, 250);
  Cover1.position(1.33, 440);
  Cover1.style("background-color", col1);
  
    //enter button for weather
  Wbutton = select("#enter");
  col = color(0);
  Wbutton.style("font-size", "24px");
  Wbutton.style("color:#2196F3");
  Wbutton.style("font-family", "Orbitron");
  Wbutton.style("background-color", col);
  Wbutton.position(1.26, 470);
  Wbutton.mousePressed(weatherAsk);
  Wbutton.hide();
  
    //input/search bar to search for cities weather
  input = select("#city");
  input.hide();
  
}

function preload() {
  font1 = loadFont("Orbitron.ttf"); //loads external files to be called (font file)
  gif = createImg("2RNb.gif");
}


function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}
function gotData(data) {
  //print if it has retrieved data
  weather = data;
}


function draw() {
  background(2);
  
    //Center Circle
noFill();
strokeWeight(5);
stroke(0, 153, 255);
ellipse(168, 250, 250, 250);
  
push();
gif.position(94, 167);
gif.size(150, 150);
pop();
  
  
  //display text to indicate what the different values are
  fill(0, 153, 255);
  noStroke();
  textSize(20);
  textFont(font1);
  text("Temperature", 1.26, 530);
  text("Humidity", 1.26, 580);
  text("Minimum Temperature", 1.26, 630);
  text("Maximum Temperature", 1.26, 680);

  //taking JSON data and creating variables
  if (weather) {
    let temp = weather.main.temp;
    let humidity = weather.main.humidity;
    let tempMin = weather.main.temp_min;
    let tempMax = weather.main.temp_max;
    textSize(15);
    text(temp, 1.26, 555);
    text(humidity, 1.26, 603);
    text(tempMin, 1.26, 653);
    text(tempMax, 1.26, 860);
  }
  //design the input for weather search bar
  input.style("font-size", "24px");
  input.style("border: 1px solid #2196F3");
  input.style("color: #2196F3;");
  input.style("font-family", "Orbitron");
  input.size(325);
  input.position(1.20, 430);
}

//all the show and hide button functions
function Hide1() {
  Cover1.hide();
  Wbutton.show();
  input.show();
}

function Show1() {
  Cover1.show();
  Wbutton.hide();
  input.hide(); 
}
function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}