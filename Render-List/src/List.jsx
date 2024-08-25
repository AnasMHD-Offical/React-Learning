import { Fragment } from "react"
import propTypes from "prop-types"
function List(props){
    const category = props.category
    const itemList = props.items
    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name} : {item.Kcal}
                                             </li>)

    return(
    <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>
    )
    
}
List.propTypes = {
    category : propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id:propTypes.number, name: propTypes.string , Kcal: propTypes.number}))
}
List.defaultProps = {
    category : "Category",
    items : []
}

export default List