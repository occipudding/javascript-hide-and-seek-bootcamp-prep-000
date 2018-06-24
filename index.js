function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  //return document.getElementById('nested').querySelector('.target'); /*this also works*/
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var lis = document.getElementById('grand-node').querySelectorAll('div');
  var test;
  /*lis.length - 1 bc no div in the last node*/
  for (let i = 0; i < lis.length - 1; i++) {
    
  }
}