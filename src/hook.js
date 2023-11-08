import { useEffect } from "react";

function HookComponent() {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    useEffect(myCallback, [numberOfClicks]);
    function myCallback() {
        console.log("changed");
    }

    function onClickFunction() {
        const newNumberOfClicks = numberOfClicks + 1;
        setNumberOfClicks = { newNumberOfClicks };
    }



    return (
        <div>
            <span>{numberOfClicks}</span>
            <button onClick={onClickFunction}>Click</button>
        </div>
    );
}
export default HookComponent;