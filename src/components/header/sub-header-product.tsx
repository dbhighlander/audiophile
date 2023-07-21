import { useLocation, useParams } from "react-router-dom";
import  './header.css'
export type SubheaderProps= {
    title:string
}

const SubheaderProduct = ({title}:SubheaderProps) => {


    return (
        <div className=" header__product">
            <h2 className="page__subtitle--product">{title}</h2>
        </div>
    )
}

export default SubheaderProduct