import axios from "axios";
import { useSelector,useDispatch } from "react-redux"
import { getBookData } from "../Redux/Actions";
import { Navbar } from "./Navbar"
import { useEffect } from "react";
import { addToCart } from "../Redux/Actions";
import { useNavigate } from "react-router";

export const BookStore = () => {

    const data = useSelector((store) => store);
    console.log(data)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        fetchBookData()
      }, []);

      const fetchBookData = () => {
          axios.get('https://bookstroe-backend-server.herokuapp.com/books')
          .then((res) => {
              dispatch(getBookData(res.data))
          })
      }
    return (
        <>
          <Navbar />
          <div>
          {
              data?.filteredBooks.map((item) => {
                  return <SingleBook dispatch={dispatch} navigate={navigate} addToCart={addToCart} name={item.title} price={item.price} image={item.image} author={item.author} />
              })
          }
          </div>
        </>
        
    )
}

const SingleBook = ({dispatch,navigate,addToCart,name,price,image,author}) => {

    const handleRemoveCart = () => {
       
    }
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <img src={image} />
            <p>{author}</p>
            <button onClick={handleRemoveCart}>Add to Cart</button>
        </div>
    )
}