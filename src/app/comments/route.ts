 import { comments } from "./data";

// export async function GET(){
//     return new Response("ok")
// }

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    return new NextResponse(JSON.stringify(comments));
}

