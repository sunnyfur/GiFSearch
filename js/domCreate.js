const addImgDom = (url) => {
    const imgContainer = document.getElementById("idImages");
    const imgNew = document.createElement("img");
    imgNew.src = url;
    imgNew.classList.add("res__img");
    imgContainer.appendChild(imgNew);
}