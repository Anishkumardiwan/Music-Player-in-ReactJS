
import { backIcon } from '../../assets';
import './AudioList.css';

const AudioList = ({onBackButtonPress}) => {
    return (
        <div className="media-li m-20">
            <div onClick={onBackButtonPress} className="audio-ls-header">
                <img src={backIcon} />
            </div>

            <ul>
                <li className="audio-ls-container mtb-10">

                    <div className="audio-ls-item flex align-center ptb-10">
                        <div className="audio-img">
                            <img src="" alt="" />
                        </div>
                        <div className="audio-info mlr-10">
                            <p>Beyond the line</p>
                            <p>Anish Diwan</p>
                        </div>
                    </div>

                    <div className="audio-ls-item flex align-center">
                        <div className="audio-img">
                            <img src="" alt="" />
                        </div>
                        <div className="audio-info mlr-10">
                            <p>Beyond the line</p>
                            <p>Anish Diwan</p>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    );
}

export default AudioList;