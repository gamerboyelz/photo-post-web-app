import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="centerContainer">

      <form id="formContainer">
        <div class="Title">Upload a photo</div>
        <input id="myFile" type="file" name="myFile" placeholder="upload your wedding photo" />
        <button id="addpicture" type="Upload"> Upload </button>
      </form>

      <div class="photoGalleryContainer">

      </div>

    </div>


  );
}

export default App;
