import CSS from './filterBar.module.css'

function FilterBar(){
    return(
        <>
        <div className={CSS.filterBar}>
            <p className={`${CSS.filterBtn} ${CSS.activeBtn}`}>Paper Lamp</p>
            <p className={CSS.filterBtn}>Dung Lamp</p>
            <p className={CSS.filterBtn}>Fancy</p>
        </div>
        </>
    )
}

export default FilterBar