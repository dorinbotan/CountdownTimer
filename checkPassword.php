<?php

if (isset($_POST['pass'])) {
    if(strcasecmp($_POST['pass'], "фейерверк")) {
        echo '333';
    }
    else {
        echo '-1';
    }
}
else {
    echo '-1';
}

?>