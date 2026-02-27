class Calculadora extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <form id="formulario">

            <label>Nombre del paciente:</label><br>
            <input type="text" id="nombre"><br><br>

            <label>Especialidad:</label><br>
            <select id="especialidad">
                <option value="">Seleccione</option>
                <option value="25">Medicina General - $25</option>
                <option value="40">Cardiología - $40</option>
                <option value="35">Pediatría - $35</option>
            </select><br><br>

            <label>
                <input type="checkbox" id="examen"> Agregar examen ($15)
            </label><br><br>

            <button type="submit">Calcular</button>

            <div class="resultado" id="resultado"></div>

        </form>
        `;

        const form = this.querySelector("#formulario");

        form.addEventListener("submit", (e)=>{

            e.preventDefault(); 

            const nombre = this.querySelector("#nombre").value.trim();
            const especialidad = this.querySelector("#especialidad").value;
            const examen = this.querySelector("#examen").checked;
            const resultado = this.querySelector("#resultado");

            
            if(nombre === ""){
                resultado.innerHTML = "Debe ingresar el nombre.";
                return;
            }

            if(especialidad === ""){
                resultado.innerHTML = "Debe seleccionar una especialidad.";
                return;
            }

            let total = parseFloat(especialidad);

            if(examen){
                total += 15;
            }

            resultado.innerHTML = `
                Paciente: ${nombre} <br>
                Total a pagar: $${total}
            `;
        });
    }
}


customElements.define("mi-calculadora", MiCalculadora);