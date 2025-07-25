import { products } from "./data.js"

import './style.css';
import { products } from './data'; 
import template from './template.hbs';

const listRef = document.querySelector('#product-list');
listRef.innerHTML = template(products);

const searchInput = document.querySelector("#search")
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const filtred = products.filter(products =>
        products.name.toLowerCase().includes(query)
    )
    listRef.innerHTML = template(filtred);
})























































