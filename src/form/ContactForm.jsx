import { useForm } from "react-hook-form";
import { message } from "../api/message";

export function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm();

	function onSubmit(data) {
		message(data);
	}

	return (
		<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
			<input
				className="h-[50px] pl-3 my-4 border lg:min-w-[450px]"
				id="name"
				type="text"
				placeholder="Your name"
				{...register("name", {
					required: "Input your name",
				})}
			/>
			{errors.name && (
				<span className="text-red-500">{errors.name.message}</span>
			)}
			<input
				className="h-[50px] pl-3 my-4 border lg:min-w-[450px]"
				id="email"
				type="text"
				placeholder="Email"
				{...register("email", {
					required: "Input e-mail",
					validate: (email) => email.includes("@") || "Correct e-mail",
				})}
			/>
			{errors.email && (
				<span className="text-red-500">{errors.email.message}</span>
			)}
			<input
				className="h-[50px] pl-3 my-4 border lg:min-w-[450px]"
				id="subject"
				type="text"
				placeholder="Subject"
				{...register("subject", {
					required: "Input subject",
				})}
			/>
			{errors.subject && (
				<span className="text-red-500">{errors.subject.message}</span>
			)}
			<textarea
				id="text"
				placeholder="Write your message"
				className="border resize-none p-3 my-5"
				{...register("text", {
					required: "Input message",
				})}></textarea>
			{errors.text && (
				<span className="text-red-500">{errors.text.message}</span>
			)}
			<button
				className={`${
					isSubmitSuccessful ? "cursor-not-allowed" : ""
				} bg-orange-500 text-white py-3 mt-2`}
				disabled={isSubmitSuccessful}>
				Send Message
			</button>
			{isSubmitSuccessful && (
				<span className="mt-2 text-green-500">message sent correctly</span>
			)}
		</form>
	);
}
