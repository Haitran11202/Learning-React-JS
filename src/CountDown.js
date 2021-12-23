import { useState, useEffect } from 'react'
function CountDown() {

    const [CountDown, setCountDown] = useState(180);

    useEffect(() => {
        const timerId = setInterval(()=> {
            setCountDown((prev) => (prev - 1))
            console.log("Set CountDown");
        },1000);
        return () => clearInterval(timerId);

    }, []);

    return (
        <div>
            <h1 style={{ padding: 20 }}>{CountDown}</h1>
        </div>
    )

}

export default CountDown;