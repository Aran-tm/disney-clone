import './App.css'
import Header from './components/Header'
import Logo from './assets/images/disney_logo.png'

function App() {
  

  return (
      <div className=''>
          
        {/* Este es Logo */}
        <img src={Logo} className='w-[80px] md:w-[115px] object-cover'/>
          
        {/* Este es Header importado en React */}
        <Header/>
    </div>
  )
}

export default App
