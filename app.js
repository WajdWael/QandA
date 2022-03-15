//NEW PROJECT "QUESTIONS"

//using selectors inside the element

const sc8 = document.querySelectorAll(".question");
sc8.forEach(function (ele) {
    const icons = ele.querySelector(".qusetion-btn");
    icons.addEventListener('click', function () {
        sc8.forEach(function (i) {
            if (i !== ele) {
                i.classList.remove("show-text");
            }
        });
        ele.classList.toggle("show-text");
    });
})
console.log("h44");