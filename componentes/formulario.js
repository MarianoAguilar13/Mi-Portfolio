function contactoForm(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
    <div class="contenedor-form">
      <h3 class="contenedor-form__titulo">Contacto</h3>
      <form class="contenedor-form__form">
        <div class="contenedor-form__fieldset">
          <label class="contenedor-form__label" for="name-input">NOMBRE</label>
          <input
            class="contenedor-form__input-text"
            id="name-input"
            name="nombre"
            type="text"
          />
        </div>
        <div class="contenedor-form__fieldset">
          <label class="contenedor-form__label" for="email-input">EMAIL</label>
          <input
            class="contenedor-form__input-text"
            id="email-input"
            name="email"
            type="text"
          />
        </div>
        <div class="contenedor-form__fieldset">
          <label class="contenedor-form__label msj" for="message-input"
            >MENSAJE</label
          >
          <textarea
            class="contenedor-form__textarea"
            id="message-input"
            name="msj"
          ></textarea>
        </div>
        <div class="contenedor-form__button-section">
          <button class="button">Enviar</button>
        </div>
      </form>
    </div>`;

  el.appendChild(componentEl);
}
