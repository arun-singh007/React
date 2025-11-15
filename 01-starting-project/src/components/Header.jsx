const data = ['React', 'JavaScript', 'HTML', 'CSS'];
import reactImg from '../assets/react-core-concepts.png'

function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

export default function Header(){
  return (
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {getRandomItem()} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}