function footer(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
  <div class="footer">
      <h3 class="footer__logo">MARIANO</h3>
      <div class="footer__links">
        <div class="footer__links__container">
          <a
            class="footer__links__container__link"
            href="https://www.instagram.com/marianoraliuga13/"
            target="_blank"
            >Instagram</a
          >
          <img
            class="footer__links__container__logo"
            src="./componentes/imagenes-footer/instagram.png"
            alt="Instagram"
          />
        </div>
        <div class="footer__links__container">
          <a
            class="footer__links__container__link"
            href="https://www.linkedin.com/in/mariano-aguilar-a024b1240/"
            target="_blank"
            >Linkedin</a
          >
          <img
            class="footer__links__container__logo"
            src="./componentes/imagenes-footer/linkedin.png"
            alt="Linkedin"
          />
        </div>
        <div class="footer__links__container">
          <a
            class="footer__links__container__link"
            href="https://github.com/MarianoAguilar13"
            target="_blank"
            >Github</a
          >
          <img
            class="footer__links__container__logo"
            src="./componentes/imagenes-footer/github.png"
            alt="Github"
          />
        </div>
      </div>
    </div> `;

  el.appendChild(componentEl);
}
