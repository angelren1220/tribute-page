import "../styles/homepage.scss";
import Profile from './Profile';
import Story from './Story';

function Homepage(){
  return(
    <div className='homepage'>
      <Profile />
      <Story />
    </div>
  )
}

export default Homepage;