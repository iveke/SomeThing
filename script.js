const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => {
    observer.observe(el);
});

function handleOnMouseMove(e) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);


}
for (const card of document.querySelectorAll(".card")) {
    card.onmousemove = (e) => { handleOnMouseMove(e) };
    // чому не можна так як знизу я не знаю і чому працює лише 28 строка коли 30 теж саме?
    // card.addEventListener('onmousemove', handleOnMouseMove(e));
}