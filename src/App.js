import './Style.css'
import img_1 from "./imageInSrc.jpg"

function App() {
  return (
    <div className="App" >
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        <h1 className="title red">Ahmed Hrichi</h1>
        <br />
        <img style={{width:320}} src={img_1} alt="first_img" />
        <br />
        <img style={{width:320}} src="/imageInPublic.jpg" alt="second_img" />
      </div>
      <video width={320} height={240} controls autoPlay muted loop>
        <source src="myVideo.mp4"  type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
