function btnCalcular() {

    var txtNombreApellido = document.getElementById('NombreApellido');
    var NombreApellido = txtNombreApellido.value;
    var txtMonto = document.getElementById('Monto');
    var Monto = txtMonto.value
    var selector = document.getElementById('Selector').value
    var dias = document.getElementById('Dias').value


    if (NombreApellido === ""){

        document.getElementById("ERROR NOMBRE Y APELLIDO").innerHTML = "INGRESAR EL NOMBRE Y EL APELLIDO"
    }

    if (Monto < 1000){

        document.getElementById("ERROR EN EL MONTO").innerHTML = "INGRESAR EL MONTO CORRECTO"

    }
    let porcentaje;
    if (dias === "30"){
        porcentaje = 40;
       
    }else if (dias === "60"){

        porcentaje = 50;

    }else if (dias === "120"){

        porcentaje = 50;

    }else if (dias === "360"){

        porcentaje = 65;

    }

    if (selector === "no"){

        EnseniarMonto(Monto, dias , porcentaje);

    }




}

function calPlazofijo(Monto, dias , porcentaje){

    return (Number(Monto) + (Number(Monto) * (Number (dias) / 360) * (Number(porcentaje) / 100 )))


}

function EnseniarMonto(Monto, dias , porcentaje){
    const divmostrar = document.getElementById('mostar');
    divmostrar.innerHTML =  "el monto es:" + calPlazofijo(Monto, dias, porcentaje);



}


