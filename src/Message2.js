import m from 'mithril';
// import stream from 'mithril/stream';

export default class Message {
    view({ attrs }) {
        console.log('Message2:view', attrs);
        return m('div', [
            m('h1', [
                `Mithril 1 App 2: counter `,
                m('span', attrs.counter),
                ` streamedCounter `,
                m('span', attrs.streamedCounter),
                ` `,
                m('span', this.when),
            ]),
            m('button', {
                onclick: () => attrs.onIncrement()
            }, 'Add')
        ]);
    }
}
