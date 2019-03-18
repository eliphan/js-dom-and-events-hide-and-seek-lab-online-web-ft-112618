function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

 function increaseByRank(n) {
   return document.querySelectorAll('ul.ranked-list').parseInt(n);
 }

function deepestChild() {
  return document.querySelectorAll('div.grand-node');
}