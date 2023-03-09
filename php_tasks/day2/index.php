<?php
require_once("config.php");
require_once("functions.php");




$error="";
if(! empty($_POST) )
{
    $error=validate_form();

    if(empty($error))
    {
         append_to_file();
         print_confirmation_page();
         exit();

    }
}



$parameter = isset($_GET["page"]) ? $_GET["page"] : "";
if ($parameter === "main")
    require_once("views/main.php");
else
    require_once("views/users.php");








