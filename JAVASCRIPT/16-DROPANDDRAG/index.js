const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".sesion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging");
    })
})

secciones.forEach(sesion => {
    sesion.addEventListener("dragover", event => {
        event.preventDefault();
    })

    sesion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        sesion.appendChild(parrafo);
    })
})