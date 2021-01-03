import vnode from "./vnode";

export default function (sel, data, c) {
  if (arguments.length !== 3) {
    throw new Error("must be 3 arguments");
  }
  if (typeof c === "string" || typeof c === "number") {
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    let children = [];
    c.forEach((item) => {
      if (typeof item === "object" && item.hasOwnProperty("sel")) {
        children.push(item);
      } else {
        throw new Error("the input params array must be h function");
      }
    });
    return vnode(sel, data, children, undefined, undefined);
  } else if (typeof c === "object" && c.hasOwnProperty("sel")) {
    const children = [c];
    return vnode(sel, data, children, undefined, undefined);
  } else {
    throw new Error(`${typeof c} must be one of string number object or array`);
  }
}
