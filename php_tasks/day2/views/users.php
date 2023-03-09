<?php
$users = convert_file_to_array();

foreach($users as $user){
    $user_details = explode(",",$user);
      echo "visit date:".$user_details[0]."<br>
            IP address:".$user_details[1]."<br>
            email:".$user_details[3]."<br>
            name:".$user_details[2]."<br>";
      
      echo "<hr>";
}