sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
})
info.onLifeZero(function () {
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
})
let tourist: Sprite = null
let babyDino: Sprite = null
let heart: Sprite = null
scene.setBackgroundImage(assets.image`Freeway`)
let mamaDino = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(mamaDino, controller.Speeds.Fast)
scroller.scrollBackgroundWithSpeed(-5000, 0)
info.startCountdown(15)
animation.runImageAnimation(
mamaDino,
assets.animation`Mama Moving`,
50,
true
)
forever(function () {
    heart = sprites.createProjectileFromSide(assets.image`Extra Life`, -90, 0)
    heart.y = randint(15, 115)
    heart.setKind(SpriteKind.Food)
    pause(5000)
})
forever(function () {
    babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    babyDino.y = randint(15, 115)
    animation.runImageAnimation(
    babyDino,
    assets.animation`Animated Baby`,
    50,
    true
    )
    pause(100)
})
forever(function () {
    tourist = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    tourist.y = randint(15, 115)
    tourist.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    tourist,
    assets.animation`Animated Tourist`,
    50,
    true
    )
    pause(2100)
})
