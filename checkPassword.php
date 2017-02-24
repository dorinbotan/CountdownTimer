<?php

if (isset($_GET['pass'])) {
    if(strcasecmp($_GET['pass'], "фейерверк") == 0) {
        echo '<div><h1>Последний шаг копатыч!</h1><h1 style="color: #fff;">Последнее погружение в смрад: 333</h1><h3 style="color: #fff;">(Смрад не моих *рук* дело)</h3></div>';
    }
    else {
        echo '-1';
    }
}
else {
    echo '-1';
}

?>