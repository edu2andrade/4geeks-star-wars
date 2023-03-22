import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getData } from "../services/index.js";
import { Context } from "../store/appContext.js";

const Home = () => {
	const { actions } = useContext(Context);

	const [peopleList, setPeopleList] = useState([]);
	const [planetList, setPlanetList] = useState([]);
	const [vehiclesList, setVehiclesList] = useState([]);

	const navigate = useNavigate();

	const getPeople = async () => {
		const data = await getData('people');
		setPeopleList(data.results);
	};
	const getPlanets = async () => {
		const data = await getData('planets');
		setPlanetList(data.results);
	};
	const getVehicles = async () => {
		const data = await getData('vehicles');
		setVehiclesList(data.results);
	};

	useEffect(() => {
		getPeople();
		getPlanets();
		getVehicles();
	}, []);

	const handleClick = (resource, name, id) => {
		navigate(`/details/${resource}/${name}/${id}`)
	}

	return (
		<div className="mx-5">
			<h1>Star Wars Blog</h1>
			<div className="people mx-5">
				<h2>People:</h2>
				<div className="d-flex flex-wrap gap-3">
					{
						peopleList.map(person => (
							<div key={person.uid} className="card" style={{width: '18rem'}}>
								<img src="https://imgs.search.brave.com/W7o0z-4I5LyUADX6zaj1dyJv1i4-OamBLzmhyM15jeo/rs:fit:653:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/T3hhLU1yRlJJaGRs/dkZuWmdCWWx3SGFG/WSZwaWQ9QXBp" className="card-img-top" alt="star wars" />
								<div className="card-body">
									<h5 className="card-title">{person.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<button onClick={() => handleClick('people', person.name, person.uid)} className="btn btn-primary">Details</button>
									<button onClick={() => actions.addNewFav(person.name)} className="btn btn-primary">Fav</button>
								</div>
							</div>
						))
					}
				</div>
				<h2>Planets:</h2>
				<div className="d-flex flex-wrap gap-3">
					{
						planetList.map(planet => (
							<div key={planet.uid} className="card" style={{width: '18rem'}}>
								<img src="https://imgs.search.brave.com/W7o0z-4I5LyUADX6zaj1dyJv1i4-OamBLzmhyM15jeo/rs:fit:653:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/T3hhLU1yRlJJaGRs/dkZuWmdCWWx3SGFG/WSZwaWQ9QXBp" className="card-img-top" alt="star wars" />
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<button onClick={() => handleClick('planets', planet.name, planet.uid)} className="btn btn-primary">Details</button>
									<button onClick={() => actions.addNewFav(planet.name)} className="btn btn-primary">Fav</button>
								</div>
							</div>
						))
					}
				</div>
				<h2>Vehicles:</h2>
				<div className="d-flex flex-wrap gap-3">
					{
						vehiclesList.map(vehicle => (
							<div key={vehicle.uid} className="card" style={{width: '18rem'}}>
								<img src="https://imgs.search.brave.com/W7o0z-4I5LyUADX6zaj1dyJv1i4-OamBLzmhyM15jeo/rs:fit:653:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/T3hhLU1yRlJJaGRs/dkZuWmdCWWx3SGFG/WSZwaWQ9QXBp" className="card-img-top" alt="star wars" />
								<div className="card-body">
									<h5 className="card-title">{vehicle.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<button onClick={() => handleClick('vehicles', vehicle.name, vehicle.uid)} className="btn btn-primary">Details</button>
									<button onClick={() => actions.addNewFav(vehicle.name)} className="btn btn-primary">Fav</button>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Home; 