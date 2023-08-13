import PropTypes from "prop-types"
import ProductContainer from "../productContainer/ProductContainer"
import "./style.css"

const ProductsContainer = ({
  products,
  wishlistArray,
  handleAddRemoveFromWishlist,
  setProducts,
  handleProductChanges,
}) => {
  console.log(products)
  return (
    <ul className="products-container">
      {products?.map((product) => {
        return (
          <ProductContainer
            key={product.id}
            product={product}
            products={products}
            wishlistArray={wishlistArray}
            handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
            setProducts={setProducts}
            handleProductChanges={handleProductChanges}
          />
        )
      })}
    </ul>
  )
}

ProductsContainer.propTypes = {
  children: PropTypes.node,
  products: PropTypes.array,
  wishlistArray: PropTypes.array,
  handleAddRemoveFromWishlist: PropTypes.func,
  setProducts: PropTypes.func,
  handleProductChanges: PropTypes.func,
}

export default ProductsContainer
