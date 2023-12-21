import { useState } from "react";
import DragLi from "./DragLi";
import "./App.css";

function App() {
    const [aBox, setABox] = useState([1, 2, 3, 4]);
    const [bBox, setBBox] = useState([1, 2, 3, 4]);

    const handleDrop = (box: string) => {
        return (e: React.DragEvent<HTMLLIElement>) => {
            let droppedData = function () {
                let data = e.dataTransfer.getData("text");

                return Number(data);
            };

            if (box === "A") {
                setABox(aBox.push(droppedData));
                console.log(aBox);
            }
            console.log(e);
        };
    };

    return (
        <div className="wrapper">
            <ul onDrop={handleDrop("A")}>
                <DragLi key={aBox.length} boxItem={aBox} />
            </ul>
            <ul onDrop={handleDrop("B")}>
                <DragLi key={bBox.length} boxItem={bBox} />
            </ul>
        </div>
    );
}

export default App;
