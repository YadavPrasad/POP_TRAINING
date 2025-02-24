import { useState } from "react"

const useMemorize = (key, value)=> {
    var [text, setText] = useState(() => {
        var jsonValue = localStorage.getItem(key);
        if (jsonValue != null) return jsonValue;

    });

    useEffect(()=> {
        localStorage.setItem(key, value);
    }, [key, value]);

    return text, setText;
}

export default useMemorize;

//custom hook sis used to create our own hooks by manipulating the prefined hooks
/* higher order components (HOC) -> it is a component build upon  another component  
LOGIN ->

*/




