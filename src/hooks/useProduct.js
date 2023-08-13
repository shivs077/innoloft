// lib
import { useEffect, useState } from "react";

// utils
import apiClient from "../api/apiClient";

const useProduct = (productId) => {
  const [product, setProduct] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const getProductDetails = async () => {
      try {
        const response = await apiClient.get(`/product/${productId}/`);
        let product = response.data;
        if (isMounted) setProduct(product);
      } catch (error) {
        console.log("Error fetching product details: ", error);
        setHasError(true);
      }
    };

    if (isMounted) getProductDetails();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  return [product, hasError];
};

export default useProduct;
