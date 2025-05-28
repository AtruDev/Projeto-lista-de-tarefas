function addTarefa () {
    const input = document.getElementById("campo-nome-tarefa");
    const tarefa = input.value.trim();

    if (tarefa === "") {
        alert("Digite uma tarefa!");
        return;
}

    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.textContent = tarefa

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("concluida");
    } );

    const botaoRemove = document.createElement("button");
    botaoRemove.textContent = "❌";
    botaoRemove.addEventListener("click", () => {
    li.remove();
})

    li.appendChild(span);
    li.appendChild(checkbox);
    li.appendChild(botaoRemove)

    document.getElementById("lista-tarefas").appendChild(li);
    input.value = "";
};

const botaoAdd = document.getElementById("botao-add");
botaoAdd.addEventListener("click", () => {
    addTarefa();
})
