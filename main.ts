basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . .
        # . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # . # # #
        # # # . #
        . . # # #
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        # . # # #
        # # # . #
        . . . . #
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # . #
        # . . . #
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # # # . #
        # . # . #
        # . # # #
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . #
        # # # # #
        . # . . #
        . . . . .
        `)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    basic.showLeds(`
        . . . . .
        # # # . #
        # . # . #
        # . # # #
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . #
        # # # # #
        . # . . #
        . . . . .
        `)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    for (let index = 0; index < 8; index++) {
        basic.showLeds(`
            . . . . .
            # # . . #
            # # # # .
            # # . # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            # # # # .
            # # . . #
            . . . . .
            `)
    }
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
})
