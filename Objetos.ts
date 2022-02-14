interface Persona{
    Nombre: string;
    Apellido: string;
    PosicionActual:string;
    Acercade:String;
    Titulos:[string, string];
}

let porfolio:Persona={
    Nombre:"",
    Apellido: "",
    PosicionActual:"",
    Acercade:"",
    Titulos:["", ""],
}

function GetNombre(nombre:string):void{
    const nombre1= document.getElementById("Nombre");
    nombre1.textContent=nombre;
}

function GetApellido(apellido:string):string{
    const apellido1= document.getElementById("Apellido");
    apellido1.textContent=apellido;
    return porfolio.Apellido=apellido
}

function GetPosicionActual(posicion:string):string{
    const PosAct= document.getElementById("PosicionActual");
    PosAct.textContent=posicion;
    return porfolio.PosicionActual=posicion
}


function showFile2(input):void{
        let datos= input.files[0];

let impDatos= new FileReader();
impDatos.readAsText(datos);
impDatos.onload=function (): void {
    var s = impDatos.result.toString();
    console.log(s);
    var arr = s.split('\n');
    GetNombre(arr[0]);
    GetApellido(arr[1]);
    GetPosicionActual(arr[2]);
}
}

