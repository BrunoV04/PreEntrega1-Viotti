import item from '../ItemListContainer/ItemListContainer.module.css'

const ItemListContainer = (props) => {
    return (
        <div className="container">
        <h1 className={item.h1}>{props.bievenida}</h1>
        </div>
    )
}

export default ItemListContainer