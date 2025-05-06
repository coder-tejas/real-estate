import "../../styles/SigninPage.css"
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
    UserName : z.string().min(1,"User Name is required").max(50),
    email: z.string().email("Invalid email address"),
    password: z.string()
    
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
  role: z.enum(["tenent","manager"],{required_error:"Role is reuired"})

}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>

function Signup() {
const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
    reset
} = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
});

const onSubmit = (data: SignupFormData) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset();
};
 return (
  <div className="signup-container">
                    <h1 className="signup-title">RENTIFUL</h1>
                    <p className="signup-subtitle">Welcome! Please sign up to continue</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       <div>
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            placeholder="Choose a username"
                            className="form-input"
                            required
                            {...register("UserName")}
                            />
                            {errors.UserName && (<p>{errors.UserName.message}</p>)}
                            </div>
                            <div>

                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="form-input"
                            required
                            {...register("email")}
                            />
                        {errors.email && (<p>{errors.email.message}</p>)}
                            </div>
                        <label className="form-label">Password</label>
                        <div>

                        <input
                            type="password"
                            placeholder="Create a password"
                            className="form-input"
                            required
                            {...register("password")}
                            
                            />
                          {errors.password && (<p>{errors.password.message}</p>)}

                            </div>

                        <label className="form-label">Confirm Password</label>
                        <div>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="form-input"
                            required
                            {...register("confirmPassword")}
                            
                            />
                            {errors.confirmPassword && (<p>{errors.confirmPassword.message}</p>)}

                            </div>

                        <label className="form-label">Role</label>
                        <div className="role-group">
                            <div className="role-option">
                                <input
                                    type="radio"
                                    id="tenant"
                                    name="role"
                                    value="tenant"
                                    className="role-input"
                                    required
                                />
                                <label htmlFor="tenant" className="role-label">Tenant</label>
                            </div>
                            <div className="role-option">
                                <input
                                    type="radio"
                                    id="manager"
                                    name="role"
                                    value="manager"
                                    className="role-input"
                                />
                                <label htmlFor="manager" className="role-label">Manager</label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                             {isSubmitting ? "Creating account..." : "Sign Up"}

                        </button>

                        <div className="signin-link">
                            <p className="signin-text">
                                Already have an account?{' '}
                                <a href="/auth/login" className="signin-anchor">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
 )
}

export default Signup