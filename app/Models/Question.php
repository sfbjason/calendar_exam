<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{   

    /**
     * Get the phone record associated with the question.
     */
    public function type()
    {
        return $this->hasOne('App\Models\QuestionType');
    }

    /**
     * Get all of the posts for the user.
     */
    public function choices()
    {
        return $this->hasMany('App\Models\QuestionChoices');
    }
}
