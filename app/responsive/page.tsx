import styles from "./page.module.css"
import Image from 'next/image';


export default function Responsive(){
    return(
        <div>
        <h1 className="restaurant-heading">Shoby's Fast Food</h1>
        <div className={"parent-container"}>
  
         
        <div className="child-container">
           <img className="img" src="https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/520765216/classic-beef-burger.jpg?quality=82&strip=1" alt="Image"  />
            <h1 className="blog-title">Beef Burger</h1>
            <p className="descriptions">"Juicy, big, loaded with toppings of my choice.
             </p>
             <button className="read-more">Order Now</button>
        </div>


        <div className="child-container">
        <img className="img" src="https://sailorbailey.com/wp-content/uploads/2023/03/Crispy-Chicken-Burger4.jpg" alt="Image"  />
            <h1 className="blog-title">Chicken Burger</h1>
            <p className="descriptions">"Juicy, big, loaded with toppings of my choice.
             </p>
             <button className="read-more">Order Now</button>
        </div>


        <div className="child-container">
        <img className="img" src="https://www.kitchentreaty.com/wp-content/uploads/2022/02/club-sandwiches-two-ways-3.jpg" alt="Image"  />
            <h1 className="blog-title">Club Sandwich</h1>
            <p className="descriptions">"Juicy, big, loaded with toppings of my choice.
             </p>
             <button className="read-more">Order Now</button>
        </div>

        <div className="child-container">
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3_aT24CA9l-oIjUOc825kHKut1PZLw-158-Ma8CnBMU-GPsHHkLOL1MxvDw3YeHBTGM&usqp=CAU" alt="Image"  />
            <h1 className="blog-title">Zinger</h1>
            <p className="descriptions">"Juicy, big, loaded with toppings of my choice.
             </p>
             <button className="read-more">Order Now</button>
        </div>

        <div className="child-container">
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK55Lrk-y39Mid1FxoGCZtAsID5u64Dkhxuw&s" alt="Image"  />
            <h1 className="blog-title">Chicken Broast</h1>
            <p className="descriptions">"Juicy, big, loaded with toppings of my choice.
             </p>
             <button className="read-more">Order Now</button>
        </div>

        <div className="child-container">
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zMTECGS3xhIillmXlHtQuXGKkb_eE-92J8ESogSRYmDlLHtLThII33l-2WxsSa7mOPg&usqp=CAU" alt="Image"  />
            <h1 className="blog-title">Chicken Chow Mein</h1>
            <p className="descriptions">"Juicy, big, loaded with toppings of my choice.
             </p>
             <button className="read-more">Order Now</button>
        </div>

        <div className="child-container">
        <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08gcVkuidLIzCJnqdztWjL46jn4MUkdbwvw&s" alt="Image"  />
            <h1 className="blog-title">Chicken Wings</h1>
            <p className="descriptions">L"Juicy, big, loaded with toppings of my choice.
             </p>
             <button className="read-more">Order Now</button>
        </div>

        <div className="child-container">
        <img className="img" src="https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenNuggets.webp" alt="Image"  />
            <h1 className="blog-title">Chicken Nuggets</h1>
            <p className="descriptions">L"Juicy, big, loaded with toppings of my choice.
             </p>
             <button className="read-more">Order Now</button>
        </div>






        </div>
        </div>
    )
}