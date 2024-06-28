import { useContext } from "react";
import { LoginContext } from "../contexts/loginContext";
import { useForm } from "react-hook-form";
import { login } from "../api/login";
import x_icon from "../assets/x_icon.png";

export function Login({ onClose }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		clearErrors,
	} = useForm();

	// eslint-disable-next-line no-unused-vars
	const [_, setIsLogged] = useContext(LoginContext);

	async function onSubmit(data) {
		try {
			await login(data);
			setIsLogged(true);
			onClose();
		} catch (error) {
			setError("general", {
				message: "Invaild e-mail or password",
				type: "custom",
			});
			setTimeout(() => {
				clearErrors();
			}, 3000);
		}
	}

	return (
		<div className="fixed top-0 w-full h-[100vh] bg-black/50">
			<div className="flex justify-center">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="bg-white w-[350px] md:w-[450px] p-[50px] rounded-[10px] mt-[200px]"
					noValidate
					autoComplete="off">
					{errors.general && (
						<span className="text-red-500">{errors.general.message}</span>
					)}
					<div className="flex justify-between items-center mb-3">
						<h2 className="font-bold text-2xl">Login</h2>
						<img
							className="w-[25px] cursor-pointer"
							src={x_icon}
							alt="x"
							onClick={onClose}
						/>
					</div>
					<input
						id="email"
						type="email"
						placeholder="Your email"
						className="border h-[45px] w-full pl-3 my-[10px] rounded-[3px]"
						{...register("email", {
							required: "Input e-mail",
							validate: (email) => email.includes("@") || "Correct e-mail",
						})}
					/>
					{errors.email && (
						<span className="text-red-500">{errors.email.message}</span>
					)}
					<input
						id="password"
						type="password"
						placeholder="Password"
						className="border h-[45px] w-full pl-3 my-[10px] rounded-[3px]"
						{...register("password", {
							required: "Input your password",
							pattern: {
								value:
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
								message:
									"Password must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
							},
						})}
					/>
					{errors.password && (
						<span className="text-red-500">{errors.password.message}</span>
					)}
					<button className="bg-orange-500 w-full text-white py-3 mt-3">
						Login
					</button>
					<p className="text-[14px] text-gray-500 mt-5">
						Dont have an account?
						<span className="text-orange-500 font-semibold cursor-pointer">
							Register here
						</span>
					</p>
				</form>
			</div>
		</div>
	);
}
