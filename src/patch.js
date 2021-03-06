import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from './patchVnode'

export default function (oldVnode, newVnode) {
  // console.log('oldVnode', oldVnode, 'newVnode', newVnode)
  if (oldVnode.sel === "" || oldVnode.sel === undefined) {
    // 传入的第一个参数是DOM节点，需要包装为虚拟节点
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    );
  }
  // 判断oldVnode和newVnode是不是同一个节点
  if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
    patchVnode(oldVnode, newVnode)
  } else {
    // console.log("不是同一个节点，暴力插入新的，删除旧的");
    let newVnodeElm = createElement(newVnode);
    // 插入到老节点之前
    if (oldVnode.elm.parentNode && newVnodeElm) {
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
    }
    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
