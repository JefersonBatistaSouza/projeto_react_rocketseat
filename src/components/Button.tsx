import { useState } from "react";

type ButtonProps = {
    children: string;
    classe: string
}

export function Button(props: ButtonProps) {
    const [add, setAdd] = useState(0);

    function addItem(){
        setAdd(add + 1);
    }

    return (
        <button onClick={addItem} className={props.classe}>{add}</button>
    )
}