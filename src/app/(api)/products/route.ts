import { products } from "./products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    return new NextResponse(JSON.stringify(products));
}
