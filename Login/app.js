function entrar() {
    var usuario = document.getElementById("user");
    var contraseña = document.getElementById("cc");
    //var mensaje = document.getElementsByName("texmensaje");


    console.log(usuario.value + " " + contraseña.value);

    if (usuario.value == "johan" && contraseña.value == "johan") {
        location.href = "inicio.html";
        window.alert("Usuario logeado");


    } else {
        window.alert("ERROR! Usuario NO logeado");
        location.href = "index.html";
    }
}