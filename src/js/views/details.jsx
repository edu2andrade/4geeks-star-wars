import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getData } from "../services";

const Details = () => {
  const [resourceData, setResourceData] = useState({});
  const { resource, name, id } = useParams();

  const getResourceData = async () => {
    const data = await getData(`${resource}/${id}`);
    setResourceData(data.result.properties);
  }

  useEffect(() => {
    getResourceData()
  }, [])

  return (
    <div className="mx-5">
      {resource === 'vehicles' && (
        <>
          <p>resource: {resource}</p>
          <p>name: {name}</p>
          <p>id: {id}</p>
          <p>model: {resourceData.model}</p>
          <p>manufacturer: {resourceData.manufacturer}</p>
          <p>cost: {resourceData.cost_in_credits} credits</p> 
        </>
      )}
      {resource === 'people' && (
        <>
          <p>resource: {resource}</p>
          <p>name: {name}</p>
          <p>id: {id}</p>
          <p>height: {resourceData.height}</p>
          <p>mass: {resourceData.mass}</p>
          <p>gender: {resourceData.gender}</p> 
          <p>birth_year: {resourceData.birth_year}</p> 
        </>
      )}
      {resource === 'planets' && (
        <>
          <p>resource: {resource}</p>
          <p>name: {name}</p>
          <p>id: {id}</p>
          <p>diameter: {resourceData.diameter}</p>
          <p>population: {resourceData.population}</p>
          <p>climate: {resourceData.climate}</p> 
          <p>terrain: {resourceData.terrain}</p> 
        </>
      )}
    </div>
  );
};

export default Details;