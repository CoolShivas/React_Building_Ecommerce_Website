import ModalOverlay from "../../UI/ModalOverlay"



const BucketItems = ({hideBucketABC}) =>{

    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]

    return <ModalOverlay>
    <ul>
        {cartElements.map((brr)=>{
            return <li key={brr.id}>
                {brr.title}
                {brr.price}
                <img src={brr.imageUrl} alt="cart items image not found" />
                {brr.quantity}
            </li>
        })}
    </ul>
    <button onClick={hideBucketABC}> Close Bucket </button>
    </ModalOverlay>
}

export default BucketItems;