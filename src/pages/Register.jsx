import Input from "../components/Input/Input";
import Button from "../components/Button/Button"
import TextError from "../components/TextError/TextError";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/services/user";
import { Link } from "react-router-dom";

function Register(params) {

    const navigate = useNavigate();

    const initialValues = {
        name: '',
        lastName:'',
        email:'',
        password:'',
        code:'',
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Campo vacío'),
        lastName: Yup.string()
            .required('Campo vacío'),
        email: Yup.string()
            .email('Correo electrónico inválido')
            .required('Campo vacío'),
        password: Yup.string()
            .required('Campo vacío'),
        code: Yup.string()
            .required('Campo vacío'),
    });

    async function handleSubmit(values) {
        const response = await createUser(values.name, values.lastname, values.email, values.password, values.code);
        console.log(response.status);
        if (response.status == 201){
            alert('Usuario creado');
            navigate('/login');
            return;
        }

        alert(response.data.message);
        return;
    }

    return(
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

                    <div className="w-full h-full bg-cyan-500"/>

                        <div className='flex flex-col justify-center'>
                            <form className='max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
                                <h2 className='text-4xl font-bold text-center'>Nueva cuenta</h2>

                                <div className='flex flex-col py-2'>
                                    <label>Nombre</label>
                                    <Input type='text' name='name' placeholder='Nombre' 
                                    value={values.name}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur} />
                                    {errors.name && touched.name &&
                                        <TextError>{errors.name}</TextError>
                                    }
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Apellido</label>
                                    <Input type='text' name='lastName' placeholder='Apellido'
                                    value={values.lastName}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur} />
                                    {errors.lastName && touched.lastName &&
                                        <TextError>{errors.lastName}</TextError>
                                    }
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Email</label>
                                    <Input type='email' name='email' placeholder='Correo electrónico'
                                    value={values.email}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur} />
                                    {errors.email && touched.email &&
                                        <TextError>{errors.email}</TextError>
                                    }
                                </div>


                                <div className='flex flex-col py-2'>
                                    <label>Contraseña</label>
                                    <Input type='password' name='password' placeholder='Contraseña'
                                    value={values.password}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur} />
                                    {errors.password && touched.password &&
                                        <TextError>{errors.password}</TextError>
                                    }
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Product Key/Código de Producto</label>
                                    <Input type='password' name='code' placeholder='Código de producto'
                                    value={values.code}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur} />
                                    {errors.code && touched.code &&
                                        <TextError>{errors.code}</TextError>
                                    }
                                </div>

                                <div className='flex flex-col py-2'>
                                    <Button type='submit'>Crear cuenta</Button>
                                </div>

                                <div className='flex flex-row justify-center items-center py-1'>
                                    <p>¿Ya tienes una cuenta?</p>
                                    <Link
                                    to="/login"
                                    className="text-black hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
                                        Inicia sesión
                                    </Link>
                                </div>

                            </form>
                        </div>

                </div>
            )}
        </Formik>
        
    );
}

export default Register;