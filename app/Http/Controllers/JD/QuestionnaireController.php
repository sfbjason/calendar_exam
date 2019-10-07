<?php

namespace App\Http\Controllers\JD;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Contracts\QuestionContract;
use Illuminate\Support\Facades\DB;
use Validator;

class QuestionnaireController extends Controller
{   
    private $q_contract;

    public function __construct(QuestionContract $question)
    {
        $this->q_contract = $question;
    }

    public function save_question(Request $req) {

        $validator = Validator::make($req->all(), [
            'name' => 'required',
            'type' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'All fields are required',
                'status' => 'error',
            ], 200);
        }

        DB::beginTransaction();
        $save_question = $this->q_contract->params($req)->saveQuestion();
        
        if($save_question){

            DB::commit();
            return response()->json([
                'message' => 'Question successfully saved',
                'status' => 'success',
            ], 200);

        }else{

            DB::rollBack();
            return response()->json([
                'message' => 'Something went wrong when saving your data',
                'status' => 'error',
            ], 200);

        }
    }

    public function get_question() {

        $response = [];
        
        $model = $this->q_contract->getQuestions();

        foreach($model as $v) {
            $choices_arr = [];
            if($v->type->type === 'dropdown'){
                $choices = $v->choices;
                foreach($choices as $c) {
                    $choices_arr[] = [
                        'id' => $c->id,
                        'choice' => $c->choices
                    ];
                }
            }
            $response[] = [
                'name' => $v->question,
                'type' => $v->type->type,
                'choices' => $choices_arr,
                'is_currency' => $v->type->is_currency ? true : false,
                'answer' => ''
            ];
        }
        
        return $response;

        return response()->json($response, 200);

    }

    public function save_answer(Request $req) {

        $validator = Validator::make($req->all(), [
            'name' => 'required',
            'answer' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'All fields are required',
                'status' => 'error',
            ], 200);
        }

        DB::beginTransaction();

        $save_answer = $this->q_contract->params($req)->saveAnswer();
        
        if($save_answer){

            DB::commit();
            return response()->json([
                'message' => 'Successfully saved',
                'status' => 'success',
            ], 200);

        }else{

            DB::rollBack();
            return response()->json([
                'message' => 'Something went wrong when saving your data',
                'status' => 'error',
            ], 200);

        }

    } 

    public function get_list(Request $req) {

        $model = $this->q_contract->params($req)->getList();
        $response = [];

        if(count($model)){
            foreach($model as $v) {

                $answers = json_decode($v->answer);
                $answer_data = [];
                foreach($answers as $answer) {
                    $choices_arr = [];
                    if(count($answer->choices)){
                        foreach ($answer->choices as $a) {
                            $choices_arr[] = [
                                'id' => $a->id,
                                'choice' => $a->choice
                            ];
                        }
                    }
    
                    $answer_data[] = [
                        'name' => $answer->name,
                        'type' => $answer->type,
                        'choices' => $choices_arr,
                        'answer' => $answer->answer,
                        'new_answer' => $answer->answer,
                        'is_currency' => $answer->is_currency ? true : false,
                    ];
                }

                $response[] = [
                    'id' => $v->id,
                    'name' => $v->name,
                    'answer' => $answer_data
                ];
            }
        }

        return response()->json([
            'data' => $response,
            'model' => $model,
        ], 200);
        
    }

    public function update_answer(Request $req) {

        $validator = Validator::make($req->all(), [
            'id' => 'required',
            'answer' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'All fields are required',
                'status' => 'error',
            ], 200);
        }

        DB::beginTransaction();

        $update_answer = $this->q_contract->params($req)->updateAnswer();

        if($update_answer){

            DB::commit();
            return response()->json([
                'message' => 'Successfully updated',
                'status' => 'success',
            ], 200);

        }else{

            DB::rollBack();
            return response()->json([
                'message' => 'Something went wrong when saving your data',
                'status' => 'error',
            ], 200);

        }

    }

    public function delete_answer(Request $req) {

        $validator = Validator::make($req->all(), [
            'id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'All fields are required',
                'status' => 'error',
            ], 200);
        }

        DB::beginTransaction();

        $delete = $this->q_contract->params($req)->deleteAnswer();

        if($delete){

            DB::commit();
            return response()->json([
                'message' => 'Successfully deleted',
                'status' => 'success',
            ], 200);

        }else{

            DB::rollBack();
            return response()->json([
                'message' => 'Something went wrong when saving your data',
                'status' => 'error',
            ], 200);

        }

    }
    
}
