import { onMount } from "solid-js";


export default function Spreads() {
    
    const objekt1 = {
        ime: "Pero",
        prezime: "Perić",
        adresa: "Trg slobode 7, Koprivnica",
        datumRodjenja: "11.11.2011."
    };
    const objekt2 = {
        ime:"Ivo",
        oib: "12345678901"
    };
    const polje1 =  [1, 2, 3];
    const polje2 = ["pon", "uto", "sri"];

    const spoj = {...objekt1, ...objekt2};

    const spojPolja = [...polje1, ...polje2];
    const elNaPoc = [0, ...spojPolja];
    const elNaKraj = [...spojPolja, "cet"];

    onMount(() => {
        console.log("Objekt1", objekt1);
        console.log("Objekt2", objekt2);
        console.log("Objekt1+Objekt2", spoj);

        console.log("Polje1+Polje2", spojPolja);
        console.log("Spajanje elemenata", elNaPoc, elNaKraj);
    });
    
    return (
        <>
        <Local ime="Lucija" prezime="D" adresa="upitna" />

        <Local ime={objekt1.ime} prezime={objekt1.prezime} adresa={objekt1.adresa} />

        <Local {...objekt1} />
        </>
    );

    function Local (props) {

        return (
            <>
            <p>Ova komponenta je primila podatke iz vana.</p>
            <p>Podaci su sljedeći:</p>
            <ul>
                <li>Ime: (props.ime)</li>
                <li>Prezime: (props.prezime)</li>
                <li>Adresa: (props.adresa)</li>
            </ul>
            </>
        );

    };
}