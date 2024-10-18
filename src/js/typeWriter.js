function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(() => (elemento.innerHTML += letra), 150 * i);
    });
}

const titulo = document.querySelector(".introducao h1");
typeWriter(titulo);
typeWriter(document.querySelector(".introducao p"));
