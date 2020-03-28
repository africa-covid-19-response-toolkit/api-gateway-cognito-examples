<?php

namespace EthiopiaCovid19\ApiGateway;

use GuzzleHttp\Client;

class Index {
  protected $client_id;
  protected $client_secret;
  protected $auth_url;
  protected $api_url;

  function __construct($client_id, $client_secret, $auth_url, $api_url) {
    $this->client_id = $client_id;
    $this->client_secret = $client_secret;
    $this->auth_url = $auth_url;
    $this->api_url = $api_url;
  }

  private function getAccessToken() {
    $credentials = base64_encode($this->client_id . ':' . $this->client_secret);
    $client = new Client();

    $response = $client->post($this->auth_url, [
      'debug' => FALSE,
      'body' => 'grant_type=client_credentials',
      'headers' => [
        'Authorization' => 'Basic ' . $credentials,
        'Content-Type' => 'application/x-www-form-urlencoded'
      ]
    ]);

    // TODO: Implement error handling.
    $r = json_decode($response->getBody()->getContents());
    return $r->access_token;
  }

  public function getExample() {
    $token = $this->getAccessToken();

    $client = new Client();
    $response = $client->get($this->api_url, [
      'headers' => [
        'Authorization' => 'Bearer ' . $token,
        'Content-Type' => 'application/json'
      ]
    ]);

    // TODO: Implement error handling.
    return $response->getBody()->getContents();
  }

  public function postExample() {
    $token = $this->getAccessToken();

    $client = new Client();
    $response = $client->post($this->api_url, [
      'headers' => [
        'Authorization' => 'Bearer ' . $token,
        'Content-Type' => 'application/json'
      ]
    ]);

    // TODO: Implement error handling.
    return $response->getBody()->getContents();
  }
}