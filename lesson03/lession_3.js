// iterations
for (var count = 1; count <= 10; count++)
    console.log(count)

//or

var count = 0;
for (;count <= 10;)
    console.log(count++);

// for in

var obj = {name:'Alex', password:'12345'};
for (var i in obj)
{
    console.log(obj[i]);
}

// а-ля бесконечный цикл

var n = 10;
var i = 1;
while (true){
   console.log(i++);
   if (i > n)
      break;
}


var n = 10;
var i = 1;
while (true){
   if (i % 2 == 0)
      continue;
   console.log(i++);
}


var arr = [];
arr.push('zero');
arr.push('one',2);
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}