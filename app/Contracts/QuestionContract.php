<?php

namespace App\Contracts;

interface QuestionContract {
    /**
     * Set params object
     * @param request $r
     * @return void
     */
    public function params($r);

    /**
     * Get Questions 
     * @return collection
     */
    public function getQuestions();

    /**
     * Save question
     * @return boolean
     */
    public function saveQuestion();

    /**
     * Save Answer
     * @return boolean
     */
    public function saveAnswer();

    /**
     * Get answer list
     * @return collection
     */
    public function getList();

    /**
     * Get answer list
     * @return boolean
     */
    public function updateAnswer();

    /**
     * Get answer list
     * @return boolean
     */
    public function deleteAnswer();
    
}