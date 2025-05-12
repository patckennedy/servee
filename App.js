import ReactDOM from 'react-dom/client';

// Header component
const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="./images/servee.png" alt="servee logo" />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return <div class="app"></div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();
