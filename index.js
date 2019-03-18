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
  let nextNode = grandNode.children[ 0 ]
  while ( nextNode ) {
    node = nextNode
    nextNode = grandNodenode.children[ 0 ]
  }

  return node
}