import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";
// import "./BaiTapThuKinh.css";
export default class BaiTapThuKinh extends Component {
	state = {
		glassesCurrent: {
			id: 2,
			price: 50,
			name: "GUCCI G8759H",
			url: "./glassesImage/v2.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
	};
	renderGlassesList = () => {
		return dataGlasses.map((glasses, index) => {
			return (
				<img
					onClick={() => {
						this.swapGlasses(glasses);
					}}
					className="mx-2 p-2 border border-width-1"
					key={index}
					src={glasses.url}
					style={{ width: "120px", cursor: "pointer" }}
					alt="glasses"></img>
			);
		});
	};
	swapGlasses = (newGlasses) => {
		this.setState({
			glassesCurrent: newGlasses,
		});
	};
	render() {
		const keyFrame = `@keyframes animSwapGlasses${Date.now()} {
			from {
				width: 0;
				transform: rotate(45deg);
				opacity: 0;
			}
			to {
				width: 150px;
				transform: rotate(0deg);
				opacity: 0.65;git
			}
		}`;
		const styleGlasses = {
			width: "150px",
			top: "256px",
			left: "428px",
			opacity: "0.65",
			transform: "rotate(0deg)",
			animation: `animSwapGlasses${Date.now()} 1s`,
		};
		const styleInfo = {
			left: "364px",
			top: "205px",
			textAlign: "left",
			paddingLeft: "10px",
			backgroundColor: "rgba(255,127,0,0.3)",
			width: "250px",
			height: "100px",
		};

		return (
			<div
				style={{
					backgroundImage: "url(./glassesImage/background.jpg)",
					minHeight: "2000px",
					backgroundSize: "1500px",
				}}>
				<style>{keyFrame}</style>
				<div
					style={{
						backgroundColor: "rgba(0,0,0,0.5",
						minHeight: "2000px",
					}}>
					<h3
						className="text-center text-light p-5"
						style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
						TRY GLASSES APP ONLINE
					</h3>
					<div className="container-fluid">
						<div className="row mt-5">
							<div className="col-6">
								<div className="position-relative"></div>
								<img
									src="./glassesImage/model.jpg"
									alt="model"
									style={{ width: "250px" }}
									className="position-absolute"></img>
								<img
									src={this.state.glassesCurrent.url}
									className="position-absolute"
									style={styleGlasses}
									alt="glasses"></img>
								<div
									className="position-relative"
									style={styleInfo}>
									<span
										className="fw-bold fs-5"
										style={{
											color: "#AB82FF",
										}}>
										{this.state.glassesCurrent.name}
									</span>
									<br></br>
									<span className="fs-6">
										{this.state.glassesCurrent.desc}
									</span>
								</div>
							</div>
							<div className="col-6">
								<img
									src="./glassesImage/model.jpg"
									alt="model"
									style={{ width: "250px" }}></img>
							</div>
						</div>
					</div>
					<div className="bg-light container text-center mt-5 d-flex justify-content-center p-3">
						{this.renderGlassesList()}
					</div>
				</div>
			</div>
		);
	}
}
