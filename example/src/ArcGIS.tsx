import React, { Component } from 'react';
import './ArcGIS.css';
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import config from "@arcgis/core/config";
import GlobeFSThree from './GlobeFSThree';
import { ExternalRendererThree } from "@philippkoelmel/arcgis-threejs-externalrenderer";

export default class ArcGIS extends Component<{}> {

  componentDidMount() {

    if (process.env.REACT_APP_ARCGIS_APIKEY === undefined) {
      console.error("Please add your ARCGIS API key to the environment (see .env.local.example)");
      return;
    }

    config.apiKey = process.env.REACT_APP_ARCGIS_APIKEY;

    const map = new Map({
      basemap: "arcgis-light-gray"
    });

    const view = new SceneView({
      container: "arcgis_view",
      map: map,
      viewingMode: "global",
      camera: {
        // ??
        position: {
          x: -9932671,
          y: 2380007,
          z: 1687219,
          spatialReference: { wkid: 102100 }
        },
        heading: 0,
        tilt: 35
      },
    });
    if (view.environment.lighting !== undefined) {
      view.environment.lighting.cameraTrackingEnabled = false;
      view.environment.lighting.date = new Date();
    }

    ExternalRendererThree.start(view, new GlobeFSThree());
  }

  render() {
    return (
      <div id="arcgis_view" className="map" data-testid="arcgis_element">
      </div>
    );
  }
}
