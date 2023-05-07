function addClass(elem) {

    var link = document.getElementsByClassName('tab');

    for (i = 0; i < link.length; i++) {
        link[i].classList.remove('active')
    }
    elem.classList.add('active');
}