import {Catalog} from './catalog.js';
if (document.getElementById('iphone-catalog-wrapper')){
    var sectForProd = document.getElementById('iphone-catalog-wrapper');
    var tagOfProd = 'iph14';
}

if (document.getElementById('iphonePro-catalog-wrapper')){
    var sectForProd = document.getElementById('iphonePro-catalog-wrapper');
    var tagOfProd = 'iph14pro';
}

if (document.getElementById('iphone13-catalog-wrapper')){
    var sectForProd = document.getElementById('iphone13-catalog-wrapper');
    var tagOfProd = 'iph13';
}

if (document.getElementById('iphone12-catalog-wrapper')){
    var sectForProd = document.getElementById('iphone12-catalog-wrapper');
    var tagOfProd = 'iph12';
}

class Products {

    render14() {
        let catalogUL = ''
        Catalog.forEach(({tag, name, price, img}) =>{
            // console.log(id, name, price, img)
            if (tag === tagOfProd){

                catalogUL += `
                <li>
                <img src="${img}" alt="${name}">
                <h2>${name}</h2>
                <p>${price}</p>
                <a href="#" class="btnAdd">Add to cart</a>
                </li>
                `
            }

        })
        const catalogList = `
        <ul class="iphone-catalog-list">
            ${catalogUL}
        </ul>`;
        sectForProd.innerHTML = catalogList
    }
}

const products = new Products();
products.render14();