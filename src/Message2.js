import m from 'mithril';
import stream from 'mithril/stream';

export default class Message {
    constructor () {
        this.redrawns = stream(0);
    }

    view({ attrs }) {
        console.log('Message2:view', attrs);
        this.redrawns(this.redrawns + 1);
        return m('div', [
            m('h1', [
                `Mithril 1 App 2: counter `,
                m('span', attrs.counter),
                ` streamedCounter `,
                m('span', attrs.streamedCounter),
                ` `,
                m('span', this.when),
                ` redrawns:`,
                m('span', this.redrawns()),
            ]),
            m('button', {
                onclick: () => attrs.onIncrement()
            }, 'Add')
        ]);
    }
}
