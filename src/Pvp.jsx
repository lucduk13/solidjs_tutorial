import { createSignal } from "solid-js";


export default function Pvp(){
    const [name, setName] = createSignal();

    return (
        <>
        <Local greeting="Dobar dan" name="Pero" />
        <Local name="Jozo" />
        <Local greeting="Bogdaj" />
        <Local name={name()} />

        <button onClick={() => setName("Jura")}>Promijeni ime</button>
        </>
    );
}

function Local (props) {
    const merged = mergeProps({greeting: "Bok", name: "Ivan"}, props);

    //const merged = { ...{name: "Ivan", greeting: "Bok"}, ...props,}

    return(
        <h1>
            {merged.greeting} {merged.name}
        </h1>
    );
}