function Consultorio(nombre, paciente) {
    this._nombre = function () {
        return nombre;
    }

    this._paciente = function () {
        return paciente || [];
    }
}

Consultorio.prototype.getNombre = function () {
    return this._nombre();
}
Consultorio.prototype.setNombre = function (paciente) {
    this.paciente.push(paciente)
}

Consultorio.prototype.getPacientes = function () {
    this._paciente().forEach(function (element, index) {
        console.log("########################################")
        console.log(`Paciente n°: ${index}`);
        console.log(`Nombre: ${element._nombre()}`);
        console.log(`Edad: ${element._edad()}`);
        console.log(`Rut: ${element._rut()}`);
        console.log(`Diagnostico: ${element._diagnostico()}`);
        console.log("########################################")
    });
}

Consultorio.prototype.getPacientePorNombre = function (busquedaNombre) {
    this._paciente().forEach(function (element, index) {
        console.log("########################################")
        if (element._nombre() == busquedaNombre) {
            console.log(`Paciente n°: ${index}`);
            console.log(`Nombre: ${element._nombre()}`);
            console.log(`Edad: ${element._edad()}`);
            console.log(`Rut: ${element._rut()}`);
            console.log(`Diagnostico: ${element._diagnostico()}`);
        }
        console.log("########################################")

    })
}

function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = function () {
        return nombre
    };
    this._edad = function () {
        return edad
    };
    this._rut = function () {
        return rut
    };
    this._diagnostico = function () {
        return diagnostico
    };
}



Paciente.prototype.getNombre = function () {
    return this._nombre();
}
Paciente.prototype.getEdad = function () {
    return this._edad();
}
Paciente.prototype.getRut = function () {
    return this._rut();
}
Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico();
}

Paciente.prototype.setNombre = function (nuevo_nombre) {
    this._nombre = function () {
        return nuevo_nombre
    }
}
Paciente.prototype.setEdad = function (nueva_edad) {
    this._edad = function () {
        return nueva_edad
    }
}
Paciente.prototype.setRut = function (nuevo_rut) {
    this._rut = function () {
        return nuevo_rut
    }
}
Paciente.prototype.setDiagnostico = function (nuevo_diagnostico) {
    this._diagnostico = function () {
        return nuevo_diagnostico
    }
}

let paciente1 = new Paciente('Sebastian', 41, '194550669', 'Muy Bello')
let paciente2 = new Paciente('Claudia', 36, '24821234-9', 'Muy hermosa')

let consultorio_a = new Consultorio('CESFAM', [paciente1, paciente2])

console.log(paciente1.getNombre())
console.log(paciente2.getEdad())
paciente2.setDiagnostico('Gripe General');
console.log(paciente2.getDiagnostico());
console.log(consultorio_a.getNombre());
console.log(consultorio_a.getPacientes())
consultorio_a.getPacientePorNombre('Sebastian')
consultorio_a.getPacientePorNombre('Claudia')

