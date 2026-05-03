let notes = [];

window.onload = function(){
    const data = localStorage.getItem("notes");

    if (data){
        notes = JSON.parse(data);
    }

    renderNotes();
}

function addNote() {
    const input = document.getElementById("textInput");
    const value = input.value;

    if (value === "") return;

    const li = document.createElement("li");
    li.textContent = value;

    notes.push(value);
    localStorage.getItem("notes", JSON.stringify(notes));

    const btn = document.createElement("button");
    btn.textContent = "NOTU SİL";

    btn.onclick = function(){
        notes = notes.filter((n) => n !== value);
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
    }

    li.appendChild(btn);

    document.getElementById("not").appendChild(li);
    input.value = "";
}

function renderNotes(){
    const list = document.getElementById("notes");

    list.innerHTML();

    notes.forEach(function(notes){
        const li = document.createElement("li");

        li.textContent = "notes";

        const btn = document.createElement("button");

        btn.textContent = "SİL";

        btn.onclick() = function(){
            notes = notes.filter((n) => n !== value);
            localStorage.getItem("notes", JSON.stringify(notes));
            renderNotes();
        }

        li.appendChild(btn);
        list.appendChild(li);

    })
}