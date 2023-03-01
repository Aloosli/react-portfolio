import clock from '../icons/clock.svg';
import coins from '../icons/coins.svg';
import innovative from '../icons/innovative.svg';
import responsive from '../icons/responsive.svg';


const ServicesSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>Unleashing<span> creative</span> potential</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock-icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={coins} alt="coins-icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={innovative} alt="lightbulb-icon" />
                            <h3>Innovative</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={responsive} alt="mobile-icon" />
                            <h3>Responsive</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ServicesSection;