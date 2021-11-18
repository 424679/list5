input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.B)) {
        for (let Y = 0; Y <= 4; Y++) {
            for (let X = 0; X <= 4; X++) {
                if (list[Y][X] == 1) {
                    led.plot(X, Y)
                } else {
                    led.unplot(X, Y)
                }
            }
        }
        list.unshift(list.pop())
        basic.pause(100)
    } else {
        for (let Y = 0; Y <= 4; Y++) {
            for (let X = 0; X <= 4; X++) {
                if (list[Y][X] == 1) {
                    led.plot(X, Y)
                } else {
                    led.unplot(X, Y)
                }
            }
        }
        for (let Y = 0; Y <= 4; Y++) {
            item = list[Y]
            item.unshift(item.pop())
        }
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            if (list[Y][X] == 1) {
                led.plot(X, Y)
            } else {
                led.unplot(X, Y)
            }
        }
    }
    list.unshift(list.pop())
    basic.pause(100)
})
let item: number[] = []
let list: number[][] = []
list = [
[
1,
0,
1,
0,
1
],
[
0,
1,
0,
1,
0
],
[
1,
0,
0,
0,
1
],
[
1,
0,
0,
0,
1
],
[
1,
0,
0,
0,
1
]
]
for (let Y = 0; Y <= 4; Y++) {
    for (let X = 0; X <= 4; X++) {
        if (list[Y][X] == 1) {
            led.plot(X, Y)
        } else {
            led.unplot(X, Y)
        }
    }
}
