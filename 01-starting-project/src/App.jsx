import reactImg from './assets/react-core-concepts.png'
const data = ['React', 'JavaScript', 'HTML', 'CSS'];

function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}
function App() {
  return (
    <div>
     <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

function Header(){
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

export default App;
