nombre_alumno_array=[];

function submit(){
    var ver_alumno_array=[];
    for (var j=1; j<=4; j++){
        var nombre_alumno=document.getElementById("nombre_alumno_"+j).value;
        console.log(nombre_alumno);
        nombre_alumno_array.push(nombre_alumno);
    }
    console.log(nombre_alumno_array);
    var longitud_nombre_alumno_array=nombre_alumno_array.length;
    console.log(longitud_nombre_alumno_array);

    for (var k=0; k<=longitud_nombre_alumno_array; k++)
    {
        ver_alumno_array.push("<h4>Nombre: "+nombre_alumno_array[k]+"</h4>");


    }
document.getElementById("mostrar_nombres_con_comas").innerHTML=ver_alumno_array;

}