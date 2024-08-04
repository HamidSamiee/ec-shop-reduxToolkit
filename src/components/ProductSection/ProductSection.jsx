import { Fragment } from "react"
import { storeData } from "../../assets/data/dummydata"
import ProductSectionItem from "./ProductSectionItem"
import getRandomElements from "../../utils/randomElements"



const ProductSection = () => {

   const randomElements=getRandomElements(storeData,6);

  return (
    <section className="py-8 ">
        <div className="container xl:max-w-screen-xl">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {
                        randomElements.map((product)=>{
                            return(
                                <Fragment key={product.id}>
                                <ProductSectionItem  product={product}/>
                                </Fragment>
                            )
                        })   
                    }
            </div>
        </div>
    </section>
  )
}

export default ProductSection