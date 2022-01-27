
import './Tabs.css';

const Tabs = props =>{
    return(
        <div className="tab-container">
            {/* Tab Header */}
            <div className="tab-header flex">
                <a className="active" href="#commercial">
                    Commercial
                </a>
                <a href="freeLicense">
                    Free License
                </a>
            </div>

            {/* Tab Content */}
            
        </div>
    );
}

export default Tabs;