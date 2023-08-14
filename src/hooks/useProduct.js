// lib
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// utils
import apiClient from "../api/apiClient";
import { fetchTrlOptions, trlOptionsSelector } from "../redux/slices/optionSlice";
import { useNavigate } from "react-router-dom";

const useProduct = (productId) => {
  const [product, setProduct] = useState();
  const [hasError, setHasError] = useState(false);

  const trlOptions = useSelector(trlOptionsSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Fetch Product details */
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

    if (isMounted) {
      getProductDetails();
    }

    return () => {
      isMounted = false;
    };
  }, [productId]);

  /* Fetch TRL options if not already present in redux store */
  useEffect(() => {
    let isMounted = true;

    if (!trlOptions && isMounted) {
      dispatch(fetchTrlOptions());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, trlOptions]);

  const updateProduct = useCallback(
    async (values) => {
      try {
        let payload = {
          ...values,
          trl: { id: values.trl },
        };
        await apiClient.put(`/product/${productId}/`, payload);

        /* TODO: remove custom delay  */
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Successfully updated product details!");
        navigate("/product");
      } catch (error) {
        console.log("Error updating product details: ", error);
        alert("Failed to update the product details!");
      }
    },
    [navigate, productId]
  );

  return { product, hasError, updateProduct, trlOptions };
};

export default useProduct;
