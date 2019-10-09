<?php

namespace App\Http\Controllers\Exam;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CalendarEvent;
use Validator;

class CalendarEventController extends Controller
{
    public function store_event(Request $req) {
        
        $validator = Validator::make($req->all(), [
            'name' => 'required',
            'from' => 'required|date',
            'to' => 'required|date',
            'day_selected' => 'array|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'All fields are required',
                'status' => 'error',
            ], 200);
        }

        $model = new CalendarEvent();
        $model->name = $req->name;
        $model->from = $req->from;
        $model->to = $req->to;
        $model->weekday = json_encode($req->day_selected);

        if($model->save()){
            return response()->json([
                'status' => 'success',
                'message' => 'Event successfully saved',
                'data' => [
                    'name' => $req->name,
                    'days' => $req->day_selected,
                    'dates' => [
                        'from' => $req->from,
                        'to' => $req->to
                    ]
                ]
            ], 200);
        }else{
            return response()->json([
                'message' => 'Something went wrong when saving data',
                'status' => 'error',
            ], 200);
        }

    }
}
