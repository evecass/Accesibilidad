function ValidateForm() {
    let nombre = document.getElementById('NombreLibro').value;
    let autor = document.getElementById('AutorLibro').value;
    let descripcion = document.getElementById('DescripcionLibro').value;
    let fechai = document.getElementById('FechaInicio').value;
    let fechat = document.getElementById('FechaTermino').value;
    let calificacion = document.getElementById('Calificacion').value;

    if (nombre == "") {
        alert('Este campo es requerido');
        return false;
    }

    if (autor == "") {
        alert('Este campo es requerido');
        return false;
    }

    if (descripcion == "") {
        alert('Este campo es requerido');
        return false;
    }

    if (fechai == "") {
        alert('Este campo es requerido');
        return false;
    }

    if (fechat == "") {
        alert('Este campo es requerido');
        return false;
    }

    if (calificacion == "") {
        alert('Este campo es requerido');
        return false;
    }

    return true;
}

// Leer datos
function readData() {
    let libros;

    if (localStorage.getItem('libros') === null) {
        libros = [];
    } else {
        libros = JSON.parse(localStorage.getItem('libros'));
    }

    var html = "";

    libros.forEach(function (element, index) {
        html += "<tr>";
        html += '<td scope="row">' + element.autor + '</td>';
        html += '<td scope="row">' + element.descripcion + '</td>';
        html += '<td scope="row">' + element.fechai + '</td>';
        html += '<td scope="row">' + element.nombre + '</td>';
        html += '<td scope="row">' + element.fechat + '</td>';
        html += '<td scope="row">' + element.calificacion + '</td>';
        html += '<td scope="row"><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminar</button></td>';
        html += "</tr>";
    });

    document.querySelector("#tableData tbody").innerHTML = html;
}

document.onload = readData();

function AddData() {
    if (ValidateForm() === true) {
        let nombre = document.getElementById('NombreLibro').value;
        let autor = document.getElementById('AutorLibro').value;
        let descripcion = document.getElementById('DescripcionLibro').value;
        let fechai = document.getElementById('FechaInicio').value;
        let fechat = document.getElementById('FechaTermino').value;
        let calificacion = document.getElementById('Calificacion').value;

        let libros;

        if (localStorage.getItem('libros') === null) {
            libros = [];
        } else {
            libros = JSON.parse(localStorage.getItem('libros'));
        }

        libros.push({
            nombre: nombre,
            autor: autor,
            descripcion: descripcion,
            fechai: fechai,
            fechat: fechat,
            calificacion: calificacion
        });

        localStorage.setItem('libros', JSON.stringify(libros));

        readData();

        // Limpiar formulario
        document.getElementById('NombreLibro').value = "";
        document.getElementById('AutorLibro').value = "";
        document.getElementById('DescripcionLibro').value = "";
        document.getElementById('FechaInicio').value = "";
        document.getElementById('FechaTermino').value = "";
        document.getElementById('Calificacion').value = "";
    }
}

// Función para eliminar datos
function deleteData(index) {
    let libros;

    if (localStorage.getItem('libros') === null) {
        libros = [];
    } else {
        libros = JSON.parse(localStorage.getItem('libros'));
    }

    libros.splice(index, 1);
    localStorage.setItem('libros', JSON.stringify(libros));
    readData();
}