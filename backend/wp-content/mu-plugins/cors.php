<?php 
add_action('rest_api_init', function () {
    header('Access-Control-Allow-Origin: http://localhost:3333');
    header('Access-Control-Allow-Methods: GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}, 15);

add_action('template_redirect', function () {
    if (defined('REST_REQUEST') && REST_REQUEST || is_admin() || isset($_GET['preview'])) {
        return;
    }

    $frontend = getenv('FRONTEND_URL') ?: 'http://localhost:3000';
    wp_redirect($frontend, 302);
    exit;
});

