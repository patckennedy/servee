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
            <h3>Meghana Foods</h3>
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
