'use scrict';

let jsbook = {title: 'javaScript入門', price: 2500, stock: 3};


document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price + '円';
document.getElementById('stock').textContent = jsbook.stock;





// for (let p in jsbook){
// 	console.log(p + '=' + jsbook[p]);

// }