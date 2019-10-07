<?php

namespace App\Http\Controllers\JD;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use PDF;
use App;
use App\Contracts\QuestionContract;
use App\User;

class PdfController extends Controller
{

    private $q_contract;
    
    public function __construct(QuestionContract $question)
    {
        $this->q_contract = $question;
    }

    public function print_pdf(Request $req) {

        $model = User::find($req->id);
        
        $pdf = App::make('dompdf.wrapper');
        $pdf->loadView('pdf.user_answer', [
            'name' => $model->name,
            'answer' => json_decode($model->answer)
        ])->setPaper('A4', 'portrait');

        return $pdf->stream('user_answer.pdf');
    }
}
