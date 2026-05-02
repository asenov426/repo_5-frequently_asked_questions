bts.forEach(bt => {
    bt.addEventListener('click', () => {
        bt.firstElementChild.classList.toggle('nonvisible');
        bt.lastElementChild.classList.toggle('nonvisible');
        bt.previousElementSibling.lastElementChild.classList.toggle('nonvisible');
    });
});
