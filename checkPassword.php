<?php

if (isset($_POST['pass'])) {
    echo strcasecmp($_POST['pass'], "test");
}
else {
    echo '-1';
}

?>