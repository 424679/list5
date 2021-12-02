input.onButtonPressed(Button.A, function () {
    enter = 1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    enter = 2
})
let item: number[] = []
let enter = 0
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
    if (enter == 1) {
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
    } else if (enter == 2) {
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
