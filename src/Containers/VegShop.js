import {useState, useEffect} from "react";
import VegList from "../Components/VegList";

const VegShop = () => {

    const [vegtables, setVegtables] = useState(
        [
            {name: "Broccoli" , price: 0.69, id : 1, inBasket: false},
            {name: "Cabbage" , price: 0.49, id : 2, inBasket: false},
            {name: "Mushrooms" , price: 0.84, id : 3, inBasket: false},
            {name: "Courgette" , price: 1.29, id : 4, inBasket: false},
            {name: "Sweet Potato" , price: 0.43, id : 5, inBasket: false},
        ]
    )


    return (
        <>
        <VegList vegtables={vegtables} />
        </>
    )
}

export default VegShop