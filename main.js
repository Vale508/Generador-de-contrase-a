let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {

    let numeroDigitado = parseInt(cantidad.value);
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor de 8");
    } else {
        let password = "";

        for (let i = 0; i < numeroDigitado; i++) {
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            console.log(caracterAleatorio);

            password += caracterAleatorio;
        }
        contrasena.value = password;


        if (validar(password))
            mensaje.innerText = "¡CONTRASEÑA FUERTE!";
        else
            mensaje.innerText = "¡CONTRASEÑA DEBIL!";
    }
}


function validar(cadena) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return regex.test(cadena);
}


function limpia() {
    cantidad.value = "";
    contrasena.value = "";
    mensaje.innerText = '';
    document.getElementById("cantidad & contrasena & mensaje").focus();

}



















