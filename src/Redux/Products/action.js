import axios from "axios";

export const GETPRODUCTDATA = "GETPRODUCTDATA";

export const ProductData = (payload)=>({
    type: GETPRODUCTDATA,
    payload: payload
})

export const getProductData = () => (dispatch) => {

    const config = {
        headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2aW5hc2gua3VtYXI1NTBAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2F2aW5hc2g3MDAwOCIsImlhdCI6MTY2MzIzNjg2MiwiZXhwIjoxNjYzNjY4ODYyfQ.merVv__7gGPngSAu3zRe3hyXm7Vm1v81AwZm6OUm9BU"}` },
      };
    
      return axios
        .get('https://upayments-studycase-api.herokuapp.com/api/products/', config)
       .then((res)=>{
        console.log("from action",res.data.products)
        dispatch(ProductData(res.data.products))
     
    }).catch((error) => console.log(error)
  
    );
        





    
}