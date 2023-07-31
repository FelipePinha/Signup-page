const inputs = [
    document.querySelector("#name"),
    document.querySelector("#email"),
    document.querySelector("#password"),
];

const addErrorClass = input => {
    if (!input.classList.contains("error")) {
        input.classList.add("error");
    }
};
const addSuccessClass = input => {
    if (!input.classList.contains("success")) {
        input.classList.add("success");
    }
};

inputs.forEach(input => {
    input.addEventListener("keyup", () => {
        if (input.classList.contains("error")) {
            input.classList.remove("error");
        }
    });
});

document.querySelector("#form").addEventListener("submit", e => {
    e.preventDefault();

    inputs.forEach(input => {
        if (input.value === "") {
            addErrorClass(input);
        } else {
            addSuccessClass(input);
        }
    });
});
