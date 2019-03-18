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
  let grandNode = document.getElementById('grand-node');
  let deepestNode = grandNode[grandNode.length- 1];
  return deepestNode;
}