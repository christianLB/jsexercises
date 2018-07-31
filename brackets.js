var tests = [
'[{(())()}]', //YES
'[{]())()}]', //NO
'[{{}())()}}]', //NO
'[{{}())()}}(', //NO
'{[]}', //YES
'{()()}', //YES
'[', //NO
')', //NO
'}{}()[()]', //NO
];

function isOpening(s) {
	return ['[({'].indexOf(s)>-1;
}

function closes(a, b) {// returs true if b closes a.
	return ((a==='[' && b===']') || (a==='(' && b===')') || (a==='{' && b==='}'));
}

let results = tests.map(test => {
  let stack = [];
  Array.from(test).forEach(c => {
    if (isOpening(c)|| !closes(stack[stack.length-1], c)) {
      stack.push(c);
    } else {
     	stack.pop();
    }	  	
  });//map test
  return stack.length===0?'YES':'NO';
});//map tests

alert(results);
