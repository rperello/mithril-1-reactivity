import m from 'mithril';
import stream from 'mithril/stream';
import ComponentB from './ComponentB';

export default class ComponentA {
    constructor() {
        this.result = stream('One');
        this.resultNotStream = { value: 'Two' };
        this.resultModifiedWithEventPassed = 'Three'
    }

    onupdate() {
        console.clear();
        console.info(`Result : [${this.result()}]`);
        console.info(`ResultNoStream : [${this.resultNotStream}]`);
    }

    view(vnode){
        console.info(this, vnode.state.resultNotStream);
        return [
            m('h2', `THE result : [${this.result()}]`),
            m('h2', `THE resultNotStream : [${this.resultNotStream.value}]`),
            m('h2', `THE resultModifiedWithEventPassed : [${this.resultModifiedWithEventPassed}]`),

            m(ComponentB, {
                result: this.result, 
                resultNotStream: this.resultNotStream,
                onChange: (payload) => {
                    this.resultModifiedWithEventPassed = payload;
                }
            })
        ];
    }
}
