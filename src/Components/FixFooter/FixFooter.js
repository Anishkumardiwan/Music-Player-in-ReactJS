
import { useState } from 'react';
import { closeIcon, homeIcon, nextIcon, pauseBlackIcon, pauseGreyIcon, playBlackIcon, playGreyIcon, prevIcon, userIcon } from '../../assets';
import './FixFooter.css';

const FixFooter = (props) => {

    const [slideUp, setSlideUp] = useState(false);

    return (
        <div className={`fix-footer ${slideUp ? 'active' : ''}`}>
            <div onClick={() => setSlideUp(!slideUp)} className="slide-up-btn"></div>

            <div className="d-visilibity"></div>

            {
                slideUp && (

                    <div className='audio-player-lg'>
                        <div className="audio-cover-lg-img">
                            <img  />
                        </div>

                        <div>
                            <h2>Beyond the line</h2>
                            <h3>Anish Diwan</h3>
                        </div>

                        <div className='audio-player-progress'>
                            <input type="range" min={'0'} max={'100'} />
                        </div>

                        <div className='audio-controls flex justify-sb'>
                            <button>
                                <img src={prevIcon} alt="" />
                            </button>
                            <button className='play-pause-btn'>
                                <img src={playBlackIcon} alt="" />
                            </button>
                            <button>
                                <img src={nextIcon} alt="" />
                            </button>
                        </div>
                    </div>

                )
            }

            {
                !slideUp && (
                    <>
                        <div className="mini-player flex justify-sb align-center mtb-10">
                            <div className='flex align-center'>
                                <div className="artist-cover-img">
                                    <img src='' alt="" />
                                </div>
                                <div className='mini-player-info mlr-10'>
                                    <p>Beyond the line</p>
                                    <p>Anish Diwan</p>
                                </div>
                            </div>

                            <div className="mini-player-control flex">
                                <button>
                                    <img src={playGreyIcon} alt="" />
                                </button>
                                <button>
                                    <img src={closeIcon} alt="" />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Menu  */}
                        <div className="navigation-menu flex justify-evenly">
                            <a href="#" className='t-decoration'>
                                <div>
                                    <img src={homeIcon} alt="" />
                                </div>
                                <div>
                                    <span>Home</span>
                                </div>
                            </a>
                            <a href="#" className='t-decoration'>
                                <div>
                                    <img src={userIcon} alt="" />
                                </div>
                                <div>
                                    <span>Profile</span>
                                </div>
                            </a>
                        </div>
                    </>
                )
            }


        </div>
    );
}

export default FixFooter;