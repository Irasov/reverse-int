module.exports = function reverse (n) {
  s = n.toString();
  ss = "";
  for (let i = s.length; i > 0; i--) {
    if (s[i-1] != '-'){
        ss += s[i-1];
    }
  }
  return Number(ss);
}
