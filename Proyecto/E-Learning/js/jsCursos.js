$Id_CursoTemp = "";

$("#informativo").on('hidden.bs.modal', function () {
    cargarPagina('../../interface/fCursos/fGestionCursos.php');
});

function paginaModificarCurso(Id_Curso){          
    $('#datos').load("../../interface/fCursos/fModificarCurso.php?Id_Curso="+Id_Curso);
    $("#lista").css("display", "none");
}

/***** Agregar Curso *****/
(function($,W,D){
    var JQUERY4U = {};
    JQUERY4U.UTIL = {
        setupFormValidation: function(){
            $("#formularioCurso").validate({
                rules: {
                    Nombre: "required",
                    Fecha_Inicio: "required",
                    Fecha_Final: "required",
                }, 
                messages: {
                    Nombre: "Campo Requerido",
                    Fecha_Inicio: "Campo Requerido",
                    Fecha_Final: "Campo Requerido"
                },

                submitHandler: function(form) {                 
                    agregarCurso();
                }
            });
        }
    }    
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
 
} ) (jQuery, window, document);
function agregarCurso(){
    var formData = new FormData(document.getElementById("formularioCurso"));   
    formData.append("opcion", 1);    
    $.ajax({
    url : "../../controller/ctrCursos/ctrCursos.php",
    type : "post",
    dataType : "html",
    data : formData,
    cache : false,
    contentType : false,
    processData : false
    }).done(function(data) {    
        $("#mensaje").html(data);
        $('#informativo').modal('show');
    });
}

/***** Modificar Curso *****/
(function($,W,D){
    var JQUERY4U = {};
    JQUERY4U.UTIL = {
        setupFormValidation: function(){
            $("#formularioModificarCurso").validate({
                rules: {
                    Nombre: "required",
                    Fecha_Inicio: "required",
                    Fecha_Final: "required",
                }, 
                messages: {
                    Nombre: "Campo Requerido",
                    Fecha_Inicio: "Campo Requerido",
                    Fecha_Final: "Campo Requerido"
                },

                submitHandler: function(form) {                 
                    modificarCurso();
                }
            });
        }
    }    
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
 
} ) (jQuery, window, document);
function modificarCurso(){
    $Id_Curso = $('#Id_Curso').val();
    var formData = new FormData(document.getElementById("formularioModificarCurso"));   
    formData.append("opcion", 3); 
    formData.append("Id_Curso", $Id_Curso);    
    $.ajax({
    url : "../../controller/ctrCursos/ctrCursos.php",
    type : "post",
    dataType : "html",
    data : formData,
    cache : false,
    contentType : false,
    processData : false
    }).done(function(data) {  
        $("#mensaje").html(data);
        $('#informativo').modal('show');
    });
}

/***** Eliminar Curso *****/