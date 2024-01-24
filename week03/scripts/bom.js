const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const LOCAL_STORAGE_KEY = 'BOM_Favorites_List'

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", () => {
    if(input.value == "") {
        input.focus();
        return;
    }

    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();

});

function displayList(item) {
    const li = document.createElement('li')
    const delButton = document.createElement('button');

    li.textContent = item;
    delButton.textContent = "✕";
    li.append(delButton);
    list.append(li);

    delButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chaptersArray))
}

function getChapterList() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item)=> item !== chapter);
    setChapterList();
}