<?php


function successResponse($allUser,$massage){

    return response()->json([
        'status_code' => 200,
        'data' => $allUser,
        'message' => $massage,
    ]);


}

function errorResponse($error=[],$massage){

    return response()->json([
        'status_code' => 500,
        'message' => $massage,
        'error' => $error,
    ]);

}

function guzzleRequest($slug, $method, $params = NULL) {

    try {

        $URL = $slug;
        $client = new \GuzzleHttp\Client();
        $res = $client->request($method, $URL, ['form_params'=>$params]);

        $status = $res->getStatusCode();
        if ($status == 200) {
            $resBodyContents = $res->getBody()->getContents();
            $resBodyContents = json_decode($resBodyContents, true);
            return $resBodyContents;
        } else {
            return $this->jsonErrorResponse('Server responded with a status code of ' . $status);
        }
    } catch (RequestException $e) {
        $req = Psr7\str($e->getRequest());
        return $this->jsonErrorResponse($req);
    }
}
