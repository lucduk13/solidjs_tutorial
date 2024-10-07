

export default function Refs(){
    let ivo;

    function checkElement() {
        console.log(ivo.innerHTML);

        const newElement = document.createElement("p");
        newElement.textContent = "Riba ribi grize rep";
        ivo.appendChild(newElement);
    }

    return(
    <>
        <div ref={ivo}>  
            Tajna
        </div>

        <button onClick={checkElement}>Reci mi</button>
    
    </>

    );
}