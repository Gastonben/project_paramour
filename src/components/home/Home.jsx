import { Link } from 'react-router-dom';
import style from './Home.module.css';
import arrow from '../../assets/arrow.png';
import Footer from '../common/footer/Footer';
import ArrowBtn from '../common/arrowBtn/ArrowBtn';

const Home = () =>{
return (
    <>
        <section className={style.header}>
            <div>
                <h1>project paramour</h1>
                <p>
                    Project made for an art meuseum near Southwest London. Project
                    Paramour is a statement of bold, modern architecture.
                </p>
                <ArrowBtn path='portfolio' content='see our portfolio'/>
            </div>
        </section>
        <section className={style.welcome}>
            <h2>Welcome to Arch Studio</h2>
            <p>
                Welcome to Arch Studio We have a unique network and skillset to help bring your projects to life.
                Our small team of highly skilled individuals combined with our large network put us in a strong 
                position to deliver exceptional results.
            </p>
            <p>
                Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings,
                we create spaces that inspire and delight.
            </p>
            <p>
                We work closely with our clients so that we understand the intricacies of each project. 
                This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            </p>
        </section>
        <section className={style.about_us}>
            <div>
                <h2>small team, big ideas</h2>
                <ArrowBtn path='aboutus' content='about us'/>
             </div>
        </section>
        <section className={style.feature}>
            <div>
                <h2>feature</h2>
                <ArrowBtn path='aboutus' content='about us'/>
            </div>
            <div className={style.cards}>
                <div className={style.proj_sol}>
                    <span>1</span>
                    <div>
                        <h4>project del sol</h4>
                        <p>view all projects</p>
                    </div>
                </div>
                <div className={style.proj_tower}>
                    <span>2</span>
                    <div>
                        <h4>228B Tower</h4>
                        <p>view all projects</p>
                    </div>
                </div>
                <div className={style.proj_proto}>
                    <span>3</span>
                    <div>
                        <h4>Le Prototype</h4>
                        <p>view all projects</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
    )
}

export default Home;