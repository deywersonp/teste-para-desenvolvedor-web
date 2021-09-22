let productList = document.querySelector('.products');

let finish = 10;

for (var i = 1; i <= finish; i++) {
  let img = document.createElement('img');
  img.src = "../images/hd-ssd.svg";
  img.alt = "HD SSD"

  productList.appendChild(img);
}