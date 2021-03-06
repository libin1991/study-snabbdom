import createElement from "./createElement";
import updateChildren from "./updateChildren";

export default function patchVnode(oldVnode, newVnode) {
  console.log("是同一个节点");
  if (oldVnode === newVnode) return;
  if (
    newVnode.text !== undefined &&
    (newVnode.children === undefined || newVnode.children.length === 0)
  ) {
    console.log("新vnode有text属性");
    if (newVnode.text !== oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    console.log("新vnode没有text属性");
    // 判断oldVnode有没有children
    if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
      // 新老都有children
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children)
    } else {
      // oldVnode没有children，newVnode有children
      // 清空老节点内容
      oldVnode.elm.innerHTML = "";
      newVnode.children.forEach((item) => {
        let dom = createElement(item);
        oldVnode.elm.appendChild(dom);
      });
    }
  }
}
