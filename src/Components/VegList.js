import VegItem from "./VegItem"

const VegList = ({vegtables}) => {

    const ListOfVeg = vegtables.map((veg) => {
        return (
            <VegItem veg={veg}/>
        )
    })

    return (
        <>
        <ul>
            {ListOfVeg}
        </ul>
        </>
    )
}

export default VegList