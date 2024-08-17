"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardMetrics = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
const getDashboardMetrics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const popularProducts = yield prisma.products.findMany({
            take: 15,
            orderBy: {
                stockQuantity: "desc"
            }
        });
        const salesSummary = yield prisma.salesSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        const purchaseSummary = yield prisma.purchaseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        const expenseSummary = yield prisma.expenseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        const expenseByCategoriesSummary = yield prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        const expenseByCategoriesSummaryRaw = yield prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        });
        // Convert BigInt values to strings
        const convertBigIntToString = (obj) => {
            for (let key in obj) {
                if (typeof obj[key] === 'bigint') {
                    obj[key] = obj[key].toString();
                }
            }
            return obj;
        };
        const expenseByCategory = expenseByCategoriesSummaryRaw.map((item) => {
            var _a;
            return convertBigIntToString(Object.assign(Object.assign({}, item), { amount: ((_a = item.amount) === null || _a === void 0 ? void 0 : _a.toString()) || "0" }));
        });
        res.status(200).json({
            popularProducts: popularProducts.map(convertBigIntToString),
            salesSummary: salesSummary.map(convertBigIntToString),
            purchaseSummary: purchaseSummary.map(convertBigIntToString),
            expenseSummary: expenseSummary.map(convertBigIntToString),
            expenseByCategory,
        });
    }
    catch (error) {
        console.error("Error fetching dashboard metrics:", error);
        res.status(500).json({
            error: "Internal server error. Please try again later.",
            details: error.message,
        });
    }
});
exports.getDashboardMetrics = getDashboardMetrics;
