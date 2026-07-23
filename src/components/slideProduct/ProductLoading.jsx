import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


export default function ProductLoading() {
  return (
    <div className="product">
          <div className="img_product">
              <Skeleton height={180}
                width={217.78}
              />
          </div>
          <p className="name_product">
            <Skeleton />
          </p>
          <div className="stars">
            <Skeleton width={217.78} height={18}/>
          </div>
    
          <p className="price">
            <Skeleton height={24}/>
          </p>
        </div>
  )
}
