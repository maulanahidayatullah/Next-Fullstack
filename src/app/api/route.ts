import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
    console.log(request);
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    const data = [
        {
            id: 1,
            name: "Via Cute"
        }
    ]

    if (id) {
        const detailData = data.find((item) => item.id == Number(id));
        return NextResponse.json({ status: 200, message: "Success", data : detailData  });
        
    }
    
    return NextResponse.json({ status: 200, message: "Success", data : data  });
}