import { e, t, attr } from 'nimble-ui'
import mount from 'nimble-ui/client'

const app = e('h1', [
    attr('class', () => 'title'),
    attr('style', () => 'color:green;'),
], [t('Hello, NimbleUI!')])

window.addEventListener('load', function () {
    mount(app, this.document.body)
})