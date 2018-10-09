<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->helper('url');
$menu=array(0 => '', 1 => '',2 => '',3 => '',4 => '');
if(isset($menu_active)){
    $menu[$menu_active]=' class="active"';
} else {
    $menu[0]=' class="active"';
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="shortcut icon" href="<?php echo base_url();?>public/img/favicon.ico">
    <link rel="icon" href="<?php echo base_url();?>public/img/favicon.ico?v=1.1"> 
    <title>iYorch <?php if(isset($page_title)){ echo $page_title;} ?></title>
    <link rel="stylesheet" href="<?php echo base_url();?>public/css/reset.css" type="text/css">
    <link rel="stylesheet" href="<?php echo base_url();?>public/css/styl.css" type="text/css">
    <link href='//fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
</head>
<body>
    <header>
        <div id="header_in">
        <h1><a href="<?php echo base_url();?>home/indexb"><b>i</b>YORCH</a></h1>
        <div class="menumob"></div>
            <nav id="menu">
             <ul>
                <li><a href="<?php echo base_url();?>home/indexb" <?php echo $menu[0];?>>Home</a></li>
                <li><a href="<?php echo base_url();?>about" <?php echo $menu[1];?>>Bio</a></li>
                <li><a href="<?php echo base_url();?>galerias" <?php echo $menu[2];?>>Galer&iacute;as</a></li>
                <li><a href="<?php echo base_url();?>proyectos" <?php echo $menu[3];?>>Proyectos</a></li>
                <li><a href="<?php echo base_url();?>contacto" <?php echo $menu[4];?>>Cont&aacute;cto</a></li>            
             </ul>
            </nav>
        </div>
    </header>
