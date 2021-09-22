let kartModal = document.querySelector('#kart-modal');
let html = document.querySelector('html');
let body = document.querySelector('body');
let id = 1;

let kartModalContainer = document.querySelector('.kart-modal-container');

function currentId() {
  id++;
  return id;
}

function addToKart() {
  let imgSource = document.querySelector('.main-content img');
  let productName = document.querySelector('.main-info h2');
  let productPrice = document.querySelector('.secondary-info .price-second-paragraph');

  let div = document.createElement('div');
  div.classList.add(`product-${currentId()}`);
  kartModalContainer.appendChild(div);

  let img = document.createElement('img');
  img.src = `${imgSource.src}`;
  img.alt = `${imgSource.alt}`;
  div.appendChild(img);

  let p = document.createElement('p');
  p.innerText = productName.innerText;
  div.appendChild(p);

  let span = document.createElement('span');
  span.innerText = productPrice.innerText;
  div.appendChild(span);

  let button = document.createElement('button');
  button.innerText = "Remover do carrinho";
  button.classList.add(`${id}`);
  button.addEventListener('click', removeProduct);
  div.appendChild(button);
}

function showKart() {
  kartModal.classList.add('active');
  html.classList.add('disabled');
  body.classList.add('disabled');
}

function closeKart() {
  kartModal.classList.remove('active');
  html.classList.remove('disabled');
  body.classList.remove('disabled');
}

function removeProduct(event) {
  let buttonClass = event.currentTarget.classList[0];
  let product = document.querySelector(`.product-${buttonClass}`)

  kartModalContainer.removeChild(product);
}