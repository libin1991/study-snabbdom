// 真正创建节点
export default function createElement (vnode) {
  // console.log("虚拟节点", vnode, "真正变为DOM，但是不插入");
  let domNode = document.createElement(vnode.sel);
  // 有子节点还是有文本？
  if (
    vnode.text !== "" &&
    (vnode.children === undefined || vnode.children.length === 0)
  ) {
    // 内部是文字
    domNode.innerText = vnode.text;
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 内部是子节点，递归创建节点
    for (let i = 0; i < vnode.children.length; i++) {
      const ch = vnode.children[i];
      // console.log(ch);
      let chDom = createElement(ch);
      domNode.appendChild(chDom);
    }
  }
  // 补充elm属性
  vnode.elm = domNode;
  // 返回elm, elm是纯DOM对象
  return vnode.elm;
}
