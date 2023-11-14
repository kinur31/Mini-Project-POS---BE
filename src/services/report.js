import {} from "../queries/report"



const findTransactionQuery = async ({id=null}) => {
    try {
        const params = {};
        if (id) params.id = id;
        const res = await findTransactionQuery({
            where: { 
              id: id,
              //   ...params,
            }),
           
    return res;
    } catch (err) {
        throw err;
    }
  };
  
  
  const getAllTransactionService = async (startDate, endDate) => {
    try {
      const res = await getAllTransactionQuery(
          startDate,
          endDate,
          );
          return res;
        } catch (err) {
          throw err;
        }
    }
      
   
  
  
  
  const createProductQuery = async (
      product_name,
      product_category_id,
      price,
      stock,
      status_product,
      image,
  ) => {
      try {
      const res = await products.create({
          product_name,
          product_category_id,
          price,
          stock,
          status_product: true,
          image,
      });
      console.log(res);
      return res;
    } catch (err) {
      throw err;
    }
  };
  
  
  const updateTransactiontQuery = async (id, total_price, total_qty, product_name, user_id, ) => {
      console.log(id, product_name, product_category_id, price)
    try {
        const res = await products.updateMany(
            {
              total_price, total_qty, product_name, user_id,
            },
            {
                where:{
                    id: id,
                } 
        })
  
    return res;
  } catch (err) {
    throw err;
  }
  };
  
  
  const gruopTransactionByDateQuery = async () => {
    try {
        const res = await gruopTransactionByDateQuery();
        return res;
    } catch (err) {
        throw err;
    }
  };
   
  
  
  const deleteProductQuery = async (id) => {
    try {
        const res = await products.destroy(
            {
                where:{
                    id: id,
                } 
        });
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
  };
  
  
  module.exports = {
      createProductQuery,
      findProductQuery,
      updateProductQuery,
      deactiveProductQuery,
      deleteProductQuery,
      getProductQuery,
  };