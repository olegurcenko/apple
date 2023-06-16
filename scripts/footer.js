var Items = document.querySelectorAll('.dropbtn');

Items.forEach(function (item) {

    item.addEventListener('click', function () {
        this.classList.toggle('show');
    });});