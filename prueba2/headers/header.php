<!doctype html>
<html lang="es">
    <head>
        <meta charset="ISO-8859-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Mi Pagina</title>
		<link rel="shortcut icon" href="<?php echo base_url(); ?>imgs/favicon.ico" type="image/x-icon" />
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>css/normalize.css">
		<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>css/style.css">
		<link rel="author" href="<?php echo base_url(); ?>humans.txt" />
		<script src="<?php echo base_url(); ?>js/modernizr.js"></script>
		<script src="<?php echo base_url(); ?>js/jquery-1.10.2.min.js" type="text/javascript" ></script>
		<script src="<?php echo base_url(); ?>js/funciones.js" type="text/javascript" ></script>
		<meta name="Keywords" content="pagina jorge gonzalez jorgea3004 cosplay galeria visita personal" /> 
		<meta name="Description" content="pagina jorge gonzalez jorgea3004 cosplay galeria visita personal" />
		<?php echo $extraheader; ?>
    </head>
	<body>
		<header id="cabeza">
			<nav>
				<ul>
					<li class="ulli1">
						<a href="<?php echo base_url(); ?>indexc/indexb">
							<img src="<?php echo base_url(); ?>imgs/logo.png" border="0" width="40" />
						</a>
					</li>
					<li class="ulli2">
						<a href="<?php echo base_url(); ?>bio">
							<img src="<?php echo base_url(); ?>imgs/spacer.gif" border="0" />
						</a>
					</li>
					<li class="ulli3">
						<a href="<?php echo base_url(); ?>galerias">
							<img src="<?php echo base_url(); ?>imgs/spacer.gif" border="0" />
						</a>
					</li>
					<li class="ulli4">
						<a href="<?php echo base_url(); ?>videos">
							<img src="<?php echo base_url(); ?>imgs/spacer.gif" border="0" />
						</a>
					</li>
					<?php 
					if(isset($usnme) && strlen($usnme)>0){
					?>
					<li class="ulli6">
						<a href="<?php echo base_url(); ?>admin">
							<img src="<?php echo base_url(); ?>imgs/spacer.gif" border="0" />
						</a>
					</li>
					<?php
					} else {
					?>
					<li class="ulli5">
						<img src="<?php echo base_url(); ?>imgs/spacer.gif" border="0" />
					</li>
					<?php
					}
					?>
				</ul>
			</nav>
		</header>
