
/*var item = [
    { name: 'dan', age: 81 },
    { name: 'ben', age: 37 },
    { name: 'grap', age: 45 },
    { name: 'bip', age: 30 },
    { name: 'Magno', age: 23 },
    { name: 'tot', age: 30 }
];
item.sort(function (a, b) {
    return a.age - b.age;
});
  
console.log(item)
*/
var a = [0, 6, 7, 8, 7, 6, 6, 6, 6, 4, 0];
var b =[];
for ( var i =0; i< a.length; i++){
    if (   b.indexOf(a[i]) == -1) {
        b.push(a[i]);
    }
}
console.log(b)
