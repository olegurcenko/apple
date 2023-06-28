import CatalogMac from "./mac-catalog.js";





console.log()
// ! chip filter btns
var btn13m1 = document.getElementById('choice1');
var btn13m2 = document.getElementById('choice2');
var btn15m2 = document.getElementById('choice3');

// ! color filter btns
var btnMidnight = document.getElementById('colorBtnMidnight');
var btnStarlight = document.getElementById('colorBtnStarlight');
var btnSpaceGray = document.getElementById('colorBtnSpaceGray');
var btnSilver = document.getElementById('colorBtnSilver');
var btnGold = document.getElementById('colorBtnGold');


var macSection = document.getElementById('mac-catalog-wrapper');



var m113incBox = `<section class="whatsInBox">
<h1>What’s in the Box</h1>
<ul>
    <li>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-box-hw-201810_FMT_WHH?wid=280&hei=372&fmt=p-jpg&qlt=95&.v=1539378343509" alt="">
        <p>13-inch MacBook Air with M1 chip</p>
    </li>
    <li>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-box-cable-201810_FMT_WHH?wid=280&hei=372&fmt=p-jpg&qlt=95&.v=1539378741433" alt="">
        <p>USB-C Charge Cable (2 m)</p>
    </li>
    <li>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-box-adapter-201810_FMT_WHH?wid=280&hei=372&fmt=p-jpg&qlt=95&.v=1539295994256" alt="">
        <p>30W USB-C Power Adapter</p>
    </li>
</ul>
</section>`;


var m213incBox = `<section class="whatsInBox">
<h1>What’s in the Box</h1>
<ul>
    <li>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-witb-20220606_FMT_WHH?wid=280&hei=371&fmt=p-jpg&qlt=95&.v=1653093839308" alt="">
        <p>13-inch MacBook Air with M2 chip</p>
    </li>
    <li>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-cable-witb-20220606_FMT_WHH?wid=280&hei=371&fmt=p-jpg&qlt=95&.v=1653093839199" alt="">
        <p>USB-C to MagSafe 3 Cable (2 m)</p>
    </li>
    <li>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-power-witb-20220606_FMT_WHH?wid=280&hei=371&fmt=p-jpg&qlt=95&.v=1653093839111" alt="">
        <p>USB-C Power Adapter</p>
    </li>
</ul>
</section>`;


var m215incBox = `<section class="whatsInBox">
<h1>What’s in the Box</h1>
<ul>
    <li>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-witb-202306_FMT_WHH?wid=280&hei=372&fmt=p-jpg&qlt=95&.v=1684188854589" alt="">
        <p>15-inch MacBook Air with M2 chip</p>
    </li>
    <li>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-cable-witb-202306_FMT_WHH?wid=280&hei=372&fmt=p-jpg&qlt=95&.v=1684188854564" alt="">
        <p>USB-C to MagSafe 3 Cable (2 m)</p>
    </li>
    <li>
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-adapter-202306_FMT_WHH?wid=280&hei=372&fmt=p-jpg&qlt=95&.v=1684188852730" alt="">
        <p>USB-C Power Adapter</p>
    </li>
</ul>
</section>`;


var boxIn = '';


const funcAddMac = (mac) => {
    let elem = `
    <section class="mac-catalog-elem">
                    <ul>
                        <li><img src="${mac.mainImg}" alt="" class="computer"></li>
                        <li>
                            <p class="color-text">${mac.colorText}</p>
                        </li>
                        <li><img src="${mac.colorImg}" alt="" class="color"></li>
                        <li><img src="${mac.chip}" alt="" class="chip"></li>
                        <li><p class="cpu">${mac.cpu}</p></li>
                        <li><p class="gpu">${mac.gpu}</p></li>
                        <li><p class="memoryRam">${mac.memoryRam}</p></li>
                        <li><p class="memory">${mac.memory}</p></li>
                        <li><p class="cores">${mac.cores}</p></li>
                        <li><p class="display">${mac.display}</p></li>
                        <li><p class="camera">${mac.camera}</p></li>
                        <li><p class="chargPort">${mac.chargPort}</p></li>
                        <li><p class="outputs">${mac.outputs}</p></li>
                        <li><p class="accessSecure">${mac.accessSecure}</p></li>
                        <li><p class="trackPad">${mac.trackPad}</p></li>
                        <li><p class="chAdapter">${mac.chAdapter}</p></li>
                        <li><p class="price">${mac.price}</p></li>
                        <li><a href="#" class="buy">Select</a></li>
                    </ul>
                </section>`;
    return elem
}


let macs;
let actMacs = []

const functionm113 = () => {
    macs = '';
    actMacs = [];
    boxIn = m113incBox;
    CatalogMac.forEach((mac) => {
        if (mac.chipName == 'm1'){
            macs += funcAddMac(mac)
            actMacs.push(mac)

            // console.log(mac)
        }
    })
    macSection.innerHTML = macs
    macSection.innerHTML += boxIn
    
}

const functionm213 = () => {
    macs = '';
    actMacs = [];
    boxIn = m213incBox
    CatalogMac.forEach((mac) => {
        if (mac.chipName == 'm2' && mac.display == '13.6-inch Liquid Retina display with True Tone'){
            macs += funcAddMac(mac)
            actMacs.push(mac)

            // console.log(mac)
        }
    })
    macSection.innerHTML = macs
    macSection.innerHTML += boxIn
}

const functionm215 = () => {
    macs = '';
    actMacs = [];
    boxIn = m215incBox
    CatalogMac.forEach((mac) => {
        if (mac.chipName == 'm2' && mac.display == '15.3-inch Liquid Retina display with True Tone'){
            actMacs.push(mac)
            macs += funcAddMac(mac)
            // console.log(mac)
        }
    })
    macSection.innerHTML = macs
    macSection.innerHTML += boxIn
}

const colorFilterMidnight = () => {
    let colorMacs = '';
    actMacs.forEach((mac) => {
        if (mac.colorText == 'Midnight'){
            colorMacs += funcAddMac(mac)
            // console.log(mac)
        }
    })
    if (colorMacs.length == 0){
        macSection.innerHTML = '<h1 class="zeroResults">Sorry<br>We found nothing</h1>'
        return
    }
    macSection.innerHTML = colorMacs
    macSection.innerHTML += boxIn
}

const colorFilterStarlight = () => {
    let colorMacs = '';
    actMacs.forEach((mac) => {
        if (mac.colorText == 'Starlight'){
            colorMacs += funcAddMac(mac)
            // console.log(mac)
        }
    })
    if (colorMacs.length == 0){
        macSection.innerHTML = '<h1 class="zeroResults">Sorry<br>We found nothing</h1>'
        return
    }
    macSection.innerHTML = colorMacs
    macSection.innerHTML += boxIn
}

const colorFilterSpaceGray = () => {
    let colorMacs = '';
    actMacs.forEach((mac) => {
        if (mac.colorText == 'Space Gray'){
            colorMacs += funcAddMac(mac)
            // console.log(mac)
        }
    })
    if (colorMacs.length == 0){
        macSection.innerHTML = '<h1 class="zeroResults">Sorry<br>We found nothing</h1>'
        return
    }
    macSection.innerHTML = colorMacs
    macSection.innerHTML += boxIn
}

const colorFilterSilver = () => {
    let colorMacs = '';
    actMacs.forEach((mac) => {
        if (mac.colorText == 'Silver'){
            colorMacs += funcAddMac(mac)
            // console.log(mac)
        }
    })
    if (colorMacs.length == 0){
        macSection.innerHTML = '<h1 class="zeroResults">Sorry<br>We found nothing</h1>'
        return
    }
    macSection.innerHTML = colorMacs
    macSection.innerHTML += boxIn
}

const colorFilterGold = () => {
    let colorMacs = '';
    actMacs.forEach((mac) => {
        if (mac.colorText == 'Gold'){
            colorMacs += funcAddMac(mac)
            // console.log(mac)
        }
    })
    if (colorMacs.length == 0){
        macSection.innerHTML = '<h1 class="zeroResults">Sorry<br>We found nothing</h1>'
        return
    }
    macSection.innerHTML = colorMacs
    macSection.innerHTML += boxIn
}


const renderMac = () => {
    macs = '';
    actMacs = [];
    CatalogMac.forEach((mac) => {
        actMacs.push(mac)
        macs += funcAddMac(mac)
            // console.log(mac)
    })
    macSection.innerHTML = macs
}

btn13m1.addEventListener('click', functionm113);
btn13m2.addEventListener('click', functionm213);
btn15m2.addEventListener('click', functionm215);
btnMidnight.addEventListener('click', colorFilterMidnight)
btnStarlight.addEventListener('click', colorFilterStarlight)
btnSpaceGray.addEventListener('click', colorFilterSpaceGray)
btnSilver.addEventListener('click', colorFilterSilver)
btnGold.addEventListener('click', colorFilterGold)

// btnMidnight.addEventListener('click', function(e){
//     e.preventDefault()
// })
renderMac()

console.log(actMacs)






