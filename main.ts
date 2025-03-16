namespace SpriteKind {
    export const Start = SpriteKind.create()
    export const Cursor = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    info.startCountdown(30)
    scene.setBackgroundImage(assets.image`Cenario easter Tech`)
    mySprite = sprites.create(assets.image`Coelho parado`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setStayInScreen(true)
    mySprite.setPosition(75, 100)
    info.setLife(3)
    while (info.countdown() > 0) {
        pause(500)
        mySprite2 = sprites.create(assets.image`Ovo Amarelo`, SpriteKind.Food)
        mySprite2.setPosition(randint(0, scene.screenWidth()), 0)
        mySprite2.setVelocity(0, 50)
        pause(500)
        mySprite5 = sprites.create(assets.image`Ovo Partido`, SpriteKind.Enemy)
        mySprite5.setPosition(randint(0, scene.screenWidth()), 0)
        mySprite5.setVelocity(0, 34)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 100)
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    info.changeLifeBy(-1)
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
let mySprite5: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(5)
game.splash("Carrega no botão A para iniciar")
game.setGameOverMessage(false, "FIM DO JOGO")
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.setGameOverScoringType(game.ScoringType.HighScore)
