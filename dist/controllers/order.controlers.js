import { TransactionService } from "#services/orders";
import { errorResponse, successResponse } from "#utils/response";
export const checkout = async (req, res) => {
    try {
        const { userId, items } = req.body;
        const result = await TransactionService.checkout(userId, items);
        return successResponse(res, "Checkout success", result, null, 201);
    }
    catch (error) {
        console.log(error);
        return errorResponse(res, `Checkout failed: ${error}`, 500);
    }
};
export const getDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await TransactionService.getTransactionById(Number(id));
        if (!result)
            return errorResponse(res, "Transaction not found", 404);
        return successResponse(res, "Get transaction detail success", result, null, 200);
    }
    catch (error) {
        console.log(error);
        return errorResponse(res, `Get transaction detail failed: ${error}`, 500);
    }
};
//# sourceMappingURL=order.controlers.js.map