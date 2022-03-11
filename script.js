const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

checkboxes();

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop)
        if (boxTop < triggerBottom) {
            box.classList.add('box--show');
        } else {
            box.classList.remove('box--show');
        }
    });
}
