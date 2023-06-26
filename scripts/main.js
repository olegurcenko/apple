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
            // iphoneSESection.getElementsByTagName('ul')[0].style.marginTop = '20px';
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
            iphoneSESection.getElementsByTagName('img')[1].style.height = '65%';
            iphoneSESection.style.flexDirection = 'column';
            iphoneSESection.style.alignItems = 'center';
            // iphoneSESection.getElementsByTagName('img')[1].style.marginTop = '20px';
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
            iphone14ProSection.getElementsByTagName('figure')[0].style.backgroundSize = '180%';
            // !iphone 14 section
            iphone14Section.getElementsByTagName('img')[1].style.width = '100%';
        }
        if (window.innerWidth < 500) {
            // !catalog section
            document.getElementsByClassName('catalog-list')[0].style.justifyContent = 'unset';
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
if (document.getElementById('macCompare')){
    var btnLaptop = document.getElementById('laptop');
    var btnDesktop = document.getElementById('desktop');
    var sectionRewrite = document.getElementById('macCompare');
    var btnsLaptopDesktop = document.getElementById('btnsBlock');


    btnDesktop.addEventListener('click', function(e) {
        e.preventDefault();
    })
    btnLaptop.addEventListener('click', function(e) {
        e.preventDefault();
    })
    btnLaptop.addEventListener('click', function() {
        if (btnsLaptopDesktop.classList.contains('desktop-gradient')){
            btnsLaptopDesktop.classList.remove('desktop-gradient')
            btnsLaptopDesktop.classList.add('laptop-gradient')
            sectionRewrite.innerHTML = `<ul class="compareList">
            <li class="compare-elem">
                <ul class="elem-list">
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mba_m1__9d4o64w6wv6m_large.png"
                            alt=""></li>
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_swatches_three_colors__bagzlsvl2ehu_large.png"
                            alt=""></li>
                    <li>
                        <ul class="computer-title">
                            <li>
                                <p class="title">MacBook Air 13”</p>
                            </li>
                            <li>
                                <p class="chip">M1 chip</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p class="description">The most affordable Mac laptop<br>to get things done on the go.
                        </p>
                    </li>
                    <li>
                        <p class="price">From $83.25/mo. for 12 mo.<br>or $999**</p>
                    </li>
                    <li>
                        <ul class="btns">
                            <li><a class="buy" href="./iphone-catalog.html">Buy</a></li>
                            <li><a href="./iphone-catalog.html">Learn more ></a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                    <li>
                        <ul class='display'>
                            <li>
                                <p>13.3”</p>
                            </li>
                            <li>
                                <p>Retina display</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large.png" alt="">
                            <figcaption>Apple M1 chip</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="cpulist">
                            <li></li>
                            <li>
                                <p>8-core</p>
                            </li>
                            <li>
                                <p>CPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="gpuList">
                            <li>
                                <p></p>
                            </li>
                            <li>
                                <p>7-core</p>
                            </li>
                            <li>
                                <p>GPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="memoryram"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png" alt="">
                            <figcaption>Up to 16GB<br>unified memory</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="memory">
                            <li>
                                <p>2TB</p>
                            </li>
                            <li>
                                <p>Maximum configurable<br>storage</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="battery"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large.png" alt="">
                            <figcaption>Up to 18 hours battery life</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure class="camera"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_camera__dlxow9r3leie_large.png" alt="">
                            <figcaption>720p FaceTime HD camera</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure class="audio"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_mic__bkm7awuvc5qu_large.png" alt="">
                            <figcaption>
                                <p>Three‑mic array<br>Stereo speakers</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="weight">
                            <li>
                                <p>2.8 lb.</p>
                            </li>
                            <li>
                                <p>Weight</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="accessSecure"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large.png" alt="">
                            <figcaption>Touch ID</figcaption>
                        </figure>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                </ul>
            </li>
            <li class="compare-elem">
                <ul class="elem-list">
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mba_13_15__beo01ewpngky_large.png"
                            alt=""></li>
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_swatches_four_colors__f837h0qw6oyi_large.png" alt=""></li>
                    <li>
                        <ul class="computer-title">
                            <li>
                                <p class="title">MacBook Air<br>13” and 15”</p>
                            </li>
                            <li>
                                <p class="chip">M2 chip</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p class="description">Strikingly thin and fast so you<br>can work, play, or<br>create anywhere.</p>
                    </li>
                    <li>
                        <p class="price">From $91.58/mo. for 12 mo.<br>or $1099**</p>
                    </li>
                    <li>
                        <ul class="btns">
                            <li><a class="buy" href="./iphone-catalog.html">Buy</a></li>
                            <li><a href="./iphone-catalog.html">Learn more ></a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                    <li>
                        <ul class='display'>
                            <li>
                                <p>13.6” or 15.3”</p>
                            </li>
                            <li>
                                <p>Liquid Retina display</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_m2__c5vv0ufcdyc2_large.png" alt="">
                            <figcaption>Apple M2 chip</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="cpulist">
                            <li></li>
                            <li>
                                <p>8-core</p>
                            </li>
                            <li>
                                <p>CPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="gpuList">
                            <li>
                                <p>Up to</p>
                            </li>
                            <li>
                                <p>10-core</p>
                            </li>
                            <li>
                                <p>GPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="memoryram"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png" alt="">
                            <figcaption>Up to 24GB<br>unified memory</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="memory">
                            <li>
                                <p>2TB</p>
                            </li>
                            <li>
                                <p>Maximum configurable<br>storage</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="battery"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large.png" alt="">
                            <figcaption>Up to 18 hours battery life</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure class="camera"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_camera__dlxow9r3leie_large.png" alt="">
                            <figcaption>1080p FaceTime HD camera</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure class="audio"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_mic__bkm7awuvc5qu_large.png" alt="">
                            <figcaption>
                                <p>Three‑mic array<br>Four- or six-speaker sound<br>system with Spatial Audio</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="weight">
                            <li>
                                <p>2.7 lb. or 3.3 lb.</p>
                            </li>
                            <li>
                                <p>Weight</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="accessSecure"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large.png" alt="">
                            <figcaption>Touch ID</figcaption>
                        </figure>
                    </li>
                    <li>
                        <div></div>
                    </li>
                </ul>
            </li>
            <li class="compare-elem">
                <ul class="elem-list">
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mbp_13__b9nj45t4tcya_large.png"
                            alt=""></li>
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_swatches_two_colors__dfe181bip0ya_large.png" alt=""></li>
                    <li>
                        <ul class="computer-title">
                            <li>
                                <p class="title">MacBook Pro 13”</p>
                            </li>
                            <li>
                                <p class="chip">M2 chip</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p class="description">Serious capability in our most<br>portable pro laptop.</p>
                    </li>
                    <li>
                        <p class="price">From $108.25/mo. for 12 mo.<br>or $1299**</p>
                    </li>
                    <li>
                        <ul class="btns">
                            <li><a class="buy" href="./iphone-catalog.html">Buy</a></li>
                            <li><a href="./iphone-catalog.html">Learn more ></a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                    <li>
                        <ul class='display'>
                            <li>
                                <p>13.3”</p>
                            </li>
                            <li>
                                <p>Retina display</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_m2__c5vv0ufcdyc2_large.png" alt="">
                            <figcaption>Apple M2 chip</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="cpulist">
                            <li></li>
                            <li>
                                <p>8-core</p>
                            </li>
                            <li>
                                <p>CPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="gpuList">
                            <li>
                                <p></p>
                            </li>
                            <li>
                                <p>10-core</p>
                            </li>
                            <li>
                                <p>GPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="memoryram"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png" alt="">
                            <figcaption>Up to 24GB<br>unified memory</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="memory">
                            <li>
                                <p>2TB</p>
                            </li>
                            <li>
                                <p>Maximum configurable<br>storage</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="battery"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large.png" alt="">
                            <figcaption>Up to 20 hours battery life</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure class="camera"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_camera__dlxow9r3leie_large.png" alt="">
                            <figcaption>720p FaceTime HD camera</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure class="audio"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_mic__bkm7awuvc5qu_large.png" alt="">
                            <figcaption>
                                <p>Studio-quality<br>three‑mic array<br>Stereo speakers with<br>Spatial Audio</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="weight">
                            <li>
                                <p>3.0 lb.</p>
                            </li>
                            <li>
                                <p>Weight</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="accessSecure"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_touch_id_touch_bar__e6rwp5pfboae_large.png" alt="">
                            <figcaption>Touch Bar and Touch ID</figcaption>
                        </figure>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                </ul>
            </li>
            <li class="compare-elem">
                <ul class="elem-list">
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_mbp_14_16__gmrk71zzfoq6_large.png"
                            alt=""></li>
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_swatches_two_colors__dfe181bip0ya_large.png" alt=""></li>
                    <li>
                        <ul class="computer-title">
                            <li>
                                <p class="title">MacBook Pro<br>14” and 16”</p>
                            </li>
                            <li>
                                <p class="chip">M2 Pro or M2 Max chip</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p class="description">The most advanced Mac laptops<br>for demanding workflows.</p>
                    </li>
                    <li>
                        <p class="price">From $166.58/mo. for 12 mo.<br>or $1999**</p>
                    </li>
                    <li>
                        <ul class="btns">
                            <li><a class="buy" href="./iphone-catalog.html">Buy</a></li>
                            <li><a href="./iphone-catalog.html">Learn more ></a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                    <li>
                        <ul class='display'>
                            <li>
                                <p>14.2” or 16.2”</p>
                            </li>
                            <li>
                                <p>Liquid Retina XDR display</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_m2_pro_and_max__f125hswpyeem_large.png" alt="">
                            <figcaption>Apple M2 Pro or<br>Apple M2 Max chip</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="cpulist">
                            <li>
                                <p>Up to</p>
                            </li>
                            <li>
                                <p>12-core</p>
                            </li>
                            <li>
                                <p>CPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="gpuList">
                            <li>
                                <p>Up to</p>
                            </li>
                            <li>
                                <p>38-core</p>
                            </li>
                            <li>
                                <p>GPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="memoryram"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png" alt="">
                            <figcaption>Up to 96GB<br>unified memory</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="memory">
                            <li>
                                <p>8TB</p>
                            </li>
                            <li>
                                <p>Maximum configurable<br>storage</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="battery"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large.png" alt="">
                            <figcaption>Up to 22 hours battery life</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure class="camera"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_camera__dlxow9r3leie_large.png" alt="">
                            <figcaption>1080p FaceTime HD camera</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure class="audio"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_mic__bkm7awuvc5qu_large.png" alt="">
                            <figcaption>
                                <p>Studio-quality<br>three‑mic array<br>Six-speaker sound system<br>with Spatial Audio</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class="weight">
                            <li>
                                <p>3.5 lb. or 4.7 lb.</p>
                            </li>
                            <li>
                                <p>Weight</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="accessSecure"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large.png" alt="">
                            <figcaption>Touch ID</figcaption>
                        </figure>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                </ul>
            </li>
        </ul>`

        }
    })
    btnDesktop.addEventListener('click', function() {
        if (btnsLaptopDesktop.classList.contains('laptop-gradient')){
            btnsLaptopDesktop.classList.remove('laptop-gradient')
            btnsLaptopDesktop.classList.add('desktop-gradient')
            sectionRewrite.innerHTML = `<ul class="comparelistMac">
            <li class="compare-elem">
                <ul class="elem-list">
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_imac24__bdgus6d1xqb6_large.png"
                            alt=""></li>
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_swatches_multicolor__ese4oyi8w4mu_large.png"
                            alt=""></li>
                    <li>
                        <p class="title">iMac</p>
                    </li>
                    <li>
                        <p class="description">A stunning all-in-one desktop for<br>creativity and productivity.
                        </p>
                    </li>
                    <li>
                        <p class="price">From $108.25/mo. for 12 mo.<br>or $1299**</p>
                    </li>
                    <li>
                        <ul class="btns">
                            <li><a class="buy" href="./iphone-catalog.html">Buy</a></li>
                            <li><a href="./iphone-catalog.html">Learn more ></a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                    <li>
                        <figure class="chip"><img
                                src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large.png"
                                alt="">
                            <figcaption>Apple M1 chip</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class='cpulist'>
                            <li>
                                <p></p>
                            </li>
                            <li>
                                <p>8-core</p>
                            </li>
                            <li>
                                <p>CPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class='gpulist'>
                            <li>
                                <p>Up to</p>
                            </li>
                            <li>
                                <p>8-core</p>
                            </li>
                            <li>
                                <p>GPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="memoryram"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png" alt="">
                            <figcaption>Up to 16GB unified memory<br>For increased performance<br>and power efficiency</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class='memory'><li><p>2TB</p></li><li><p>Maximum configurable<br>storage</p></li></ul>
                    </li>
                    <li>
                        <ul class='display'><li><p>4.5K</p></li><li><p>Retina display</p></li><li><p>218 ppi</p></li></ul>
                    </li>
                    <li>
                        <figure class="camera"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_camera__dlxow9r3leie_large.png" alt="">
                            <figcaption>1080p FaceTime HD camera<br>
                                With the image signal<br>processor of M1 for drastically<br>improved performance</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure class="accessecure"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_touch_id_keyboard__ffqg4zbmbwey_large.png" alt="">
                            <figcaption>Configurable with<br>Magic Keyboard with Touch ID<br>and Numeric Keypad</figcaption>
                        </figure>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                </ul>
            </li>
            <li class="compare-elem">
                <ul class="elem-list">
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_macmini__b77zzeep1s6a_large.png" alt=""></li>
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_swatches_one_color_mac_mini__p7b5kq4gd76i_large.png" alt=""></li>
                    <li>
                        <p class="title">Mac mini</p>
                    </li>
                    <li>
                        <p class="description">The most affordable Mac<br>desktop with outsized<br>performance.</p>
                    </li>
                    <li>
                        <p class="price">From $49.91/mo. for 12 mo.<br>or $599**</p>
                    </li>
                    <li>
                        <ul class="btns">
                            <li><a class="buy" href="./iphone-catalog.html">Buy</a></li>
                            <li><a href="./iphone-catalog.html">Learn more ></a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                    <li>
                        <figure class="chip"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_m2_and_pro__etnd8ga0x10m_large.png" alt="">
                            <figcaption>Apple M2 or<br>Apple M2 Pro chip</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class='cpulist'>
                            <li>
                                <p>Up to</p>
                            </li>
                            <li>
                                <p>12-core</p>
                            </li>
                            <li>
                                <p>CPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class='gpulist'>
                            <li>
                                <p>Up to</p>
                            </li>
                            <li>
                                <p>19-core</p>
                            </li>
                            <li>
                                <p>GPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="memoryram"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png" alt="">
                            <figcaption>Up to 32GB unified memory<br>For increased performance<br>and power efficiency</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class='memory'><li><p>8TB</p></li>
                            <li><p>Maximum configurable<br>storage</p></li></ul>
                    </li>
                    <li>
                        <div class="minus">-</div>
                    </li>
                    <li>
                        <div class="minus">-</div>
                    </li>
                    <li>
                        <div class="minus">-</div>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                </ul>
            </li>
            <li class="compare-elem">
                <ul class="elem-list">
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_macstudio__dg371ccau70i_large.png" alt=""></li>
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_swatches_one_color__fk3qx0i2y96y_large.png" alt=""></li>
                    <li>
                        <p class="title">Mac Studio</p>
                    </li>
                    <li>
                        <p class="description">Powerful performance and<br>extensive connectivity for<br>pro workflows.</p>
                    </li>
                    <li>
                        <p class="price">From $166.58/mo. for 12 mo.<br>or $1999</p>
                    </li>
                    <li>
                        <ul class="btns">
                            <li><a class="buy" href="./iphone-catalog.html">Buy</a></li>
                            <li><a href="./iphone-catalog.html">Learn more ></a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                    <li>
                        <figure class="chip"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_m2_max_and_ultra__bqgkecprlbf6_large.png" alt="">
                            <figcaption>Apple M2 Max or<br>Apple M2 Ultra chip</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class='cpulist'>
                            <li>
                                <p>Up to</p>
                            </li>
                            <li>
                                <p>24-core</p>
                            </li>
                            <li>
                                <p>CPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class='gpulist'>
                            <li>
                                <p>Up to</p>
                            </li>
                            <li>
                                <p>76-core</p>
                            </li>
                            <li>
                                <p>GPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="memoryram"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png" alt="">
                            <figcaption>Up to 192GB unified memory<br>For increased performance<br>and power efficiency</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class='memory'><li><p>8TB</p></li><li><p>Maximum configurable<br>storage</p></li></ul>
                    </li>
                    <li>
                        <div class="minus">-</div>
                    </li>
                    <li>
                        <div class="minus">-</div>
                    </li>
                    <li>
                        <div class="minus">-</div>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                </ul>
            </li>
            <li class="compare-elem">
                <ul class="elem-list">
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_macpro__cj3i514iwpua_large.png" alt=""></li>
                    <li><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_swatches_one_color__fk3qx0i2y96y_large.png" alt=""></li>
                    <li>
                        <p class="title">Mac Pro</p>
                    </li>
                    <li>
                        <p class="description">A pro workstation with PCI<br>expansion for demanding<br>workflows.</p>
                    </li>
                    <li>
                        <p class="price">From $583.25/mo. for 12 mo.<br>or $6999</p>
                    </li>
                    <li>
                        <ul class="btns">
                            <li><a class="buy" href="./iphone-catalog.html">Buy</a></li>
                            <li><a href="./iphone-catalog.html">Learn more ></a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                    <li>
                        <figure class="chip"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_m2_ultra__fedwifuaihui_large.png" alt="">
                            <figcaption>Apple M2 Ultra chip</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class='cpulist'>
                            <li>
                                <p></p>
                            </li>
                            <li>
                                <p>24-core</p>
                            </li>
                            <li>
                                <p>CPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class='gpulist'>
                            <li>
                                <p>Up to</p>
                            </li>
                            <li>
                                <p>76-core</p>
                            </li>
                            <li>
                                <p>GPU</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <figure class="memoryram"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png" alt="">
                            <figcaption>Up to 192GB unified memory<br>For increased performance<br>and power efficiency</figcaption>
                        </figure>
                    </li>
                    <li>
                        <ul class='memory'><li><p>8TB</p></li><li><p>Maximum configurable<br>storage</p></li></ul>
                    </li>
                    <li>
                        <div class="minus">-</div>
                    </li>
                    <li>
                        <div class="minus">-</div>
                    </li>
                    <li>
                        <figure class="accessecure"><img src="https://www.apple.com/v/mac/home/bu/images/overview/compare/compare_icon_touch_id_keyboard__ffqg4zbmbwey_large.png" alt="">
                            <figcaption>Magic Keyboard with<br>Touch ID and<br>Numeric Keypad</figcaption>
                        </figure>
                    </li>
                    <li>
                        <div class="line"></div>
                    </li>
                </ul>
            </li>
        </ul>`
        }
    })
    
}