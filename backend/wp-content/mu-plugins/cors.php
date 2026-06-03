<?php 
add_action('rest_api_init', function () {
    header('Access-Control-Allow-Origin: http://localhost:3333');
    header('Access-Control-Allow-Methods: GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}, 15);