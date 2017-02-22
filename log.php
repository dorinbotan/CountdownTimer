<?php

if(!file_exists('time.txt'))
{
    date_default_timezone_set("Europe/Copenhagen");
        
    if ($handle = fopen('time.txt', 'w')) 
    {
        fwrite($handle, date("D M d Y H:i:s O"));
        fclose($handle);
    }
}

?>