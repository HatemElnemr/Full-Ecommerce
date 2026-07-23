
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import ProductLoading from '../../components/slideProduct/ProductLoading';

export default function CategoryPageLoading() {
  return (
    <div className="category_products">
          <div className="container">
            <div className="top_slide">
              <h2>
                <Skeleton />
              </h2>
              <p>
                <Skeleton />
              </p>
            </div>
            <div className="products">
                <ProductLoading/>
                <ProductLoading/>
                <ProductLoading/>
                <ProductLoading/>
                <ProductLoading/>
                <ProductLoading/>
                <ProductLoading/>
                <ProductLoading/>
                <ProductLoading/>
                <ProductLoading/>
                
            </div>
          </div>
        </div>
  )
}
