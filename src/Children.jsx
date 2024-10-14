

export default function Children() {
    return (
        <>
            <Local>
                <p>ja sam dijete 1</p>
                <p>ja sam dijete 2</p>
                <p>ja sam dijete 3</p>
                <p>ja sam dijete 4</p>
                <p>ja sam dijete 5</p>
            <Local/>
        </>
    );

};

function Local(props) {
    return (
        <>
        <h2>ovo su moja djeca</h2>
        <div style="backround-color: lightpink; padding: 10px">
            {props.children}
        </div>
        </>
    );
}