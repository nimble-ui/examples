import { e, t, on } from 'nimble-ui'
import mount from 'nimble-ui/client'

const app = e('button', [on('click', () => () => alert('Hello, NimbleUI!'))], [t('Click here')])

window.addEventListener('load', function() {
    mount(app, this.document.body)
})