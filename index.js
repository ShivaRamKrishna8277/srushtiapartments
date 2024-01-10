document.querySelectorAll('.navLinks').forEach((element) => {
    element.addEventListener('click', () => {
        Menu('-100%','auto');
    });
});

function Menu(value,scroll) {
    document.getElementById("navMobile").style.transform = `translateX(${value})`;
    document.body.style.overflow = `${scroll}`;
};

const modal = document.getElementById('BookNowForm');
document.querySelectorAll('.bookroomImgs').forEach((element) => {
    element.addEventListener('click', () => {
        modal.show();
    });
});