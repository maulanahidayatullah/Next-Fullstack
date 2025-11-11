import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    const data = [
        {
            id: 1,
            name: "Steins Gate",
            category : "Time"

        },
        {
            id: 2,
            name: "Monogatari Series",
            category: "Thriller, Vampire"
        }
    ]

    if (id) {
        const detailData = data.find((item) => item.id == Number(id));
        if (detailData) {
            return NextResponse.json({ status: 200, message: "Success", data : detailData  });   
        }

        return NextResponse.json({ status: 404, message: "Not Found", data: {} });
    }
    
    return NextResponse.json({ status: 200, message: "Success", data : data  });
}