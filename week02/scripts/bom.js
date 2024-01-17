const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if(input.value == "") {
        input.focus();
        return;
    }

    const li = document.createElement('li')
    const delButton = document.createElement('button');

    li.textContent = input.value;
    delButton.textContent = "✕";
    li.append(delButton);
    list.append(li);

    delButton.addEventListener("click", () => {
        list.removeChild(li);
        input.focus();
    })
    
    input.focus();
    input.value = "";

});