function addNote() {
    const input = document.getElementById("textInput");
    const value = input.value;

    if (value === "") return;

    const li = document.createElement("li");
    li.textContent = value;

    const btn = document.createElement("button");
    btn.textContent = "NOTU SİL";

    btn.onclick = function(){
        li.remove();
    }

    li.appendChild(btn);

    document.getElementById("not").appendChild(li);
    input.value = "";
}