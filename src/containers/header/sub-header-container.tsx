import { url } from "inspector";
import { Route,Routes, useLocation } from "react-router-dom"
import SubheaderHome from "../../components/header/sub-header-home"
import SubheaderProduct from "../../components/header/sub-header-product"
const SubHeaderContainer = () => {

    const { pathname } = useLocation();

    switch(pathname){
        case '/products/headphones':
        case '/products/earphones':
        case '/products/speakers':
            let urlDetails = pathname.split('/');
            let title = urlDetails[2]
            return <SubheaderProduct title={title}/>
        case '/':
            return <SubheaderHome />
        default:
            return null
    } 
    
    
}

export default SubHeaderContainer