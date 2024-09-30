import { createSignal, onCleanup, onMount } from "solid-js";
import { Dynamic } from "solid-js/web";

const Red = () => <p style="background-color: red;" >Crvena</p>
const Blue = () => <p style="background-color: blue;" >Plava</p>
const Green = () => <p style="background-color: green;" >Zelena</p>
const Violet = () => <p style="background-color: violet;" >Rozna</p>

function Something() {
    onMount(() => {
        console.log("Komponenta je stvorena");
    });
    
    onCleanup(() => {
        console.log("Komponenta je uništena");
    });
}

const options = {
    red: Red,
    blue: Blue,
    green: Green,
    violet: Violet,
    something: Something
}

const keysAsArray = Object.keys(options);

export default function Dynamo(){
    const[selected, setSelected] = createSignal ("red");

    return (
        <div>
            <select value={selected()} onInput={e => setSelected(e.currentTarget.value)}>
            <For each={Object.keys(options)}>
                {
                (color)=><option value={color}>{color}</option>
                }
            </For>
            </select>
            <Dynamic component={options[selected()]}></Dynamic>
        
        </div>
    );

}