import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";

type Props = {
    input: string;
};

type Adress = {
    address_name: string;
    x: string;
    y: string;
};

function SearchedAdressList({ input }: Props) {
    const router = useRouter();

    const { data } = useSWR<Adress>(`/api/searchLocation?input=${input}`);
    if (data)
        return (
            <div
                className="p-2 border-2 rounded-lg hover:bg-white hover:text-black cursor-pointer"
                onClick={() => {
                    router.replace(`/?x=${data.x}&y=${data.y}`, { shallow: false });
                    router.refresh();
                }}
            >
                {data.address_name}
            </div>
        );
    else {
        return <div className="p-2 border-2 rounded-lg">Searching..</div>;
    }
}

export default SearchedAdressList;
