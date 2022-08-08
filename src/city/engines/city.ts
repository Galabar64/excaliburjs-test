import { TiledMapResource, TiledObjectGroup } from "@excaliburjs/plugin-tiled";
import { DisplayMode, Engine, Input, Loader } from "excalibur";
import { Player } from "../actors/player";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import exampleTileMapUrl from "/assets/example-city.tmx";

export class City extends Engine {
  constructor() {
    super({
      displayMode: DisplayMode.FitScreen,
      pointerScope: Input.PointerScope.Canvas
    });
  }

  public async start() {
    const tiledMapResource = new TiledMapResource(exampleTileMapUrl, {
      startingLayerZIndex: -2
    });
    const loader = new Loader([tiledMapResource]);

    await super.start(loader);

    this.addTiledObjects(tiledMapResource);
  }

  addTiledObjects(tiledMapResource: TiledMapResource) {
    const objects: TiledObjectGroup[] =
      tiledMapResource.data.getExcaliburObjects();

    let player: Player;

    const playerStart = objects[0].getObjectByName("player-start");
    if (playerStart) {
      player = new Player(playerStart.x, playerStart.y);
      this.currentScene.camera.strategy.elasticToActor(player, 0.8, 0.9);
      this.add(player);
    }

    tiledMapResource.addTiledMapToScene(this.currentScene);
  }
}
