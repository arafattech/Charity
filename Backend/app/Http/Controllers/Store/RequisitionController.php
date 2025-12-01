<?php

namespace App\Http\Controllers\Store;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;
use App\Models\Store\PurchaseRequisition;
use App\Models\Product;
use App\Services\Store\RequisitionService;
use Illuminate\Support\Facades\DB;
use Exception;

class RequisitionController extends Controller
{

    public function __construct(protected RequisitionService $requisitionService){}

    public function approveRequisition(Request $request)
    {
        $srId = $request->srId;
        $result = $this->requisitionService->approveRequisition($srId);

        if ($result['success']) {
            return response()->json([
                'message' => $result['message'],
                'data' => $result['data']
            ], 200);
        }

        return response()->json([
            'message' => $result['message'],
            'error' => $result['error']
        ], 500);
    }

}
