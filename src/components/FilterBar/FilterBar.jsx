import useFetch from '../../hooks/useFetch/useFetch'
import CSS from './filterBar.module.css'

function FilterBar(){
    const categories = useFetch('https://fakestoreapi.com/products/categories')
    return(
        <>
        <div className={CSS.filterBar}>
            {categories.map(category =>{
                console.log(category)
                return <p className={CSS.filterBtn}>{category}</p>
            })}
{/* 
            <p className={`${CSS.filterBtn} ${CSS.activeBtn}`}>Paper Lamp</p>
            <p className={CSS.filterBtn}>Dung Lamp</p>
            <p className={CSS.filterBtn}>Fancy</p> */}
        </div>
        </>
    )
}

export default FilterBar