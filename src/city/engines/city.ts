import { TiledMapResource } from "@excaliburjs/plugin-tiled";
import { DisplayMode, Engine, Loader } from "excalibur";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import exampleTileMapUrl from "/assets/example-city.json";

export class City extends Engine {
  constructor() {
    super({ displayMode: DisplayMode.FitScreen });
  }

  public async start() {
    const tiledMapResource = new TiledMapResource("/assets/example-city.json");
    const loader = new Loader([tiledMapResource]);
    await super.start(loader);
    tiledMapResource.addTiledMapToScene(this.currentScene);
    this.currentScene.camera.zoom = 2;
  }
}
