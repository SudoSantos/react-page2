import Image from './photo.jpg';

const Info = () => {
    return ( 
        <div className="info">
            <div className='info1'>
                <img src={ Image } alt="man-looking-to-the-right" />

                <div>
                    <span>joshua Randall</span>
                    <span>London, United Kingdom</span>
                </div>

                <div>
                    <p>"Front-end developer and avid reader."</p>
                </div>
            </div>
            <div className="buttons">
                <button>Github</button>
                <button>Frontend Mentor</button>
                <button>LinkedIn</button>
                <button>Twitter</button>
                <button>Instagram</button>
            </div>
        </div>
     );
}
 
export default Info;