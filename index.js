function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy( n ) {
let ranksOfElements = document.querySelectorAll('ul.ranked-list');
return parseInt(ranksOfElements) + n;
}

function deepestChild() {
  return document.querySelector( '#grand-node div div div div' );
}