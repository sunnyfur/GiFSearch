const addImgDom = (url) => {
    const imgContainer = document.getElementById("idImages");
    const imgNew = document.createElement("img");
    imgNew.src = url;
    imgNew.classList.add("res__img");
    imgContainer.appendChild(imgNew);
}

const addError = (msg) => {
    const err = document.querySelector(".error");
    try {
        err.innerHTML = msg;
    } catch (error) {
        console.log("Ошибка при добавлении ошибки... " + error);
    }
}