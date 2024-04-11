import classes from "./GettingData.module.css";


const GettingData = () =>{

    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ];
        
        
        
        

    return <div className={classes.unorder_list}>
    <ul>
        {productsArr.map((arr)=>{
            return <li key={arr.title}> 
            <h1> {arr.title} </h1> 
            <img src={arr.imageUrl} alt="image not found" /> 
            <h2> Rs. {arr.price} /- </h2>
            </li>
        })}
    </ul>
    </div>
}

export default GettingData;