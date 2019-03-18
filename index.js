function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
let rankOfElement = document.querySelectorAll('ul.ranked-list li');
 return parseInt(rankOfElement, 10) * n } );
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div');
}