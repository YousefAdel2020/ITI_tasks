<?php
require_once("config.php");

$error="";
if(! empty($_POST) )
{
    $error=validate_form();
}



require_once("views/main.php");



function validate_form()
{
 $name = isset($_POST["name"]) ? $_POST["name"] : "";
$email = isset($_POST["email"]) ? $_POST["email"] : "";
$message = isset($_POST["message"]) ? $_POST["message"] : "";
    foreach($_POST as $key => $value)
    {
        if(empty($value))
        return "$key can not be empty ";
    }
    if(strlen($name)>=__MAX_NAME_LENGTH__)
    {
        return "the name should be less than 100 characters";
    }
    else if(!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        return "the email is not valid";
    }
    else if(strlen($message)>=__MAX_MSG_LENGTH__)
    {
        return "the message should be less than 255 characters";
    }
    else
    {
        die("<center><h2>".__THANK_MSG__."</h2> </center><br>
            name:$name <br>
            email:$email<br>
            message:$message");
    }
}


function remeber_inputs($var)
{
    if(isset($_POST[$var])&&!empty($var))
    return $_POST[$var];
    else
    return "";
}