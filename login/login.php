<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
include_once ("../../config.php");
include_once (directoryRoot."sessions2.php");
include directoryRoot."connectDB/empleo.php";
include_once (directoryRoot."lib/utilerias.php");
include_once (directoryRoot."classes/class.inputfilter.php");
//require_once(directoryRoot.'lib/recaptchalib.php');
date_default_timezone_set('America/Mexico_City');
$respuesta = array(
	'frmlog' => true,
	'message'=> ''
);
$_SESSION['user_politicsAccepted_cea'] = 0;
/*if (isset($_SESSION['user_guid_cea']))
{
	$objDBEmpleo->Erase("sessions", "session_data like '%" . $_SESSION['user_guid_cea']."%'");
	$objDBEmpleo->Erase("sessions", "session_expiration < '" . date("Y-m-d") ." 00:00:00'");
	$_SESSION['user_guid_cea']='';
	unset($_SESSION['user_guid_cea']);
}
if(isset($_COOKIE['err_session_c'])) {
	$respuesta['frmlog']=false;
	$respuesta['message']= $_COOKIE["err_session_c"]. "<br>";
} else {
	if(!isset($_SESSION['err_session_count'])){
		$_SESSION['err_session_count']=0;
	} else {
		if($_SESSION['err_session_count']>3)
			$_SESSION['err_session_count']=0;
	}
	$respuesta['frmlog']=true;
}*/
if($_SESSION['err_session_count']>3){
	//$_SESSION['err_session_count']=0;
}
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if ((isset($_POST['user'])) and (isset($_POST['pass'])) and strlen($_POST['user'])>0 and strlen($_POST['pass'])>0 && isset($respuesta['frmlog']) && $respuesta['frmlog']==true)
{
	if(isset($_COOKIE['err_session_c'])) {
	   $respuesta['message'] = "Tu cuenta se ha bloqueado por exceder el limite de intentos, vuelve a intentar en 1 hora.";
	   $respuesta['frmlog']=false;
	   unset($_POST);
	} else {
		/*$gRecaptchaResponse = sql_commads($_POST['g-recaptcha-response']);
		if(!isset($_POST['g-recaptcha-response']) || strlen($gRecaptchaResponse)<10){
		   $respuesta['message'] = "El proceso no pudo ser completado, favor de volver a hacerlo.";
			$respuesta['frmlog']=true;
			if(!isset($_SESSION['err_session_count'])){
				$_SESSION['err_session_count']=1;
			} else {
				$_SESSION['err_session_count']++;
				if($_SESSION['err_session_count']>3){
					$err="Tu cuenta se ha bloqueado por exceder el limite de intentos, vuelve a intentar en 1 hora.";
					$respuesta['message']=$err;
					$respuesta['frmlog']=false;
					//setcookie("err_session_c", $err, time()+3600,'/');
				}
			}
		} else {*/
			$user = sql_commads($_POST['user']);
			$pass = sql_commads($_POST['pass']);
			$sql = "select user_guid from users "
				 . "where AES_DECRYPT(email,'".cearegk."')='".$user."' "
				 . "and AES_DECRYPT(password,'".cearegk."')='".$pass."' "
				 . "";
			$result	=	$objDBEmpleo->Select($sql);
			if ($result){
				$_SESSION['user_guid_cea']=$result[0][0];
				$_SESSION['err_session_count']=0;
				$_SESSION['user_politicsAccepted_cea']=1;
				$respuesta['message']='USUARIO ACEPTADO';
				echo json_encode($respuesta); exit();
			} else {
				$err="El correo y/o contrase&ntilde;a no son v&aacute;lidos.";
				$respuesta['frmlog']=false;
				$respuesta['message']='USUARIO NO VALIDO';
				if(!isset($_SESSION['err_session_count'])){
					$_SESSION['err_session_count']=1;
				} else {
					$_SESSION['err_session_count']++;
					if($_SESSION['err_session_count']>3){
						$err="Tu cuenta se ha bloqueado por exceder el limite de intentos, vuelve a intentar en 1 hora.";
						$respuesta['message']=$err;
						$respuesta['frmlog']=false;
						//setcookie("err_session_c", $err, time()+3600,'/');
					}
				}
			}
		//}
	}
} else {
	if ( isset($_COOKIE['err_session_c'])) {
	   $respuesta['message'] = "Tu cuenta se ha bloqueado por exceder el limite de intentos, vuelve a intentar en 1 hora.";
	   $respuesta['frmlog']=false;
	}
}
echo json_encode($respuesta);
?>