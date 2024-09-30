import { createSignal, For } from "solid-js"


export default function Flow() {
    const [users, setUsers] = createSignal([
        { id: "1", name: "Pero Perić" },
        { id: "2", name: "Ana Anić" },
        { id: "3", name: "Ivo Ivić" },
        { id: "4", name: "Marko Marić" },
    ]);

return (
    <div>
        <ul>
            <For each={users()}>
                {
                    (user, i) =>
                <li>
                    /(1)/ {user.id}: {user.name}
                </li>
                    }
            </For>
        </ul>
        <ul>
            <Index each={users()}>
                {
                    (user, i) =>
                <li>
                    /(1)/ {user().id}: {user().name}
                </li>
                    }
            </Index>
        </ul>
    </div>
);
}