class TarotShop {
  constructor() {
    this.grammar = null;
    this.lines = [];
    this.json = null;
    this.images = [];
    this.song = null;
    this.cursive = null;

    // Button properties
    this.buttonX = 250;
    this.buttonY = 500;
    this.buttonWidth = 100;
    this.buttonHeight = 50;

    // Track the current page
    this.currentPage = 0;
  }

  preload() {
    this.json = loadJSON("cardPick.json");

    this.song = loadSound('LivelyMeadow.mp3');

    this.cursive = loadFont('QrowyMagical.otf')

    let imageTarot = [
     // major arcana
    "tarot/0.png",
    "tarot/1.png",
    "tarot/2.png",
    "tarot/3.png",
    "tarot/4.png",
    "tarot/5.png",
    "tarot/6.png",
    "tarot/7.png",
    "tarot/8.png",
    "tarot/9.png",
    "tarot/10.png",
    "tarot/11.png",
    "tarot/12.png",
    "tarot/13.png",
    "tarot/14.png",
    "tarot/15.png",
    "tarot/16.png",
    "tarot/17.png",
    "tarot/18.png",
    "tarot/19.png",
    "tarot/20.png",
    "tarot/21.png",
    // cups
    "tarot/cup1.png",
    "tarot/cup2.png",
    "tarot/cup3.png",
    "tarot/cup4.png",
    "tarot/cup5.png",
    "tarot/cup6.png",
    "tarot/cup7.png",
    "tarot/cup8.png",
    "tarot/cup9.png",
    "tarot/cup10.png",
    "tarot/cupking.png",
    "tarot/cupqueen.png",
    "tarot/cupknight.png",
    "tarot/cuppage.png",
    // pentacles
    "tarot/pentacle1.png",
    "tarot/pentacle2.png",
    "tarot/pentacle3.png",
    "tarot/pentacle4.png",
    "tarot/pentacle5.png",
    "tarot/pentacle6.png",
    "tarot/pentacle7.png",
    "tarot/pentacle8.png",
    "tarot/pentacle9.png",
    "tarot/pentacle10.png",
    "tarot/pentacleking.png",
    "tarot/pentaclequeen.png",
    "tarot/pentacleknight.png",
    "tarot/pentaclepage.png",
    // swords
    "tarot/sword1.png",
    "tarot/sword2.png",
    "tarot/sword3.png",
    "tarot/sword4.png",
    "tarot/sword5.png",
    "tarot/sword6.png",
    "tarot/sword7.png",
    "tarot/sword8.png",
    "tarot/sword9.png",
    "tarot/sword10.png",
    "tarot/swordking.png",
    "tarot/swordqueen.png",
    "tarot/swordpage.png",
    "tarot/swordknight.png",
    // wands
    "tarot/wand1.png",
    "tarot/wand2.png",
    "tarot/wand3.png",
    "tarot/wand4.png",
    "tarot/wand5.png",
    "tarot/wand6.png",
    "tarot/wand7.png",
    "tarot/wand8.png",
    "tarot/wand9.png",
    "tarot/wand10.png",
    "tarot/wandking.png",
    "tarot/wandqueen.png",
    "tarot/wandpage.png",
   // "tarot/wandsknight.png",
    ];

    for (let i = 0; i < imageTarot.length; i++) {
      this.images[i] = loadImage(imageTarot[i]);
    }
  }

  setup() {
    createCanvas(600, 600);

    textFont(this.cursive);
    textSize(30);
    textAlign(CENTER, CENTER);

    this.song.play();
    this.song.loop();

    this.grammar = RiTa.grammar(this.json);

    // Set up the first page
    this.lines = [
      "",
      "Welcome To",
      "the Tarot Shop!",
      "",
      "Would you like to know your future?",
      "Click here!",
      "", "", "",
    ];
  }

  drawButton() {
    if (this.currentPage === 1) {
      fill("#F6EFDC");
      rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);

      fill("#2A4747");
      textSize(25);
      textAlign(CENTER, CENTER);
      text("Back", this.buttonX + this.buttonWidth / 2, this.buttonY + this.buttonHeight / 2);
    }
  }

  draw() {
    background("#2A4747");

    noStroke();
    fill("#F6EFDC");
    text(this.lines[0], width / 2, 120);
    text(this.lines[1], width / 2, 160);
    text(this.lines[2], width / 2, 200);
    text(this.lines[3], width / 2, 240);
    text(this.lines[4], width / 2, 280);
    text(this.lines[5], width / 2, 320);
    text(this.lines[6], width / 2, 360);
    text(this.lines[7], width / 2, 400);
    text(this.lines[8], width / 2, 440);

    this.drawButton();
  }

  mousePressed() {
    
    if (
      this.currentPage === 1 &&
      mouseX > this.buttonX &&
      mouseX < this.buttonX + this.buttonWidth &&
      mouseY > this.buttonY &&
      mouseY < this.buttonY + this.buttonHeight
    ) {
      this.lines = [
        "",
        "Welcome To",
        "the Tarot Shop!",
        "",
        "Would you like to know your future?",
        "Click here!",
        "", "", "",
      ];
      this.currentPage = 0; 
    } else {
      textSize(25);
      let result = this.grammar.expand();
      let cardPick = result.split("%");

      for (let i = 0; i < this.lines.length; i++) {
        this.lines[i] = cardPick[i];
      }

      if (this.currentPage === 0) {
        this.currentPage = 1;
      }
    }
  }
}

let tarotShop;

function preload() {
  tarotShop = new TarotShop();
  tarotShop.preload();
}

function setup() {
  tarotShop.setup();
}

function draw() {
  tarotShop.draw();
}

function mousePressed() {
  tarotShop.mousePressed();
}
