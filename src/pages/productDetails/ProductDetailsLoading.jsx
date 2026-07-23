import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SlideProductLoading from "../../components/slideProduct/SlideProductLoading";

export default function ProductDetailsLoading() {
  return (
    <>
      <div className="item_details">
        <div className="container">
          <div className="img_items">
              <Skeleton height={600} width={540} />

          </div>

          <div className="details_item">
            <h1 className="name">
              <Skeleton height={42.22}/>
            </h1>
            <div className="stars">
              <Skeleton height={20} width={675} />
            </div>
            <p className="price">
              <Skeleton height={26.67}/>
            </p>

            <h5>
              <Skeleton height={20}/>
            </h5>
            <p className="desc">
              <Skeleton height={50}/>
            </p>
            <h5 className="stock">
              <Skeleton height={26.67}/>
            </h5>

            <button >
              <Skeleton height={44} width={168}/>
            </button>

            <div className="icons">
              <span>
                <Skeleton />
              </span>
              <span>
                <Skeleton />
              </span>
            </div>
          </div>
        </div>
      </div>

      <SlideProductLoading isLoading={true}/>
    </>
  );
}
