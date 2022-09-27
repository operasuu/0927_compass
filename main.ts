function 偵測方位 (D: number) {
    if (D < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (D < 135) {
        basic.showArrow(ArrowNames.West)
    } else if (D < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (D < 315) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.North)
    }
}
input.calibrateCompass()
basic.forever(function () {
    偵測方位(input.compassHeading())
})
