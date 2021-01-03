import h from "./h";

const vnode = h("div", {}, [
  h("p", {}, "哈哈"),
  h("p", {}, "嘿嘿"),
  h("p", {}, "呵呵"),
]);

console.log(vnode);
