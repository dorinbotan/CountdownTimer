<?php

if(!file_exists('time.txt') && $handle = fopen('time.txt', 'w'))
{
    fwrite($handle, date("D M d Y H:i:s O"));
    fclose($handle);
}

?>