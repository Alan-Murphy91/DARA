import React, { useState, useEffect } from 'react';
import { getData, getDataWithID } from '../api';

const VehicleList = () => {
	const [data, setData] = useState({ data: []});

	useEffect(() => {
		getData().then(res => {
			setData(res);
		});
	}, []);

	const { vehicles } = data;
	if (vehicles) {
		return (
			<div className="vehiclesContainer">
				{vehicles.map(item => (
					<Vehicle key={item.id} {...item} />
				))}
			</div>
		);
	}
	return null;
};

const Vehicle = ({id, media, modelYear, url}) => {
	const [data, setData] = useState({ data: []});

	useEffect(() => {
		getDataWithID(id).then(res => {
			setData(res);
		});
	}, []);

	console.log(data);
	const { price, description } = data;
	return (
		<div className="vehiclesContainerItem">
			{/* <img 
				src={media[0].url}
				alt={`Picture of a ${id}_${modelYear}`} 
				width="100%"
			/> */}
			<div className="imageStandIn" />
			<div className="content">
				<h1>{id}</h1>
				<p>{`From ${price}`}</p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default VehicleList;
