<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WorkController extends Controller
{
    public function giganciProgramowania()
    {
        return view('work.gp-1');
    }

    public function giganciProgramowania2()
    {
        return view('work.gp-2');
    }
}
