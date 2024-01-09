import Clock from "react-live-clock";

function LiveClock() {
    return (
        <div className="flex flex-col mb-2">
            <p className="texl-xl">
                {new Date().toLocaleDateString("Kr-ko", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
            <p className="text-4xl font-bold uppercase static">
                <Clock format="hh:mm:ss a" timezone={Intl.DateTimeFormat().resolvedOptions().timeZone} noSsr ticking />
            </p>
            <p className="font-extralight">TimeZone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
        </div>
    );
}

export default LiveClock;
