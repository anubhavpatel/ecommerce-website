import {React,useState}from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {GrClose} from "react-icons/gr"
import {BsChatText} from "react-icons/bs"
import "../style/Home.scss"

const img1 =
  "https://static.wixstatic.com/media/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg";
const img2 =
  "https://static.wixstatic.com/media/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg";
const img3="https://static.wixstatic.com/media/ead566_bb684fa9db814a0783631430b46f33bb~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_bb684fa9db814a0783631430b46f33bb~mv2.jpg";
const img4="https://static.wixstatic.com/media/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg";
const img5= "https://static.wixstatic.com/media/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg";
const img6="https://static.wixstatic.com/media/ead566_f00cb71f38d7415eacd2c60085f51907~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_f00cb71f38d7415eacd2c60085f51907~mv2.jpg";

  const Home = () => {
   
   

    const productList = [
        {
          name: "Plant Based Reusable Cups",
          price: 2,
          imgSrc: img1,
          id: "asd1",
        },
        {
          name: "Sustainability Starter Kit",
          price: 10,
          imgSrc: img2,
          id: "asd2",
        },
        {
          name: "Natural Bamboo Loofah",
          price: 3,
          imgSrc: img3,
          id: "asd3",
        },
        
        {
          name: "Bamboo Toothbrush",
          price: 4,
          imgSrc: img4,
          id: "asd4",
        },
        {
          name: "Plant Based Reusable Container",
          price: 3,
          imgSrc: img5,
          id: "asd5",
        },
        
        {
          name: "Reusable Bamboo straws",
          price: 2,
          imgSrc: img6,
          id: "asd6",
        },
        
      ];
    
      const dispatch = useDispatch();

    
      const addToCartHandler = (options) => {
        dispatch({ type: "addToCart", payload: options });
        dispatch({
          type: "calculatePrice"
        })
        toast.success("Added To Cart");
      };

      const [popupContent,setPopupContent]=useState([]);
      const [showModal, setShowModal]=useState(false);
     
      const modalView=(i)=>{
        setPopupContent([i]);
         setShowModal(true);
      }

    return (
      <>
        <div className="home">
         
          {productList.map((i) => (
              <>
            <ProductCard
          modalView={modalView}
          i={i}
              key={i.id}
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              id={i.id}
              handler={addToCartHandler}
            />
            
          </>
          ))}
       
        </div>
           {showModal &&
            <div className="pop_up">
           <div className="pop_up_content">
            <div className="btn">
             <GrClose  onClick={()=>setShowModal(false)}/>
             </div>
            <div className="content">
             {popupContent.map((pop)=>{
               return (
                <>
                <img src={pop.imgSrc} alt={pop.imgSrc}/>
                  <p>Name:{" "}{pop.name}</p>
                  <p>Price:{" "}${pop.price}</p>
                  </>
               
               )
             })}
             </div>
             </div>
         </div>   
         }
          
          <button className='chat' ><BsChatText className='icon'/>Let's Chat</button>
        </>
      );
    };
    
    const ProductCard = ({ name, id, price, handler, imgSrc,modalView,i}) => (
    
     <div className="productCard">
      
        <img src={imgSrc} alt={name} onClick={()=>modalView(i)} />
       
        <p>{name}</p>
        <div className="detailes">
        <h4>${price}</h4>
        <p onClick={()=>modalView(i)}>Detailes</p>
        </div>
        <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
          Add to Cart
        </button>
      </div>
     

    );

export default Home