import { useParams } from "react-router-dom"

const VegItem = ({veg}) => {
    // const {veg} = useParams()

    return (
        <li>
        {veg.name}
        </li>
    )
}

export default VegItem