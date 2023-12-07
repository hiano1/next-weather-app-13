"use client";

import { Country, City } from "country-state-city";
import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GlobeIcon } from "@heroicons/react/solid";

type option = {
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
    };
    label: string;
} | null;

type cityOption = {
    value: {
        latitude: string;
        longitude: string;
        countryCode: string;
        name: string;
        stateCode: string;
    };
    label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name,
}));

function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<option>(null);
    const [selectedCity, setSelectedCity] = useState<cityOption>(null);
    const router = useRouter();

    const handleSelectedCountry = (option: option) => {
        setSelectedCountry(option);
        setSelectedCity(null);
    };

    const handleSelectedCity = (option: cityOption) => {
        setSelectedCity(option);
        router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`);
    };

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <div className="flex items-center space-x-2 text-white/80">
                    <GlobeIcon className="w-5 h-5 text-white" />
                    <p>Country</p>
                </div>
                <Select
                    instanceId={"1"}
                    className="text-black"
                    value={selectedCountry}
                    onChange={handleSelectedCountry}
                    options={options}
                    placeholder={"Select or Search"}
                />
            </div>
            {selectedCountry && (
                <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-white/80">
                        <GlobeIcon className="w-5 h-5 text-white" />
                        <p>City</p>
                    </div>
                    <Select
                        instanceId={"2"}
                        className="text-black"
                        value={selectedCity}
                        onChange={handleSelectedCity}
                        placeholder={"Select or Search"}
                        options={City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map((state) => ({
                            value: {
                                latitude: state.latitude!,
                                longitude: state.longitude!,
                                countryCode: state.countryCode,
                                name: state.name,
                                stateCode: state.stateCode,
                            },
                            label: state.name,
                        }))}
                    />
                </div>
            )}
        </div>
    );
}

export default CityPicker;
