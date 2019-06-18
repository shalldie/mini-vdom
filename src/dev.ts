import { h, patch } from './index';
import './dev.scss';

let oldNode: any = document.getElementById('app');
let newNode: any = oldNode;

function refresh() {
    oldNode = newNode;
    newNode = makeView();
    patch(oldNode, newNode);
}

refresh();

function makeView() {

    // const node = h('div#infoList.info-list.list-wrap', [
    //     h('button', {
    //         on: {
    //             click() {
    //                 refresh();
    //             }
    //         }
    //     }, '随机重置列表')
    // ]);
    // // console.log(JSON.stringify(node));
    // return node;

    let children = rndChildren();

    return h('div#app.box[data-box=box]', [
        h('button', {
            on: {
                click() {
                    refresh();
                }
            }
        }, '随机重置列表'),
        h('span', `一共 ${children.length} 条数据`),
        h('ul', children)
    ]);
}

function rndChildren() {
    let list = [];
    let len = ~~(Math.random() * 10) + 8;

    for (let i = 0; i < len; i++) {
        list.push(
            h('li.list-item', {
                attrs: {
                    class: 'attr-class'
                },
                on: {
                    click() {
                        console.log(`点击了第${i + 1}行`);
                    }
                }
            }, `这是第${i + 1}行数据`)
        )
    }
    return list;
}

// let node = h('ul.one-ul', {
//     attrs: {
//         style: 'color:#fff'
//     }
// }, [
//         h('li', {
//             attrs: {
//                 style: 'color:#f00',
//                 'data-name': 'tom'
//             },
//             on: {
//                 click(ex) {
//                     alert((ex.currentTarget as HTMLElement).dataset.name);
//                 }
//             }
//         }, [
//                 h('', 'lalala'),
//                 h('span', {
//                     attrs: {
//                         style: 'color:#666;'
//                     }
//                 }, 'this is word')
//             ]),
//         h('li', {
//             attrs: {
//                 style: 'color:#2ad',
//                 'data-name': 'lily'
//             },
//             on: {
//                 click(ex) {
//                     alert((ex.currentTarget as HTMLElement).dataset.name);
//                 }
//             }
//         }, [
//                 h('', 'this is word2')
//             ])
//     ]);

// patch(
//     document.getElementById('app'),
//     node
// );

// console.log(patch);

// let newNode = h('ul.two-ul', {
//     attrs: {
//         style: 'color:#2ad'
//     }
// }, [
//         h('li#memeda[data-name=lalala]', {
//             attrs: {
//                 // 'id': 'memeda',
//                 // 'data-name': 'lalala'
//             }
//         }, 'this is new 11'),
//         h('li', 'this is new 2'),
//         h('li', 'this is new 3'),
//         h('li', [
//             h('label', [
//                 h('input', {
//                     props: {
//                         id: 'ele',
//                         type: 'checkbox',
//                         checked: true,
//                         value: 'hello world'
//                     },
//                     attrs: {

//                     }
//                 }),
//                 h('', 'click to toggle')
//             ])
//         ])
//     ]);

// setInterval(() => {
//     patch(node, newNode);
//     newNode = [node, node = newNode][0];
// }, 1000);


// setTimeout(() => {
//     patch(node, newNode);
//     newNode = [node, node = newNode][0];
// }, 1000);

// setTimeout(() => {
//     patch(node, newNode);
//     newNode = [node, node = newNode][0];
// }, 2000);

var timer = setInterval(() => {
    // console.log('interval');
    // try {
    // patch(node, newNode);
    // newNode = [node, node = newNode][0];
    // }
    // catch (ex) {
    //     clearInterval(timer);
    //     console.log(ex);
    // }
}, 3000);
