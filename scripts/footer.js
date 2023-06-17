// var Items = document.querySelectorAll('.dropbtn');

// Items.forEach(function (item) {

//     item.addEventListener('click', function () {
//         this.classList.toggle('show');
//     });});
// var LittleFooter = document.getElementById('littleFooter');
// var MainFooter = document.getElementById('mainFooter');

// window.addEventListener('resize', FooterMove);

// function FooterMove() {
//     if (window.innerWidth > 1000) { 
//         LittleFooter.style.display = 'none';
//         MainFooter.style.display = 'block';
//     }
//     if (window.innerWidth < 1000) {
//         LittleFooter.style.display = 'block';
//         MainFooter.style.display = 'none';
//     }
// }

// FooterMove()

const drop1 = document.getElementById("drop1-content");
const drop2 = document.getElementById("drop2-content");
const drop3 = document.getElementById("drop3-content");
const drop4 = document.getElementById("drop4-content");
const drop5 = document.getElementById("drop5-content");
const drop6 = document.getElementById("drop6-content");
const drop7 = document.getElementById("drop7-content");
const drop8 = document.getElementById("drop8-content");
const drop9 = document.getElementById("drop9-content");
const drop10 = document.getElementById("drop10-content");
const drop11 = document.getElementById("drop11-content");

// drop1btn.addEventListener('click', dropMove('drop1-content'));

function dropMove(id) {
    if (document.getElementById(id).classList.contains('show'))
    {
        document.getElementById(id).classList.remove('show');
        return;
    }
    if (!document.getElementById(id).classList.contains('show'))
    {
        document.querySelectorAll('.dropdown-content').forEach(elem => {
            elem.classList.remove('show');

        })
        document.getElementById(id).classList.add('show');
        return;
    }
};
