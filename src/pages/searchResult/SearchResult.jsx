import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductsByName } from "../../services";
import ProductsContainer from "../../components/products/productsContainer/ProductsContainer";

function SearchResult() {
  const [productsSearched, setProductsSearched] = useState([]);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchedName = query.get("name");

  useEffect(() => {
    const getProducts = async () => {
      const result = await getProductsByName(searchedName);
      setProductsSearched(result.data.products);
    };
    getProducts();
  }, [searchedName]);

  return (
    <div>
      <h2>Resultado de tu búsqueda:</h2>
      <ProductsContainer products={productsSearched} />
      {/* //NO SALEN IMAGENES,FALTA CAMBIAR BACK */}
    </div>
  );
}
export default SearchResult;
