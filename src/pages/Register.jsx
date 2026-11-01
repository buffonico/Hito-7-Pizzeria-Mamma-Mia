import { useState } from 'react';

const Register = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();

        // Validación que ningún campo esté vacío
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        // Validación password, debe tener al menos 6 caracteres
        if (password.length < 6) {
            alert('El password debe tener al menos 6 caracteres');
            return;
        }

        // Validación, ambas password deben ser iguales
        if (password !== confirmPassword) {
            alert('El password y la confirmación de la contraseña debe ser iguales');
            return;
        }

        // Registro exitoso
        alert('¡Registro exitoso!')

        // Limpieza imputs
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className='container mt-5 mb-5' style={{ maxWidth: '400px' }}>
            <h2 className='mb-4'>Register</h2>
            <form onSubmit={handelSubmit}>

                {/* Email */}
                <div className='mb-3'>
                    <label className='form-label fw-bold'>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="correo@ejemplo.com"
                    />
                </div>

                {/* Password */}
                <div className='mb-3'>
                    <label className='form-label fw-bold'>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="La contraseña debe tener al menos 6 caracteres"
                    />
                </div>

                {/* Confirmación de password */}
                <div className='mb-3'>
                    <label className='form-label fw-bold'>Confirm Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Las contraseñas deben coincidir"
                    />
                </div>

                <button type='submit' className='btn btn-dark w-100'>
                    Registro
                </button>
            </form>
        </div>
    );
};

export default Register;