import ReactDOM from 'react-dom/client';

// Header component
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

// RestaurantCard
const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src="https://assets.bonappetit.com/photos/61ba78e6ca92b3cc74fd3299/master/w_1600,c_limit/THB.jpg"
                alt="res-logo"
            />
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.5 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};

// Body Section
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* // RestaurantCard */}
                <RestaurantCard />
            </div>
        </div>
    );
};

// AppLayout
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
