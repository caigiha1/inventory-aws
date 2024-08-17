import { Request, Response } from "express";
import {PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export const getDashboardMetrics = async (req: Request, res: Response) => {
    try {
        const popularProducts = await prisma.products.findMany({
            take: 15,
            orderBy: {
                stockQuantity:"desc"
            }
        });

        const salesSummary = await prisma.salesSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        })
        const purchaseSummary = await prisma.purchaseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        })
        const expenseSummary = await prisma.expenseSummary.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        })

        const expenseByCategoriesSummary = await prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        })

        const expenseByCategoriesSummaryRaw = await prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
                date: "desc"
            }
        })

        // Convert BigInt values to strings
        const convertBigIntToString = (obj: any) => {
            for (let key in obj) {
                if (typeof obj[key] === 'bigint') {
                    obj[key] = obj[key].toString();
                }
            }
            return obj;
        };

        const expenseByCategory = expenseByCategoriesSummaryRaw.map((item) => convertBigIntToString({
            ...item,
            amount: item.amount?.toString() || "0",
        }));

        res.status(200).json({
            popularProducts: popularProducts.map(convertBigIntToString),
            salesSummary: salesSummary.map(convertBigIntToString),
            purchaseSummary: purchaseSummary.map(convertBigIntToString),
            expenseSummary: expenseSummary.map(convertBigIntToString),
            expenseByCategory,
        });

    }
        catch (error: any) {
            console.error("Error fetching dashboard metrics:", error);
            res.status(500).json({
                error: "Internal server error. Please try again later.",
                details: error.message,
            });
    }
}