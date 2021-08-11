module.exports = function(type, className, text) {
  const el = document.createElement(type);
  el.className = className;
  if (text) {el.textContent = text;}
  return el;
}