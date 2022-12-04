import { useContext,useState,useEffect,createContext } from "react";


const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [cartProduct,setCartProduct]=useState([]);
    const addProduct = (product) => {
        // console.log(product)
        setCartProduct([...cartProduct,product]);
    }
    const removeProduct = (product) => {
        setCartProduct(cartProduct.filter((item) => item.id !== product.id));
    }
    const clearCart = () => {
        setCartProduct([]);
    }
    const totalBill=()=>{
        let total=0;
        cartProduct.forEach((item)=>{
            total+=parseFloat(item.product_price);
        })
        return total;
    }
    return(
        <CartContext.Provider value={{item:0,cartProduct,addProduct,removeProduct,clearCart,totalBill}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;


