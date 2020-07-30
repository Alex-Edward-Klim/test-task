import React, { useState } from 'react';

import ReactMapGL from 'react-map-gl';

import Form from './Form';

import './contactsStyle.css';

function Contacts() {
  const [viewport, setViewport] = useState({
    latitude: 55.7558,
    longitude: 37.6173,
    width: "50vw",
    height: "50vh",
    zoom: 10
  });
  return (
    <div className="contacts">
      <p>Contacts:</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, error excepturi tempora blanditiis pariatur suscipit beatae doloribus expedita asperiores sint id ipsam, aliquam iste et quod ipsum odit repellendus dolore.</p>
      <ReactMapGL {...viewport} onViewportChange={viewport => {setViewport(viewport)}} mapboxApiAccessToken="pk.eyJ1IjoiYWxleC1rbGltIiwiYSI6ImNrM3p2czlnazF0dm0zam9wNmkycGM5NTAifQ.gH6N3V3DqSb6e151QosWZg"></ReactMapGL>
      <Form />
    </div>
  );
}

export default Contacts;
