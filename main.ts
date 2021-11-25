input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let item: number[] = []
let list = [
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
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 25; index++) {
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
        }
    } else if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 25; index++) {
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
    } else {
    	
    }
})
