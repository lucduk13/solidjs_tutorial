import { createMemo, createSignal } from "solid-js";

function fibonacci(num){
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

export default function Counter2() {
    const [count, setCount] = createSignal(10);
    const fib = createMemo(() => {
        console.log("računam");
        return fibonacci(count());
    });

    return(
        <div>
            <button onClick={() =>setCount(count() + 1)}>+1</button>
            <div>1, {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div>2, {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div>3, {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div>4, {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            <div>5, {fib()} {fib()} {fib()} {fib()} {fib()} </div>
            

        </div>
        
    );
}
