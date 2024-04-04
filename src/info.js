import Image from './photo.jpg';

const buttons = [
    {
        name: "Github",
        link: "https://github.com/sudosantos"
    },
    {
        name: "Frontend Mentor",
        link: "/"
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/"
    },
    {
        name: "Twitter",
        link: "https://twitter.com"
    },
    {
        name: "Instagram",
        link: "https://instagram.com"
    }

]

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
                {/* <button>Github</button>
                <button>Frontend Mentor</button>
                <button>LinkedIn</button>
                <button>Twitter</button>
                <button>Instagram</button> */}
                {buttons.map((button, index) => {
                    return (
                        <button key={index} onClick={()=> window.open(button.link, '_blank')}>{button.name} </button>
                    )
                })}
            </div>
        </div>
     );
}   
 
export default Info;