<?php

namespace App\Repositories;

use App\Contracts\QuestionContract;
use App\Models\Question;
use App\Models\QuestionType;
use App\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

Class QuestionRepository implements QuestionContract{

    private $_param;
    private $question;
    private $question_type;
    private $user;

    public function __construct()
    {
        $this->question = new Question();
        $this->question_type = new QuestionType();
        $this->user = new User();
    }

    public function params($p) {
        $this->_param = $p;
        return $this;
    }

    public function saveQuestion() {
                
        $this->question->question = $this->_param->name;
        
        if($this->question->save()){
            $this->question_type->question_id = $this->question->id;
            $this->question_type->type = $this->_param->type;

            if ($this->_param->type === 'actual') {
                $this->question_type->is_currency = $this->_param->is_currency;
            }

            if ($this->question_type->save()) {

                if ($this->_param->type === 'dropdown') {

                    if(count($this->_param->choices)){

                        $choices_arr = [];
                        foreach ($this->_param->choices as $k => $v) {
                            $choices_arr[] = [
                                'question_id' => $this->question->id,
                                'choices' => $v['choice'],
                                'created_at' => Carbon::now(),
                                'updated_at' => Carbon::now(),
                            ];
                        }
                        if(!DB::table('question_choices')->insert($choices_arr)){
                            return false;
                        }

                    }

                }

            }else{

                return false;

            }

        }else{

            return false;
        }
        
        return true;
    }

    public function getQuestions() {

        $model = $this->question->all();
        return $model;

    }

    public function saveAnswer() {
        $this->user->name = $this->_param->name;
        $this->user->answer = json_encode($this->_param->answer);
        if(!$this->user->save()){
            return false;
        }
        return true;
    }

    public function getList() {

        $model = $this->user->where('deleted',0)->paginate($this->_param->per_page);
        return $model;

    }

    public function updateAnswer() {

        $q = $this->user->find($this->_param->id);
        if($q) {
            $q->answer = json_encode($this->_param->answer);
            if(!$q->save()){
                return false;
            }
        }else{
            return false;
        }
        
        return true;

    }

    public function deleteAnswer() {

        $q = $this->user->find($this->_param->id);
        if($q) {
            $q->deleted = 1;
            if(!$q->save()){
                return false;
            }
        }else{
            return false;
        }
        
        return true;

    }
}