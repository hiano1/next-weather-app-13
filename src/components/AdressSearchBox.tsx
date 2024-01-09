"use client";

import { TextInput } from "@tremor/react";
import React, { useEffect, useState } from "react";
import SearchedAdressList from "./SearchedAdressList";

function AdressSearchBox() {
    const [searchValue, setSearchValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(searchValue);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [searchValue]);

    const getSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    return (
        <>
            <TextInput className="my-4" placeholder="Search Location" value={searchValue} onChange={getSearchValue} />
            {searchValue && <SearchedAdressList input={debouncedValue} />}
        </>
    );
}

export default AdressSearchBox;
