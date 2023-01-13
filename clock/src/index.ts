import { e, c, _, each } from 'nimble-ui'
import { mount } from 'nimble-ui/client'
import type { Component } from 'nimble-ui/types'
import { Prop, State, Lifecycle } from 'nimble-ui/middleware'

const Clock: Component<{ format: (d: Date) => string[] }> = use => {
    const format = use(Prop(props => props.format))
    const date = use(State(new Date))
    use(Lifecycle()).mounted(() => {
        const tmr = setInterval(() => {
            date.value = new Date
        }, 1000)
        return () => clearInterval(tmr)
    })
    return e('p', [], [
        each({ items: () => format()(date.value) }, text => _(text))
    ])
}

const app = c(Clock, () => ({
    format: date => ['It is ', `${date.getHours()}`, date.getMinutes() ? `:${Math.floor(date.getMinutes() / 60)}${date.getMinutes() % 60}` : " o'clock", ` with ${date.getSeconds()}s`].join('').split('')
}))

window.addEventListener('load', function () {
    mount(app, this.document.body)
})