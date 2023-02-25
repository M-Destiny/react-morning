import { useEffect, useState } from "react";

export default function About() {
    const [no, setNo] = useState(0);
    const [name, setName] = useState("Destiny");
    var myfunc = () => {
        // setNo(no + 1);
        setNo(Math.random());
    }
    var myfunc1 = () => {
        setName("Destiny 69");
    }

    // useEffect(() => {
    //     console.log("useEffect" , Math.random());
    // });
    // useEffect(() => {
    //     console.log("useEffect" , Math.random());
    // }, [no]);
    // useEffect(() => {
    //     console.log("useEffect", Math.random());
    // }, []);
    useEffect(() => {
        console.log("useEffect", Math.random());
    }, [no, name]);
    return (
        <div className="container">
            <h1>About</h1>
            <hr />
            {no}
            <hr />
            <button onClick={myfunc}>click</button>
            <hr />
            {name}
            <hr />
            <button onClick={myfunc1}>click</button>


        </div>
    );
}