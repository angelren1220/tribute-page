import Profile from './Profile';
import Story from './Story';
import Footer from './Footer';

function Homepage(){
  return(
    <div className='homepage'>
      <Profile />
      <Story />
      <Footer />
    </div>
  )
}

export default Homepage;