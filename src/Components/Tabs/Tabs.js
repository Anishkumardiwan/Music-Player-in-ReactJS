
import './Tabs.css';

const Tabs = props =>{
    return(
        <div className="tab-container">
            {/* Tab Header */}
            <div className="tab-header flex">
                <a className="active" href="#commercial">
                    Commercial
                </a>
                <a href="#freeLicense">
                    Free License
                </a>
            </div>

            {/* Tab Content */}
            <div className="tab-contents">

                <div className="tab-content" id="commercial">
                    <div className="content-wrapper flex justify-sb m-20">
                        <div className="content-item">
                            <img src="" alt="" />
                        </div>
                        <div className="content-item">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>

                <div className="tab-content" id="freeLicense">
                    Free License
                </div>

            </div>

        </div>
    );
}

export default Tabs;