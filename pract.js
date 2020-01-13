

function squareDigits(num){
  var list= [];
  var st = '';
  var numstring = num.toString();
  for(var i=0; i < numstring.length; i++) {
    let j = parseInt(numstring[i]);
    list.push((j*j));
  }
  st = list.join('');
  return st;
}

function highAndLow(numbers){
  var numlist = numbers.split(' ');
  var numlist2 = []
  for(var i=0; i < numlist.length; i++) {
    numlist2.push(parseInt(numlist[i]))
  }
  return (Math.max.apply(null,numlist2) + ' ' + Math.min.apply(null, numlist2));
}

function removeSmallest(numbers) {
  let numbers2 = [...numbers];
  var lowest = Math.min.apply(null, numbers2);
  var index = numbers2.indexOf(lowest);
  numbers2.splice(index,1);
  return numbers;
}

function alphabetPosition(text) {
var ascii = '';
text = text.toLowerCase();
text= text.replace(/[^a-zA-Z]/g , '');
for(var i = 0; i < text.length; i++) {
    ascii += text.charCodeAt(i)-96 ;
    if (i != text.length -1) {
      ascii+= ' ';
    }
}
return ascii;
}



function findOdd(A) {
  var numbers = {};
  var tester = ''
  for(var i=0;i<A.length;i++) {
  numbers[A[i]]=0;
  }
  for(var i=0;i<A.length;i++) {
  numbers[A[i]]+=1;
  }
  for (var prop1 in numbers) {
    if (numbers[prop1]%2 == 1){
      return parseInt(prop1);
    }
  }
}

function duplicateEncode(word){
  var b = '';
  word = word.toLowerCase();
  for(var i = 0; i < word.length; i++) {
    if ((word[i]!='(') && (word[i]!=')')) {
    if (RegExp(word[i]).exec(word.replace(word[i],''))){
      b += ')';
    }
    else {
    b += '('
    }
  }
  }
  return b ;
}



console.log(duplicateEncode('hello'));
