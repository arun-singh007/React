import reactImg from './assets/react-core-concepts.png'
import {CORE_CONCEPTS} from './data.js'
const data = ['React', 'JavaScript', 'HTML', 'CSS'];

function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}
function CoreConcept({title, image, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
function App() {
  return (
    <div>
     <Header />
      <main>
      <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            image={CORE_CONCEPTS[0].image}
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
          />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />


        </ul>
      </section>
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
