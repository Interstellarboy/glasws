import React from "react";
import form from "./assests/forms.jpg";
import "./StartUp.css";

function StartUp() {
	return (
		<div className="startup-container">
			<img id="startImg" src={form} alt="this" />
			<h2 className="mt-2">Chat With Us!</h2>
			<form>
				<div class="input-group mb-1">
					<input
						type="text"
						class="form-control"
						placeholder="Name"
						aria-label="Username"
					/>

					<input
						type="text"
						class="form-control"
						placeholder="Email"
						aria-label="Username"
					/>
				</div>
				<div class="input-group mb-1">
					<input
						type="text"
						class="form-control"
						placeholder="Phone"
						aria-label="Username"
					/>

					<input
						type="text"
						class="form-control"
						placeholder="Subject"
						aria-label="Username"
					/>
				</div>
				<div class="mb-3">
					<textarea
						class="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						placeholder="Message"
					></textarea>
				</div>
			</form>
		</div>
	);
}

export default StartUp;
