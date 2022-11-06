import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'


const ItemListContainer = () => {
    const { categoryId } = useParams()


        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setCargando(false)
        })
    }, [categoryId])

    // mostrar si esto está cargando, y cambia el estado de useState a falso cdo se resuelva la promesa en finally
    if (cargando) {
        return (
            <div className='center'>
                <h1>Cargando...</h1>
                <DotSpinner size={40} speed={0.9} color="black" className="center" />
            </div>
        )
    }
}
export default ItemListContainer