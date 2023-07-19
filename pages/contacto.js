function main() {
  const containerHeaderEl = document.querySelector(".header-container");
  headerNav(containerHeaderEl);

  const containerContactameEl = document.querySelector(".contactame");
  contactoForm(containerContactameEl);

  const containerFooterEl = document.querySelector(".footer-container");
  footer(containerFooterEl);

  const botonAbreMenuEl = document.querySelector(
    ".header__visible__boton-desplegar"
  );
  const botonCerrarMenuEl = document.querySelector(
    ".ventana-links__boton-cerrar"
  );
  const menuEl = document.querySelector(".ventana-links");

  botonAbreMenuEl.addEventListener("click", () => {
    menuEl.style.display = "flex";
  });

  botonCerrarMenuEl.addEventListener("click", () => {
    menuEl.style.display = "";
  });

  const formEl = document.querySelector(".contenedor-form__form");

  formEl.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const formData = new FormData(evento.target);
    const valores = Object.fromEntries(formData.entries());
    valores["most-diff-subject"] = formData.getAll("most-diff-subject");

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "marianocanya@gmail.com",
        message:
          "nombre: " +
          valores.nombre +
          "/ email: " +
          valores.email +
          "/ su mensaje es: " +
          valores.msj,
      }),
    })
      .then(() => {
        document.querySelector(".contenedor-form__form").reset();
        alert("El mensaje se envió correctamente!");
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

main();
