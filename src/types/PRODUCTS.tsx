
export type Image =  {
    mobile:string,
    tablet:string,
    desktop:string,
    [key: string]: string;
}

export type Quantity = {
    quantity: number,
    item: string
}

export type Gallery = {
    first:Image,
    second:Image,
    third: Image
}

export type OtherProducts = {
    slug:string,
    name:string,
    image: Image
}

export type Product = {
    id: number,
    slug: string,
    name: string,
    image: Image,
    category: string,
    categoryImage: Image,
    new: boolean,
    price: number,
    description: string,
    features:string,
    includes: Quantity[],
    gallery:Gallery,
    others: OtherProducts[]
}

export type OtherProduct = {
    slug: string,
    name: string,
    image: Image
}

export type ProductsProps = {
    products:Product[]
}


export type ProductProps = {
    product:Product,
    index?:number,
    showPurchase?:Boolean
}

export type ProductPageProps = {
    product:Product,
}

export type OtherProductProps = {
    otherProduct:OtherProduct,
}