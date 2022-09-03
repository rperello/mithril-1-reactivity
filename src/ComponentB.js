import m from 'mithril';
// import stream from 'mithril/stream';

export default class ComponentB {
    constructor(pld) {
        this.result = pld.attrs.result;
        this.resultNotStream = pld.attrs.resultNotStream;
    }

    view(vnode) {
        return [
            m('hr'),
            m('span', 'Input something : '),
            m('input', {
                style: `border: 2px solid black; display:inline-block`,
                oninput: (ev) => {
                    this.result(ev.target.value); // Writing in the stream...
                    this.resultNotStream.value = ev.target.value; // ...Writing in comon value
                    vnode.attrs.onChange(ev.target.value);
                }
            })
        ];
    }
}
