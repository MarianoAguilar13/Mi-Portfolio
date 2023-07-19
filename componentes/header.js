function headerNav(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
  <div class="header">
      <div class="header__visible">
        <div class="header__visible__logo-container">
          <a class="header__visible__logo-container__logo" href="https://marianoaguilar13.github.io/dwf-desafio-m4/index.html" >MARIANO</a>
        </div>
        <div class="header__links">
          <a class="header__links__link" href="https://marianoaguilar13.github.io/dwf-desafio-m4/portfolio.html" 
            >Portfolio</a
          >
          <a class="header__links__link" href="https://marianoaguilar13.github.io/dwf-desafio-m4/servicios.html" 
            >Servicios</a
          >
        </div>
        <div class="header__visible__boton-desplegar-container">
          <button class="header__visible__boton-desplegar">
            <div class="header__visible__boton-desplegar__barras"></div>
            <div class="header__visible__boton-desplegar__barras"></div>
            <div class="header__visible__boton-desplegar__barras"></div>
          </button>
        </div>
      </div>
      <div class="ventana-links">
        <button class="ventana-links__boton-cerrar">x</button>
        <a class="ventana-links__link link-uno" href="https://marianoaguilar13.github.io/dwf-desafio-m4/portfolio.html"
          >Portfolio</a
        >
        <a class="ventana-links__link link-dos" href="https://marianoaguilar13.github.io/dwf-desafio-m4/servicios.html" 
          >Servicios</a
        >
        <a class="ventana-links__link link-tres" href="https://marianoaguilar13.github.io/dwf-desafio-m4/contacto.html"
          >Contacto</a
        >
      </div>
    </div>`;

  el.appendChild(componentEl);
}
