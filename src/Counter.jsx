import { createEffect, createSignal } from "solid-js";


export default function Counter() {
    const [count, setCount] = createSignal(0);

    const doubleCount = () => count() * 2; 

    createEffect(() => {
        console.log("Varijabla se promijenila na " + count ());
    });

    setInterval(() => {
        setCount(count() + 1);
    },    1000);
    

    return (
        <div>
            Brojač: {count()} <br />
            Dupli broja: {doubleCount()}
        </div>
    );
}