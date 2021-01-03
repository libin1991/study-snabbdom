import h from "./h";
import patch from "./patch";

const myVnode1 = h("ul", {}, [
  h("li", {key: 'A'}, "A"),
  h("li", {key: 'B'}, "B"),
  h("li", {key: 'C'}, "C"),
]);
const myVnode2 = h("ul", {}, [
  h("li", {key: 'A'}, "A"),
  h("li", {key: 'C'}, "C"),
]);
// const myVnode1 = h("section", {}, '我变成文字了');
const container = document.getElementById("container");
const btn = document.getElementById("btn");

patch(container, myVnode1);

btn.addEventListener("click", () => {
  patch(myVnode1, myVnode2);
});
