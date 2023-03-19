const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

const icon = document.querySelector(".icon");
const item0 = document.querySelector(".item0");
const item1 = document.querySelector(".item1");

icon.addEventListener("click", () => {
    icon.classList.toggle("iconClick");
    item0.classList.toggle("itemShow");
    item1.classList.toggle("itemShow");
});