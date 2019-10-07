<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'middleware' => ['api'],
    'namespace' => 'JD'
], function ($router) {
    Route::post('save_question', 'QuestionnaireController@save_question');
    Route::get('get_question', 'QuestionnaireController@get_question');
    Route::post('save_answer', 'QuestionnaireController@save_answer');
    Route::get('get_list', 'QuestionnaireController@get_list');
    Route::post('update_answer', 'QuestionnaireController@update_answer');
    Route::post('delete_answer', 'QuestionnaireController@delete_answer');
}); 