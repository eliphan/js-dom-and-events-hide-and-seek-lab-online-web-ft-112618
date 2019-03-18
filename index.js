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
  let node = document.getElementById('grand-node');
  let nextNode = node.children[ 0 ]
  while ( nextNode ) {
    node = nextNode
    nextNode = node.children[ 0 ]
  }

  return node
}