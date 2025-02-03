import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const [message, setMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_7ktdu9o", // ✅ Your Service ID
				"template_0zmp6z6", // 🔹 Your Template ID
				form.current,
				"wvzMkg8e394uRH1nR" // 🔹 Your Public Key
			)
			.then(
				(result) => {
					console.log("✅ Email Sent:", result.text);
					setMessage("✅ Message sent successfully!");
					form.current.reset(); // Reset the form after sending
				},
				(error) => {
					console.log("❌ Error:", error.text);
					setMessage("❌ Failed to send message. Please try again.");
				}
			);
	};

	return (
		<div className="pt-[5rem] pb-[3rem] bg-gray-900">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
				<div>
					<p className="heading__mini">Get in Touch</p>
					<h1 className="heading__primary">
						Lets make your <span className="text-red-500">Brand</span> <br />
						brilliant
					</h1>
					<p className="text-white text-[15px] mt-[1rem] opacity-75">
						Get in touch with us to elevate your brand. Let’s collaborate and
						create something brilliant. Reach out today and bring your vision to
						life!
					</p>
				</div>
				<div>
					<form ref={form} onSubmit={sendEmail}>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
							<input
								type="text"
								placeholder="Name"
								name="user_name"
								className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
								required
							/>
							<input
								type="email"
								placeholder="Email"
								name="user_email"
								className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
								required
							/>
						</div>
						<input
							type="text"
							placeholder="Subject"
							name="subject"
							className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
							required
						/>
						<textarea
							placeholder="Message"
							name="message"
							className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 px-4"
							rows={4}
							required
						></textarea>
						<button
							type="submit"
							className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none bg-blue-600 text-white block hover:bg-blue-800 rounded-md px-4"
						>
							Submit
						</button>
					</form>
					{message && <p className="text-white mt-2">{message}</p>}
				</div>
			</div>
		</div>
	);
};

export default Contact;
