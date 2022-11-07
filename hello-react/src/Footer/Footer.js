import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import './Footer.css'

function Footer(){
    return(
        <div className='footer'>
            <div className='iconsBar'>
              <img src={icon1} className="icons" alt=""></img>
              <h3>Declarative</h3>
              <p className='textIcons'>React makes it painless to create interactiv UIs.</p>
            </div>
            <div  className='iconsBar'>
              <img src={icon2} className="icons" alt=""></img>
              <h3>Componentes</h3>
              <p className='textIcons'>Build encapsulated components that manage their state.</p>
            </div>
            <div  className='iconsBar'>
              <img src={icon3} className="icons" alt=""></img>
              <h3>Single-Way</h3>
              <p className='textIcons'>A set of immutable values are passed to the component's.</p>
            </div>
            <div  className='iconsBar'>
              <img src={icon4} className="icons" alt=""></img>
              <h3>JSX</h3>
              <p className='textIcons'>Statically-typed, designed to run on modern browsers.</p>
            </div>
    </div>
    )
}

export default Footer