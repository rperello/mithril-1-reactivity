import m from 'mithril';
import stream from 'mithril/stream';
import Message2 from './Message2';

export default class App2 {
    constructor () {
        const obj = { count: 0 };

        this.counter = obj;
        this.streamedCounter = stream(obj);
    }

    incrementCounter () {
        this.counter.count++;
        console.log(this.counter === this.streamedCounter());
    }

    view(vnode) {
        console.log(`${this.constructor.name}:view`);
        return m('div', m(Message2, { counter: this.counter.count, streamedCounter: this.streamedCounter().count, onIncrement: () => this.incrementCounter() }));
    }
}
