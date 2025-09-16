controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("", DialogLayout.Bottom)
})
music.play(music.createSong(assets.song`rock`), music.PlaybackMode.LoopingInBackground)
