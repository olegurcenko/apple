if (document.getElementById('mainIndex')) {
    var iphoneSESection = document.getElementById('iphoneSEAds');
    var macBookSection = document.getElementById('macBookAds');
    var eventSection = document.getElementById('eventSection');
    var iphone14Section = document.getElementById('iphone14');
    window.addEventListener('resize', move);
    function move() {
        if (window.innerWidth > 900){
            // !macbook section
            macBookSection.style.justifyContent = 'space-between';
            // !iphoneSE section
            iphoneSESection.style.flexDirection = 'row';
            iphoneSESection.style.justifyContent = 'center';
            iphoneSESection.getElementsByTagName('img')[1].style.height = '100%';
            // !event section
            // eventSection.getElementsByTagName('img')[0].style.height = '70%';
            // eventSection.getElementsByTagName('span')[0].style.bottom = '45%';
            // !iphone 14 section
            iphone14Section.getElementsByTagName('img')[0].style.width = '100%';
        }
        if (500 < window.innerWidth && window.innerWidth < 900) {
            // ! iphoneSE section
            iphoneSESection.style.flexDirection = 'column';
            iphoneSESection.style.alignItems = 'center';
            iphoneSESection.style.justifyContent = 'space-between';
            iphoneSESection.getElementsByTagName('img')[1].style.width = 'fit-content';
            iphoneSESection.getElementsByTagName('img')[1].style.height = '60%';
            iphoneSESection.getElementsByTagName('ul')[0].style.marginTop = '20px';
            // !iphone14 section
            iphone14Section.getElementsByTagName('img')[0].style.width = '300%';
            // document.getElementsByClassName('btns').getElementsByTagName('li').getElementsByTagName('a')
            // !macBook section
            macBookSection.getElementsByTagName('img')[0].style.width = '105%';
            macBookSection.getElementsByTagName('img')[0].style.height = 'auto';
            macBookSection.style.justifyContent = 'flex-End';
            // !event section
            // eventSection.getElementsByTagName('img')[0].style.height = '50%';
            // eventSection.getElementsByTagName('span')[0].style.bottom = '30%';
        }
        if (window.innerWidth < 500) {
            // !iphoneSE section
            iphoneSESection.getElementsByTagName('img')[1].style.height = '60%';
            iphoneSESection.style.flexDirection = 'column';
            iphoneSESection.style.alignItems = 'center';
            iphoneSESection.getElementsByTagName('img')[1].style.marginTop = '20px';
            iphoneSESection.getElementsByTagName('ul')[0].style.width = '90%';
            // !macBook section
            macBookSection.getElementsByTagName('img')[0].style.width = '100%';
            macBookSection.getElementsByTagName('img')[0].style.height = 'auto';
            macBookSection.getElementsByTagName('ul')[0].style.width = '80%';
            // macBookSection.getElementsByTagName('ul')[0]
            // !iphone14 section
            iphone14Section.getElementsByTagName('img')[0].style.width = '250%';
            iphone14Section.getElementsByTagName('ul')[0].style.width = '90%';
            // !event section
            // eventSection.getElementsByTagName('img')[0].style.height = '50%';
            // eventSection.getElementsByTagName('span')[0].style.bottom = '30%';

        }
    }
    move()
}
if (document.getElementById('mainIphone')) {
    window.addEventListener('resize', moveIphone);
    var iphoneSESection = document.getElementById('iphoneSEAds');
    var iphone14ProSection = document.getElementById('iphone14pro-sect');
    var iphone14Section = document.getElementById('iphone14-sect');
    var guidedTourSection = document.getElementById('guided-tour-sect');
    function moveIphone() {
        if (window.innerWidth > 1000) {
            // ! catalog section
            document.getElementsByClassName('catalog-list')[0].style.width = '80%';
        }
        if (window.innerWidth > 900){
            // !guided tour section
            guidedTourSection.getElementsByTagName('figure')[0].style.backgroundPositionX = '60%';
            // !iphoneSE section
            iphoneSESection.style.flexDirection = 'row';
            iphoneSESection.style.justifyContent = 'center';
            iphoneSESection.getElementsByTagName('img')[1].style.height = '100%';
            // !iphone 14 pro section
            iphone14ProSection.getElementsByTagName('figure')[0].style.backgroundSize = '140%';
            // !iphone 14 section
            iphone14Section.getElementsByTagName('img')[1].style.width = '950px';
        }
        if (500 < window.innerWidth && window.innerWidth < 900) {
            // !catalog section
            document.getElementsByClassName('catalog-list')[0].style.width = '95%';
            document.getElementsByClassName('catalog-list')[0].style.justifyContent = 'unset';
            // ! iphoneSE section
            iphoneSESection.style.flexDirection = 'column';
            iphoneSESection.style.alignItems = 'center';
            iphoneSESection.style.justifyContent = 'space-between';
            iphoneSESection.getElementsByTagName('img')[1].style.height = '60vh';
            // iphoneSESection.getElementsByTagName('img')[1].style.height = '60%';
            iphoneSESection.getElementsByTagName('ul')[0].style.marginBlock = '20px';
            // !iphone 14 pro section
            iphone14ProSection.getElementsByTagName('figure')[0].style.backgroundSize = '300%';
            // !iphone 14 section
            iphone14Section.getElementsByTagName('img')[1].style.width = '100%';
        }
        if (window.innerWidth < 500) {
            // !iphoneSE section
            iphoneSESection.getElementsByTagName('img')[1].style.height = '50vh';
            iphoneSESection.style.flexDirection = 'column';
            iphoneSESection.style.alignItems = 'center';
            iphoneSESection.getElementsByTagName('img')[1].style.marginTop = '20px';
            iphoneSESection.getElementsByTagName('ul')[0].style.width = '90%';}
            // !iphone 14 section
            iphone14Section.getElementsByTagName('img')[1].style.width = '100vw';
            // !guided tour section
            guidedTourSection.getElementsByTagName('figure')[0].style.backgroundPositionX = '75%';

        }
    moveIphone()
}


if (document.getElementById('main-gallery')) {
    window.addEventListener('resize', moveGallery);

    function moveGallery() {
        if (window.innerWidth > 750) {
            // ! catalog section
            document.getElementsByClassName('catalog-list')[0].style.width = '100%';
            document.getElementsByClassName('catalog-list')[0].style.justifyContent = 'center';
        }
        if (500 < window.innerWidth && window.innerWidth < 750){
            // !catalog section
            document.getElementsByClassName('catalog-list')[0].style.width = '95%';
            document.getElementsByClassName('catalog-list')[0].style.justifyContent = 'unset';
        }
    }
    moveGallery()
}