let myOffset = 0;
let oldSearch = "";
document.getElementById("idFormSearch").addEventListener("submit", (e) => {
    e.preventDefault();
    addError("");
    document.getElementById("idImages").innerHTML = "";
    const searchText = document.getElementById("idInputGif").value;
    const key = "uXh8ejgAtghfQ8eMXS4AEUJ6qiZ1FGjJ";
    (oldSearch != searchText) ? (myOffset < (4999 - 5)) ? myOffset += 5: offset = 0: offset = 0;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}&limit=5&offset=${myOffset}&rating=g&lang=ru`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            if (response.status == 401) throw new Error('ошибка в адресе');
            throw new Error('сервер не доступен');
        })
        .then(result => {
            if (result.data.length == 0) throw new Error('По Вашему запросу ничего не найдено');

            [...result.data].forEach(elem => {

                try {
                    const url = elem.images.original.url;
                    addImgDom(url);
                } catch (err) {
                    throw new Error('Не найден путь');
                }

            });
        })
        .catch(err => {
            (err.name == "TypeError") ? addError("что-то пошло не так"): addError(err.message);
        });


});