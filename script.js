function addTarefa () {
    const input = document.getElementById("campo-nome-tarefa");
    const tarefa = input.value.trim();

    if (tarefa === "") {
        alert("Digite uma tarefa!");
        return;
}

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;

    const listaTarefa = document.getElementById("lista-tarefas");
    listaTarefa.appendChild(novaTarefa);

    input.value = "";

    const item = document.createElement("input");
    item.type = "checkbox";
    item.addEventListener("change", () => {
        novaTarefa.classList.toggle("concluida");
    } )

    listaTarefa.appendChild(item)
}

const botaoAdd = document.getElementById("botao-add");
botaoAdd.addEventListener("click", () => {
    addTarefa();
})


