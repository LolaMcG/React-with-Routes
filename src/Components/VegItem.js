import { useParams } from "react-router-dom"

const VegItem = ({veg}) => {
    const {id} = useParams()    //

    return (
        <li>
        {veg.name} {veg.id}
        </li>
    )
}

export default VegItem