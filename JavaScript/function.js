function priya() {
  alert('Ready to Get Back')
}

function sub(a, b) {
  let result = a - b;
  alert("A value is:" + a + "B  value is: " + b + " A-B :" + result)
}

var Console = (name) => {
  document.writeln("My name is :" + name)
}

// example  //what is the different function and fat arrow function
//1
function Example() {
  document.writeln('In My Way!')
}
//2
let EX2 = () => {
  alert("Examples of Fat Arrow !")
}
//3
 function Ex3(myname)
{
    alert("Where are you"+myname+"?")
 }
//4
function Ex4(a, b, c) {
  let add = a + b;
  let sub = b - c;
  let div = add / sub;
  let multi = a * c;
  let values = a + (b * c);

  document.writeln("Addition by TWO numbers : " + add)
  document.writeln("Subraction by TWO numbers : " + sub)
  document.writeln("Divition by TWO numbers : " + div)
  document.writeln("Multiplication by TWO numbers : " + multi)
  document.writeln("Math of Three values  : " + values)
}
//5
let EX5 = (m,n,o,p)=>{
    var remainder=(m-(n+o))%p;
    var Div= (m+o)/(n+p);
    var Add = m+n+o+p;
    var Sub=o-p-n-m;
    var Multi=(p*o)*(m*n);
    document.writeln("Remainder of Four  Values  : " + remainder)
    document.writeln("Division of Four  Values  : " + Div)
    document.writeln("Addition of Four  Values  : " +  Add)
    document.writeln("Subraction of Four  Values  : " +  Sub)
    document.writeln("Multiplication of Four  Values  : " +  Multi)
}