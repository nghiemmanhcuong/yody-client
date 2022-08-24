const activeHeartProduct = (listProduct,productId) => {
    const index = listProduct.findIndex(product => product._id === productId);
    if(index !== -1) {
        return true;
    }else {
        return false;
    }
}

export default activeHeartProduct;