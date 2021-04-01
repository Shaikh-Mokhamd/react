import {useState} from "react";

function MainContent(props) {
    const [counter, setCounter] = useState(0);
    function plus(){
        setCounter(counter + 1)
    }


    function minus() {
        if (counter > 0) {

            setCounter(counter - 1)
        }
    }
    function reset(){
        setCounter(0)
    }
    return(
        <section className='rod-big-nil'>
            <div className='big-nil'>
                {counter}
            </div>
            <div className='big-group-five'>
                <button className='butt' onClick={plus}>Увеличить</button>
                <button className='butt2' onClick={minus}>Уменьшить</button>
                <button className='butt3' onClick={reset}>Сбросить</button>
            </div>
        </section>
    )
}

export default MainContent;