const images = [
    {'id' : '1', 'url':'./lw.jpg'},
    {'id' : '2', 'url':'./hcj.jpg'},
    {'id' : '1', 'url':'./pp.png'},
    {'id' : '2', 'url':'./pm.png'},
    {'id' : '3', 'url':'./vj.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images,containerItems);

let items = document.querySelectorAll('.item');

const proximo = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const anterior = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#anterior').addEventListener('click',anterior);
document.querySelector('#proximo').addEventListener('click',proximo);