function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

let rankOfElement = document.querySelectorAll('ul.ranked-list li');
let increaseRankBy = ( n => { return rankOfElement.parseInt() }


function deepestChild() {
  return document.querySelectorAll('div.grand-node');
}