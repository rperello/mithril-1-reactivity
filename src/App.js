import m from 'mithril';
import stream from 'mithril/stream';

export default class App {
    constructor () {
        this.counter = stream(0);
    }

    oncreate () {
        setTimeout(() => {
            this.counter(this.counter() + 1);
            console.info(this.counter());
        }, 1000);
    }

    view(vnode) {
        console.log('App:view', { vnode });
        return m('h1', `Mithril 1 App: counter ${this.counter()}`);
    }
}
