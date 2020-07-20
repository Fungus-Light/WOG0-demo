//process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
var config = {
    type: Phaser.AUTO,//自动设置是否webgl
    width: 100,
    height: 100,
    zoom: 4,
    parent: "GameContainner",
    backgroundColor: "#472d3c",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var cursors;
var player;
var NPC;

function preload() {
    this.load.image('tiles', 'assets/tiles.png');
    this.load.spritesheet("elements", 'assets/tiles_resolve.png', { frameWidth: 16, frameHeight: 16 });
}

function create() {
    
    var map = this.make.tilemap({ data: Testlevel, tileWidth: 16, tileHeight: 16 });
    var tileset = map.addTilesetImage('tiles', null, 16, 16, 0, 1);
    var layer = map.createStaticLayer(0, tileset, 0, 0);

    map.setCollisionBetween(32, 39);

    NPC = this.physics.add.staticImage(16 * 5 + 8, 16 * 3 + 8, 'elements', 29)

    player = this.physics.add.sprite(16 + 8, 16 + 8, 'elements', 31);
    this.physics.add.collider(player, layer);
    this.physics.add.collider(player, NPC);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(player);

    this.input.keyboard.on('keydown_A', function (event) {

        var tile = layer.getTileAtWorldXY(player.x - 16, player.y, true);
        console.log(tile);
        let _x = player.x - 16;
        let _y = player.y;
        console.log(_x + " " + _y)
        console.log(NPC.x + " " + NPC.y);
        if ((32 <= tile.index && tile.index <= 39) || (_x == NPC.x && _y == NPC.y)) {
            //  Blocked, we can't move
        }
        else {
            player.x -= 16;

        }

    });

    //  Right
    this.input.keyboard.on('keydown_D', function (event) {

        var tile = layer.getTileAtWorldXY(player.x + 16, player.y, true);
        console.log(tile);
        let _x = player.x + 16;
        let _y = player.y;
        console.log(_x + " " + _y)
        console.log(NPC.x + " " + NPC.y);
        if ((32 <= tile.index && tile.index <= 39) || (_x == NPC.x && _y == NPC.y)) {
            //  Blocked, we can't move
        }
        else {
            player.x += 16;

        }

    });

    //  Up
    this.input.keyboard.on('keydown_W', function (event) {

        var tile = layer.getTileAtWorldXY(player.x, player.y - 16, true);
        console.log(tile);
        let _x = player.x;
        let _y = player.y - 16;
        console.log(_x + " " + _y)
        console.log(NPC.x + " " + NPC.y);
        if ((32 <= tile.index && tile.index <= 39) || (_x == NPC.x && _y == NPC.y)) {
            //  Blocked, we can't move
        }
        else {
            player.y -= 16;

        }

    });

    //  Down
    this.input.keyboard.on('keydown_S', function (event) {

        var tile = layer.getTileAtWorldXY(player.x, player.y + 16, true);
        console.log(tile);
        let _x = player.x;
        let _y = player.y + 16;
        console.log(_x + " " + _y)
        console.log(NPC.x + " " + NPC.y);
        if ((32 <= tile.index && tile.index <= 39) || (_x == NPC.x && _y == NPC.y)) {
            //  Blocked, we can't move
        }
        else {
            player.y += 16;

        }

    });


}

function update() {



}