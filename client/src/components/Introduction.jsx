import Footer from "./Footer"
import './stylesheets/Introduction.css'

function Introduction() {
    return (
        <div className='top-div'>
            <div id='intro' className='main-introduction'>
                <img alt='main' className='main-picture'
                    src='https://gistcdn.githack.com/anurag-ux/a5340bb04294e23431da2c806f25ccb4/raw/e46ad68648e00f57707d51c9ce5f0417cb15b6bb/main-picture.svg'>
                </img>
                <div className='introduction'>
                    <p className='intro'>I'm<span className='keyword'> Anurag Shandilya</span>
                        <Footer />
                    </p>
                </div>
            </div>
            <div className='experience'>
                <p className='experience-description'>
                    I'm a self-taught Software Developer & a Product Manager, functioning in the industry for 1+ years now.
                    I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
                </p>
            </div>
        </div>
    );
}

export default Introduction;