<?php
require_once __DIR__ . '/../vendor/autoload.php';

use EthiopiaCovid19\ApiGateway\Index;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(dirname(__DIR__, 1));
$dotenv->load();

$client_id = getenv("CLIENT_ID");
$client_secret = getenv('CLIENT_SECRET');
$auth_url = getenv("AUTH_URL");
$api_url = getenv('API_URL');

$request = new Index($client_id, $client_secret, $auth_url, $api_url);

// Test 'GET' example.
print $request->getExample();

// Test post example.
// print $request->postExample($body = 'This is a test.');
