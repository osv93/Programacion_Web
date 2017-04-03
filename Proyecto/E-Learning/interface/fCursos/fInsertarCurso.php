<script src="../../js/jsCursos.js"></script>

<div class="row">

	<div class="col-md-12">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h3 class="panel-title text-center">Formulario para agregar un curso.</h3>
			</div>

			<div class="container-fluid">
				<strong>Ingrese los datos solicitados.</strong>
				<hr>
				<form id="formularioCurso" name="formularioCurso" method="POST" role="form">

					<div class="form-group col-md-4">
						<label class="sr-only" for="Nombre">Nombre</label>
						<input type="text" class="form-control" id="Nombre" name="Nombre" placeholder="Nombre del Curso" required>
					</div>

					<div class="form-group col-md-4">
						<label class="sr-only" for="Fecha_Inicio">Fecha Inicio</label>
						<input type="date" class="form-control" id="Fecha_Inicio" name="Fecha_Inicio" placeholder="Fecha de Inicio" required>
					</div>

					<div class="form-group col-md-4">
						<label class="sr-only" for="Fecha_Final">Fecha Final</label>
						<input type="date" class="form-control" id="Fecha_Final" name="Fecha_Final" placeholder="Fecha Finalizacion" required>
					</div>

					<div class="form-group text-center col-md-12">
						<button type="button" class="btn btn-danger" onclick="cargarPagina('../../interface/fCursos/fGestionCursos.php');">Cancelar</button>
						<button type="submit" class="btn btn-primary">Agregar</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>