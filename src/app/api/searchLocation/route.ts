import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const input = searchParams.get("input");

    const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${input}`;
    const adress = await fetch(url, {
        headers: {
            Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error("KakaoApiError : ", error);
        });

    // const fetcher = (url: string) => fetch(url).then((res) => res.json());

    // const { data, mutate, size, setSize, isValidating, isLoading } = useSWRInfinite(() => url, fetcher);

    return NextResponse.json(adress.documents[0]);
}
