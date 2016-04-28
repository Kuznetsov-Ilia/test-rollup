var a = {prop: 0};
var b = a.prop;
export {
  b, a, set
};

function set(new_a, new_b) {
  a = new_a;
  b = new_b;
}
