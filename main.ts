scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    info.changeScoreBy(1)
    if (info.score() == 50) {
        game.gameOver(true)
    }
})
function createTail () {
    tail = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tail.setPosition(snek.x - snek.vx * (info.score() / 10), snek.y - snek.vy * (info.score() / 10))
    pause(200)
    sprites.destroy(tail)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vely == 0) {
        snek.setVelocity(0, -28)
        snek.setImage(img`
            . . . 2 2 . . . 
            . . . 7 7 . . . 
            7 7 7 7 7 7 7 7 
            7 7 f 7 7 f 7 7 
            7 7 7 7 7 7 7 7 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            `)
        vely = 1
        velx = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (velx == 0) {
        snek.setVelocity(-28, 0)
        snek.setImage(img`
            . . 7 7 7 . . . . . . . . . 
            . . 7 7 7 . . . . . . . . . 
            . . 7 f 7 7 7 7 7 7 7 7 7 7 
            2 7 7 7 7 7 7 7 7 7 7 7 7 7 
            2 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . 7 f 7 7 7 7 7 7 7 7 7 7 
            . . 7 7 7 . . . . . . . . . 
            . . 7 7 7 . . . . . . . . . 
            `)
        velx = 1
        vely = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (velx == 0) {
        snek.setVelocity(28, 0)
        snek.setImage(img`
            . . . . . . . . . 7 7 7 . . 
            . . . . . . . . . 7 7 7 . . 
            7 7 7 7 7 7 7 7 7 7 f 7 . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 2 
            7 7 7 7 7 7 7 7 7 7 7 7 7 2 
            7 7 7 7 7 7 7 7 7 7 f 7 . . 
            . . . . . . . . . 7 7 7 . . 
            . . . . . . . . . 7 7 7 . . 
            `)
        velx = 1
        vely = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vely == 0) {
        snek.setVelocity(0, 28)
        snek.setImage(img`
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            . . 7 7 7 7 . . 
            7 7 7 7 7 7 7 7 
            7 7 f 7 7 f 7 7 
            7 7 7 7 7 7 7 7 
            . . . 7 7 . . . 
            . . . 2 2 . . . 
            `)
        vely = 1
        velx = 0
    }
})
function createApples () {
    for (let index = 0; index < 50; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 15), randint(1, 15)), assets.tile`myTile0`)
    }
}
let velx = 0
let vely = 0
let tail: Sprite = null
let snek: Sprite = null
snek = sprites.create(img`
    . . 7 7 7 7 . . 
    . . 7 7 7 7 . . 
    . . 7 7 7 7 . . 
    . . 7 7 7 7 . . 
    . . 7 7 7 7 . . 
    . . 7 7 7 7 . . 
    . . 7 7 7 7 . . 
    . . 7 7 7 7 . . 
    . . 7 7 7 7 . . 
    7 7 7 7 7 7 7 7 
    7 7 f 7 7 f 7 7 
    7 7 7 7 7 7 7 7 
    . . . 7 7 . . . 
    . . . 2 2 . . . 
    `, SpriteKind.Player)
snek.setStayInScreen(true)
scene.cameraFollowSprite(snek)
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(0)
createApples()
forever(function () {
    for (let index = 0; index <= info.score(); index++) {
        createTail()
    }
})
