function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy( n ) {
  const rankedLists = document.querySelectorAll( '.ranked-list' );
  for ( let i = 0, l = rankedLists.length; i < l; i++ ) {
    let children = rankedLists[ i ].children
      }
}

function deepestChild() {
  return document.querySelector( '#grand-node div div div div' );
}
