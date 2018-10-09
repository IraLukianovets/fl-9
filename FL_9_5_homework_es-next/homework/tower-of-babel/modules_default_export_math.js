export default PI = 3.141592;

let _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
export default sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
export default square = function(x){
  return x * x;
};