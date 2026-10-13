class MiSaludo extends HTMLElement {
  constructor() {
    super();
    // Creamos un Shadow DOM para encapsular el contenido y los estilos
    const shadow = this.attachShadow({ mode: 'open' });

    // Definimos el contenido HTML y CSS del componente
    shadow.innerHTML = `
      <style>
        div {
          font-family: sans-serif;
          background-color: #f0f4f8;
          border-left: 4px solid #0066cc;
          padding: 12px 16px;
          border-radius: 4px;
          color: #333;
        }
        span {
          font-weight: bold;
          color: #0066cc;
        }
      </style>
      <div>
        ¡Hola, <span id="nombre">Mundo</span>!
      </div>
    `;
  }

  // Se ejecuta cuando el componente se añade al documento
  connectedCallback() {
    const nombreAttr = this.getAttribute('nombre');
    if (nombreAttr) {
      this.shadowRoot.getElementById('nombre').textContent = nombreAttr;
    }
  }
}

// Registramos el nuevo elemento con un nombre que obligatoriamente incluye un guion
customElements.define('mi-saludo', MiSaludo);
