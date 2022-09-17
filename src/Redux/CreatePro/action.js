import * as actionTypes from "../../Redux/CreatePro/actionType";
import axios from "axios";
const apiUrlHeader = `https://upayments-studycase-api.herokuapp.com/api/products`;

export const getCategories = () => async (dispatch) => {
  try {
    await axios.get(apiUrlHeader + `categories/`).then((response) => {
      dispatch({ type: actionTypes.GET_CATEGORIES, categories: response.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CLEAR_PRODUCTS });
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    await axios.get(apiUrlHeader + `products/`).then((response) => {
      dispatch({ type: actionTypes.GET_PRODUCTS, products: response.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const showCreateModal = (value) => async (dispatch) => {
  try {
    await dispatch({ type: actionTypes.CLEAR_CREATE_RESPONSE });
    await dispatch({ type: actionTypes.IS_CREATE_MODAL, isCreateModal: value });
  } catch (error) {
    console.log(error);
  }
};

// export const createProduct = (data) => async (dispatch) => {
//   try {
//     await axios
//       .post(apiUrlHeader + `products`, data, {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json;charset=UTF-8",
//         },
//       })
//       .then((response) => {
//         dispatch({ type: actionTypes.CREATE_PRODUCTS, postResponse: response });
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createProduct = (data) => async (dispatch) => {

  const config = {
    headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2aW5hc2gua3VtYXI1NTBAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2F2aW5hc2g3MDAwOCIsImlhdCI6MTY2MzIzNjg2MiwiZXhwIjoxNjYzNjY4ODYyfQ.merVv__7gGPngSAu3zRe3hyXm7Vm1v81AwZm6OUm9BU"}` },
  };
  try {
    await axios
      .post(apiUrlHeader + `products`,config, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        dispatch({ type: actionTypes.CREATE_PRODUCTS, postResponse: response });
      });
  } catch (error) {
    console.log(error);
  }
};







export const showProductModal = (value) => async (dispatch) => {
  try {
    await dispatch({ type: actionTypes.IS_PRODUCT_MODAL, isProductModal: value });
    !value && (await dispatch({ type: actionTypes.CLEAR_SELECTED_PRODUCT }));
  } catch (error) {
    console.log(error);
  }
};

export const setSelectedProduct = (id) => async (dispatch) => {
  try {
    await axios.get(apiUrlHeader + `products/${id}`).then((response) => {
      dispatch({ type: actionTypes.SET_SELECTED_PRODUCT, selectedProductDetails: response.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(apiUrlHeader + `products/${id}`).then((response) => {
      dispatch({ type: actionTypes.DELETE_PRODUCTS, deleteResponse: response });
    });
  } catch (error) {
    console.log(error);
  }
};