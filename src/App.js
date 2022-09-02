import m from 'mithril';
import stream from 'mithril/stream';
import Message from './Message';

let self;

export default class App {
    constructor () {
        const obj = { count: 0 };

        this.counter = obj;
        this.streamedCounter = stream(obj);
        self = this;
    }

    incrementCounter () {
        this.counter.count++;
        console.log(this.counter === this.streamedCounter());
    }

    view(vnode) {
        console.log(self, vnode.state, self === vnode.state, this.streamedCounter().count);
        return m('div', m(Message, { counter: this.counter.count, streamedCounter: this.streamedCounter().count, onIncrement: () => this.incrementCounter() }));
    }
}
