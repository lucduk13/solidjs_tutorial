import { createSignal, Match, Switch } from "solid-js";


export default function Menu(){
    const[x, setX] = createSignal(7);

    setInterval(() => {
        setX(x() + 1);
    }, 1000);

    return (
        <Switch fallback={<p>x je između 5 i 10</p>}>
            <Match when={x() > 10}>
                <p>X je veći od 10</p>
            </Match>
            <Match when={x() < 5}>
                <p>X je manji od 5</p>
            </Match>

        </Switch>
    );

}