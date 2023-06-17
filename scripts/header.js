window.addEventListener('resize', move);
if (window.innerWidth > 1000) {
    document.getElementById('headerMenuList').style.display = 'flex';
    document.getElementById('headerMenuList').style.width = '1000px';
    document.getElementById('header-menu-hidden').style.display = 'none';
} 
if (700 < window.innerWidth && window.innerWidth < 1000) {
    document.getElementById('headerMenuList').style.display = 'flex';
    document.getElementById('headerMenuList').style.width = '90%';
    document.getElementById('header-menu-hidden').style.display = 'none';
} 
if (window.innerWidth <= 700) {
    document.getElementById('header-menu-hidden').style.display = 'flex';
    document.getElementById('headerMenuList').style.display = 'none';
}
function move() {
        if (window.innerWidth > 1000) {
            document.getElementById('headerMenuList').style.display = 'flex';
            document.getElementById('headerMenuList').style.width = '1000px';
            document.getElementById('header-menu-hidden').style.display = 'none';
        } else if (700 < window.innerWidth && window.innerWidth < 1000) {
            document.getElementById('headerMenuList').style.display = 'flex';
            document.getElementById('headerMenuList').style.width = '90%';
            document.getElementById('header-menu-hidden').style.display = 'none';
        } else if (window.innerWidth <= 700) {
            document.getElementById('header-menu-hidden').style.display = 'flex';
            document.getElementById('headerMenuList').style.display = 'none';
        }}
move()
const MenuOpener = document.getElementById('menuOpenBtn');
const MenuCloser = document.getElementById('menuCloser');
// MenuOpener.addEventListener('click', () => {
//     console.log('lll');
//     let posValue = 0;
//     const FuncOfOpen = () => {
//         posValue ++
//         document.getElementById('hidden-menu-block').style.top = posValue + '%';
//     }
//     while (posValue <= 100) {
//     setInterval(FuncOfOpen, 10);
// }
// });
MenuCloser.addEventListener('click', (menuCloser))
MenuOpener.addEventListener('click', (menuOpener))
var id = null;
function menuOpener() {
  var elem = document.getElementById("hidden-menu-block");
  
  var pos = -100;
  var opac = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos++;
      opac += 0.01
      elem.style.top = pos + '%';
      elem.style.opacity = `${opac}`;
    }
  }
  setTimeout(() => {
      const elemList = elem.querySelectorAll('li');
      elemList.forEach(elemli => {
        elemli.style.animation = 'loading 1.5s linear 1';
        elemli.style.opacity = '1';
      })
  }, '1000');
//   elem.getElementsByTagName('li')[0].style.animation = 'loading 2s linear 1'
}
function menuCloser() {
    var elem = document.getElementById("hidden-menu-block");
    var pos = 0;
    var opac = 1;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == -100) {
        clearInterval(id);
      } else {
        pos--;
        opac -= 0.01
        elem.style.top = pos + '%';
        elem.style.opacity = `${opac}`;
      }
    }
    const elemList = elem.querySelectorAll('li');
    elemList.forEach(elemli => {
    elemli.style.animation = 'unset';
    elemli.style.opacity = '0';
  })
  }
