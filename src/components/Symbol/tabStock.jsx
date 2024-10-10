import './tabStock.css'
export default function TabStock({children,onSelect,isSelected}){
    return(

            <button  className={isSelected ?"active" : undefined } onClick={onSelect}>{children}</button>

    )
}