function calcularUrlImagen(data, posicionItem) {
  let idImagen = data.items[posicionItem].fields.imagen.sys.id;
  for (let i = 0; i < data.includes.Asset.length; i++) {
    let idComparar = data.includes.Asset[i].sys.id;
    if (idComparar == idImagen) {
      return data.includes.Asset[i].fields.file.url;
    }
  }
}

function calcularParametros(data, i) {
  let urlImagen = calcularUrlImagen(data, i);
  let servicio = {
    imagen: urlImagen,
    titulo: data.items[i].fields.titulo,
    descripcion: data.items[i].fields.descripcion,
  };
  return servicio;
}

function mostrarfront(data) {
  const templateEl = document.querySelector("#template");

  for (let i = 0; i < data.items.length; i++) {
    let servicio = calcularParametros(data, i);

    templateEl.content.querySelector(".servicios__imagen").src =
      servicio.imagen;
    templateEl.content.querySelector(".servicios__titulo").textContent =
      servicio.titulo;
    templateEl.content.querySelector(".servicios__descripcion").textContent =
      servicio.descripcion;

    let paste = document.querySelector(".mis-servicios__container");
    let clone = document.importNode(templateEl.content, true);
    paste.appendChild(clone);
  }
}

function main() {
  const containerHeaderEl = document.querySelector(".header-container");
  headerNav(containerHeaderEl);

  /*
  const containerContactameEl = document.querySelector(".contactame");
  contactoForm(containerContactameEl);
*/
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

  const promesaContentful = fetch(
    "https://cdn.contentful.com/spaces/9mjms8slmfk4/environments/master/entries?access_token=38NoyzgelGh0w9FAtqSuL-36C38EJrVow203OQ6tAMg&content_type=misServiciosIndex"
  );
  const promesaData = promesaContentful.then((response) => response.json());
  promesaData.then((data) => {
    console.log(data);
    mostrarfront(data);
  });

  /*
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
  */
}

main();
