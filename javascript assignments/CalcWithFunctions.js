/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
*/

function p(n) {
  if(typeof n === 'number') {
    return n;
  } else {
    if(n.includes('+') || n.includes('n') || n.includes('*') || n.includes('/')) {
      if(['+', 'n', '*', '/'].includes(n[0])) {
        return n;
      } else {
        return parseInt(eval(n.replace('n', '-')));
      }
    }
  }
}


function zero(n=0) {return p(0+n)}
function one(n=0) {return p(1+n)}
function two(n=0) {return p(2+n)}
function three(n=0) {return p(3+n)}
function four(n=0) {return p(4+n)}
function five(n=0) {return p(5+n)}
function six(n=0) {return p(6+n)}
function seven(n=0) {return p(7+n)}
function eight(n=0) {return p(8+n)}
function nine(n=0) {return p(9+n)}

function plus(n=0) {return p('+'+n)}
function minus(n=0) {return p('n'+n)}
function times(n=0) {return p('*'+n)}
function dividedBy(n=0) {return p('/'+n)}