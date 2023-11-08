let font;
let sliders = [];
const sliderColors = [
  [255, 77, 0], // Red Orange
  [255, 62, 181], // Magenta Pink
  [255, 255, 0], // Yellow
  [255, 255, 255], // White
  [0, 166, 81], // Green
  [0, 174, 239], // Cyan
  [46, 49, 146], // Indigo
  [0, 0, 0] // Black
];

function preload() {
  font = loadFont("GoodSans-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255);
  noStroke();
  background("#ffffff");

  textFont(font); // Set the preloaded font
  textSize(11);

  // Array to store labels for each slider
  let sliderLabels = [
    "ANGRY",
    "FRUSTRATED",
    "SAD",
    "ANXIOUS",
    "RELAXED",
    "CONFIDENT",
    "HAPPY",
    "EXCITED",
  ];

  // Position for the first label and slider
  let labelX = 15;
  let labelY = 30;

  for (let i = 0; i < sliderColors.length; i++) {
    // Display the label for the slider using the preloaded font
    fill(0); // Set the text color to black
    text(sliderLabels[i], labelX, labelY);

    // Create a slider and position it next to the label
    let slider = createSlider(0, 5, 0);
    slider.position(15 + i * 150, 50);
    sliders.push(slider);

    labelX += 150;
    if (i % 5 === 4) {
      //labelX += 150;
      //labelY += 50;
    }
  }
}

function draw() {
  translate(0, 90);
  generateColumns();
}

function generateColumns() {
  let tileWidth = width / 5; // 5 columns
  let tileHeight = height / 8; // 8 rows

  for (let i = 0; i < 40; i++) {
    let sliderIndex = i % sliders.length;
    let sliderValue = sliders[sliderIndex].value();

    let row = int(i / 5) % 8;
    let col = i % 5;

    let x = col * tileWidth;
    let y = row * tileHeight;
    let w = tileWidth;
    let h = tileHeight;

    let sliderColor = color(
      sliderColors[sliderIndex][0],
      sliderColors[sliderIndex][1],
      sliderColors[sliderIndex][2]
    );

    fill(
      (red(sliderColor) * sliderValue) / 5,
      (green(sliderColor) * sliderValue) / 5,
      (blue(sliderColor) * sliderValue) / 5
    );
    rect(x, y, w, h);
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas(generateFileName(), "png");
  }
}

function generateFileName() {
  return "FEEL_Generator";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
