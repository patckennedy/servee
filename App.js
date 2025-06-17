import ReactDOM from 'react-dom/client';

// Header component -------------------------------------------------------------------------------------------------
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                {/* <img className="logo" src={serveeLogo} alt="servee logo" /> */}
                <img
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=All&sf=&txt_keyword="
                    alt="Servee Logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// RestaurantCard Component ----------------------------------------------------------------------------------------
const RestaurantCard = ({ name, cuisines, rating, eta, image }) => {
    return (
        <div className="res-card">
            <img className="res-logo" src={image} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{eta}</h4>
        </div>
    );
};
// Body Component -------------------------------------------------------------------------------------------------
const Body = () => {
    // Array of restaurant dummy data
    const restaurantList = [
        {
            name: 'Meghana Foods',
            cuisines: 'Biryani, North Indian, Asian',
            rating: '4.5 Stars',
            eta: '38 minutes',
            image: 'https://assets.bonappetit.com/photos/61ba78e6ca92b3cc74fd3299/master/w_1600,c_limit/THB.jpg',
        },
        {
            name: 'KFC',
            cuisines: 'Fried Chicken, Burgers',
            rating: '4.2 Stars',
            eta: '25 minutes',
            image: 'https://assets.bonappetit.com/photos/61ba78e6ca92b3cc74fd3299/master/w_1600,c_limit/THB.jpg',
        },
        {
            name: "Domino's Pizza",
            cuisines: 'Pizza, Italian',
            rating: '4.3 Stars',
            eta: '30 minutes',
            image: 'https://assets.bonappetit.com/photos/61ba78e6ca92b3cc74fd3299/master/w_1600,c_limit/THB.jpg',
        },
        // Later add 3 more below to make it 6 total
    ];

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* // RestaurantCard */}

                {restaurantList.map((restaurant, index) => (
                    <RestaurantCard
                        key={index}
                        name={restaurant.name}
                        cuisines={restaurant.cuisines}
                        rating={restaurant.rating}
                        eta={restaurant.eta}
                        image={restaurant.image}
                    />
                ))}
            </div>
        </div>
    );
};

// AppLayout --------------------------------------------------------------------------------------------------------
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
// Rendering the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
