<?php

$counter=new counter();
$counter->update_and_increment();
$count=$counter->get_count();

echo "<h2>counted unique visitors:<h2>";
echo "$count";