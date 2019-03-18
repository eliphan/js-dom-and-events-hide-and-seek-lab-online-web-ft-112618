function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
let rankOfElement = document.querySelectorAll('ul.ranked-list');
return parseInt(rankOfElement) + n;
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div');
}