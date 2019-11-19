import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import herz from "./assets/4herz.png";
import pike from "./assets/5PIKE.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1200,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
  this.load.image("herz", herz);
  this.load.image("pike", pike);
}

function create() {

  window.game = this;
  const scale = 0.12;
  const margin = this.scale.width * .05; console.log('margin', margin, (usableWidth % (cardWidth - usableWidth / 72)));
  const usableWidth = this.scale.width - margin * 2;
  const cardWidth = 600 * scale;
  const cardShift = (usableWidth - cardWidth) / 71;

  const deck1 = []
  
  for(let i = 0; i < 72; i++) {
    deck1.push(
      this.add.sprite(margin + cardWidth / 2 + i * cardShift, 150, "herz").setScale(scale)
    );
  }


  for(let i = 0; i < 72; i++) {
    this.add.image(margin + cardWidth / 2 + i * cardShift, 300, "pike").setScale(scale);
  }

  this.anims.add({
    key: "moveCard",
    y: 300,
    duratinon: 2000,
    frameRate: 10,
    yoyo: true,
    repeat: -1
  })

  this.deck1[0].anims.load("moveCard");
  this.deck1[0].anims.play("moveCard");

  // this.anims.play("herz");

  // this.tweens.add({
  //   targets: herz,
  //   y: 450,
  //   duration: 2000,
  //   ease: "Power2",
  //   yoyo: true,
  //   loop: -1
  // });
}
