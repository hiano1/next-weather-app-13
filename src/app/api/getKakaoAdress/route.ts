import { NextRequest, NextResponse } from "next/server";
type Props = {
    lat: number;
    long: number;
};

export function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const long = searchParams.get("long");
    const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${long}&y=${lat}`;
    const adress = fetch(url, {
        headers: {
            Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error("KakaoApiError : ", error);
        });

    return NextResponse.json(adress);
}

// export async function GET(request: NextRequest, { lat, long }: Props) {
//     const defulatGeo = {
//         city: "강남",
//         cuntry: "서울",
//         region: "한국",
//         lat: 37.5326,
//         long: 127.024612,
//     };
//     return NextResponse.json("a");
// }
// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url)
//     const id = searchParams.get('id')
//     const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': process.env.DATA_API_KEY!,
//       },
//     })
//     const product = await res.json()

//     return Response.json({ product })
//   }

//   export async function POST() {
//     const res = await fetch('https://data.mongodb-api.com/...', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': process.env.DATA_API_KEY!,
//       },
//       body: JSON.stringify({ time: new Date().toISOString() }),
//     })

//     const data = await res.json()

//     return Response.json(data)
//   }
