import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { Switch } from "@tremor/react";
import React, { useState } from "react";

function ThemeSwitch() {
    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
    const handleSwitchChange = (value: boolean) => {
        setIsSwitchOn(value);
    };

    return (
        <div className="flex justify-end pb-2 gap-2 text-white">
            <SunIcon width={24} />
            <Switch
                id="switch"
                name="switch"
                className="flex items-center"
                color={"#000000"}
                checked={isSwitchOn}
                onChange={handleSwitchChange}
            />
            <MoonIcon width={24} />
        </div>
    );
}

export default ThemeSwitch;
