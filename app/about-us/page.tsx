import Footer from "../responsive/footer"
import Header from "../responsive/header"
export default function About(){
    return(
        <div>
            <Header/>
            <div className="about-container">
                <div className="about-left"><h1 className="main-heading">Founder of Shoby's Fast Food</h1>
                <p><span className="shoaib">Muhammad Shoaib</span> is the founder of Shoby's Fast Food.
                    Muhammad Shoaib is also a Web Developer and software Engineer
                     at Sindh Madressatu Islam University</p>
                </div>
            
            <img className="profile" src="https://media.licdn.com/dms/image/v2/D4D03AQEmi0Z7NdQmLw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710117879838?e=1733961600&v=beta&t=jZe3fw5_QCJzR2Z9j5ZcsECItCV81MuSby5TKuLJCY4" alt="image" />
            </div>
            <div className="down">
        <h1 className="about-heading">About Shoby's Fast Food</h1>
        <p className="about-description">At Shoby’s Fast Food, we are passionate about delivering fast, fresh, and delicious meals to satisfy your cravings. Whether you're in the mood for juicy burgers, crispy fries, or a refreshing beverage, we’ve got something for everyone.

Founded in 2022, Shoby's started with a simple mission: to provide quick and convenient meals without compromising on taste or quality. We take pride in using the freshest ingredients to craft a variety of mouth-watering dishes that are both affordable and satisfying.

Our Promise:
Quality Ingredients: We source only the best ingredients to ensure every bite is bursting with flavor.
Fast Service: No matter how busy your day is, our efficient service ensures you get your meal fast.
Customer Satisfaction: Your happiness is our priority. We’re committed to making sure you leave with a smile.
Visit Shoby’s Fast Food today and experience fast food done right!</p>
</div>
<Footer/>
        </div>
    )
}