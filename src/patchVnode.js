import createElement from "./createElement";

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
      // 所有未处理节点的指针
      let un = 0;
      console.log("oldVnode有children属性");
      for (let i = 0; i < newVnode.children.length; i++) {
        const ch = newVnode.children[i];
        // 再次遍历，看oldVnode是否有key是一样的
        let isExist = false;
        for (let j = 0; j < oldVnode.children.length; j++) {
          if (
            oldVnode.children[j].sel === ch.sel &&
            oldVnode.children[j].key === ch.key
          ) {
            isExist = true;
          }
        }
        if (!isExist) {
          console.log(ch, i);
          let dom = createElement(ch);
          ch.elm = dom;
          if (un < oldVnode.children.length) {
            oldVnode.elm.insertBefore(dom, oldVnode.children[un].elm);
          } else {
            oldVnode.elm.appendChild(dom);
          }
        } else {
          // 让处理的节点指针下移
          un++;
          // 判断位置是否一样
        }
      }
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
