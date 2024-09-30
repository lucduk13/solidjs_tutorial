import { createSignal } from "solid-js";

export default function Login() {
    const [loggedin, setLoggedin] = createSignal(false);
    const toggle = () => setLoggedin(!loggedin());

    return (
        <div>
            <Show when={loggedin()}
                fallback={<button onClick={toggle}>Log out</button>}>
                <button onClick={toggle}>Log in</button>
            </Show>
        </div>
    );
}