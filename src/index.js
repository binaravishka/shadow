// Scene
import "./styles.css";
import Scene from "./Scene";
(() => {
  // scene
  const sceneEl = document.querySelector("[data-scene]");
  new Scene(sceneEl);
})();
