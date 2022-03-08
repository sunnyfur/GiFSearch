let myOffset = 0;
let oldSearch = "";
document.getElementById("idFormSearch").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("idImages").innerHTML = "";
    const searchText = document.getElementById("idInputGif").value;
    const key = "uXh8ejgAtghfQ8eMXS4AEUJ6qiZ1FGjJ";
    (oldSearch != searchText) ? (myOffset < (4999 - 5)) ? myOffset += 5: offset = 0: offset = 0;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}&limit=5&offset=${myOffset}&rating=g&lang=ru`)
        .then(response => response.json())
        .then(result => {
            [...result.data].forEach(elem => {
                addImgDom(elem.images.original.url);
            });
        })
        .catch(err => console.log(err));

});