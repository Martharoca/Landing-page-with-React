import { func } from "prop-types";
import React from "react";

function Card () {
	return (
		<div className="my-3" id="card">
			<div className="row row-cols-1 row-cols-lg-4 g-4 text-center me-0">
				<div className="col">
					<div className="card h-100">
						<img src="https://cdn.pixabay.com/photo/2024/02/23/08/27/apple-8591539_1280.jpg" className="card-img-top" alt="stock-image" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
							</div>
							<div className="card-footer">
								<a href="#" className="btn btn-primary">Find Out More!</a>
							</div>
							</div>
						</div>
						<div className="col">
							<div className="card h-100">
								<img src="https://cdn.pixabay.com/photo/2023/12/08/09/13/vine-8437280_960_720.jpg" className="card-img-top" alt="stock-image" />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
								</div>
								<div className="card-footer">
									<a href="#" className="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card h-100">
								<img src="https://cdn.pixabay.com/photo/2023/07/03/09/28/peach-8103765_1280.jpg" className="card-img-top" alt="stock-image" />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
								</div>
								<div className="card-footer">
									<a href="#" className="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card h-100">
								<img src="https://cdn.pixabay.com/photo/2024/02/21/14/42/flowers-8587835_1280.jpg" className="card-img-top" alt="stock-image" />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
								</div>
								<div className="card-footer">
									<a href="#" className="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		};

export default Card;