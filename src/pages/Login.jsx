import { useState } from "react";

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ningún campo esté vacío
        if (email.trim() === '' || password.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        // El password al menos debe tener 6 caracteres
        if (password.length < 6) {
            alert('El password debe tener al menos 6 caracteres');
            return;
        }

        //Logueado correctamente
        alert('¡Login exitoso!');

        // Limpieza de imputs
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container mt-5 mb-5" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="correo@ejemplo.com"
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingrese Password"
                    />
                </div>

                <button type="submit" className="btn btn-dark w-100">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;