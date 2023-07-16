import imageLogin from '../assets/img/image-login.jpg'
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TextError from '../components/TextError/TextError';
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';



function Login() {
    //const { setAccessToken, authState } = useAuth();

    /*useEffect(() => {
        if (authState.accessToken) {
            navigate('/');
        }
    }, []);*/
    
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Correo electrónico inválido')
            .required('Correo electrónico requerido'),
        password: Yup.string()
            .required('Contraseña requerida'),
    });

    async function handleSubmit(values) {
        /*const response = await signIn(values.email, values.password);
        console.log(response);

        if (response.status === 200){
            //setAccessToken(response.data.token);
            alert('Inicio de sesión exitoso');
            navigate('/');
            return;
        }

        alert('Usuario o contraseña incorrectos');*/
    }

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({
                values, 
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                    <div>
                        <img className='w-full h-full object-cover' src={imageLogin} alt="120" style={{ height: '720px' }} />
                    </div>

                    <div className='flex flex-col justify-center'>
                        <form className='max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
                            <h2 className='text-4xl font-bold text-center'>LOGIN</h2>

                            <div className='flex flex-col py-2'>
                                <label>Email</label>
                                <Input type='email' name='email' placeholder='Correo electrónico' 
                                value={values.email}
                                handleChange={handleChange}
                                handleBlur={handleBlur} />
                                {errors.email && touched.email && (
                                    <TextError>{errors.email}</TextError>
                                )}
                            </div>

                            <div className='flex flex-col py-2'>
                                <label>Password</label>
                                <Input type='password'name='password' placeholder='Contraseña' 
                                value={values.password}
                                handleChange={handleChange}
                                handleBlur={handleBlur} />
                                {errors.password && touched.password && (
                                    <TextError>{errors.password}</TextError>
                                )}
                            </div>

                            <div className='flex flex-col py-2'>
                                <Button>Login</Button>
                            </div>

                            <div className='flex flex-col py-2'>
                                <p>¿Olvidaste tu contraseña?</p>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </Formik>
    )
}
export default Login;