import Input from "../components/Input/Input";
import Button from "../components/Button/Button"
import TextError from "../components/TextError/TextError";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
//import { useEffect } from "react";


function Register(params) {

    const navigate = useNavigate();

    const initialValues = {
        name: '',
        lastName:'',
        email:'',
        password:'',
        productKey:'',
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
        productKey: Yup.string()
            .required('Campo vacío'),
    });

    async function handleSubmit(values) {
        //Por añadir
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
                                    <label>Key of Product/Clave de Producto</label>
                                    <Input type='password' name='productKey' placeholder='Clave de producto'
                                    value={values.productKey}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur} />
                                    {errors.productKey && touched.productKey &&
                                        <TextError>{errors.productKey}</TextError>
                                    }
                                </div>

                                <div className='flex flex-col py-2'>
                                    <Button>Crear cuenta</Button>
                                </div>            
                            </form>
                        </div>

                </div>
            )}
        </Formik>
        
    );
}

export default Register;