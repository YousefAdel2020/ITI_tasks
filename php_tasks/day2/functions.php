<?php
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
        return "";
       
        
    }
}


function remeber_inputs($var)
{
    if(isset($_POST[$var])&&!empty($var))
    return $_POST[$var];
    else
    return "";
}


function append_to_file()
{
    $fp=fopen(__SAVE_FILE__ ,"a+");
    $post_string=implode(" , ",$_POST);
    $datatosave=date("F j Y g:i a").",".$_SERVER['REMOTE_ADDR'].",".$post_string;
    fwrite($fp,$datatosave.PHP_EOL); //.PHP_EOL  => to make new line  
    fclose($fp);
}

function print_confirmation_page(){
    echo "<center><h2>".__THANK_MSG__."</h2> </center><br>
    name:".$_POST["name"]. "<br>
    email:".$_POST["email"]. "<br>
    message:".$_POST["message"];
}

function convert_file_to_array() {
    return file(__SAVE_FILE__);
}