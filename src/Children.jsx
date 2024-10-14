export default function Children() {
    return (
        <>
            <Local>
                <p>Ja sam djete 1</p>
                <p>Ja sam djete 2</p>
                <p>Ja sam djete 3</p>
                <p>Ja sam djete 4</p>
            </Local>
        </>
    );

}

function Local(props) {
    return (
    <>
        <h2> Ovo su moja djeca: </h2>
        <div style="background-color: violet; padding 10px;">
            {props.children}
        </div>
    </>
);

}