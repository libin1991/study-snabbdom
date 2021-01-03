import { init } from "snabbdom/init";
import { classModule } from "snabbdom/modules/class";
import { propsModule } from "snabbdom/modules/props";
import { styleModule } from "snabbdom/modules/style";
import { eventListenersModule } from "snabbdom/modules/eventlisteners";
import { h } from "snabbdom/h"; // helper function for creating vnodes

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const vnode = h("ul", {}, [
  h("li", {}, "A"),
  h("li", {}, "B"),
  h("li", {}, "C"),
  h("li", {}, "D"),
]);

const container = document.getElementById("container");
const btn = document.getElementById("btn");
patch(container, vnode);

const vnode2 = h("ul", {}, [
  h("li", { key: "A" }, "A"),
  h("li", { key: "B" }, "B"),
  h("li", { key: "C" }, "C"),
  h("li", { key: "D" }, "D"),
  h("li", { key: "E" }, "E"),
]);

btn.addEventListener("click", () => {
  patch(vnode, vnode2);
});
