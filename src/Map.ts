import OlMap from "ol/Map";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import { Tile } from "ol/layer";
import OSM from 'ol/source/OSM'
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { createContext, useContext } from "react";

export class PokeMap {
  private static instance: PokeMap;

  public static create(): PokeMap {
    if (!PokeMap.instance) {
      PokeMap.instance = new PokeMap();
    }
    return PokeMap.instance;
  }
  private map: undefined | OlMap;

  createMap = (mapTarget: HTMLDivElement) => {
    if (!this.map) {
      this.map = new OlMap({
        target: mapTarget,
        view: new View({
          center: fromLonLat([37.41, 8.82]),
          zoom: 4,
        }),
        layers: [
          new Tile({
            source: new OSM(),
          }),
          new VectorLayer({ source: new VectorSource() }),
        ],
      });
    }
  };

  getMap = () => {
    return this.map;
  };

  getVectorLayerSource = () => {
    return this.map?.getAllLayers()[1].getSource();
  };
}

export const map = PokeMap.create();
const MapContext = createContext(map);
export const MapProvider = MapContext.Provider;
export function useMapContext() {
  const context = useContext(MapContext);
  if (context === null) {
    throw new Error("context cannot be null, please add a context provider");
  }
  return context;
}
