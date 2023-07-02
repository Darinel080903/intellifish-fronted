import imageLogin from '../assets/img/image-login.jpg'
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function Login() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div>
                <img className='w-full h-full object-cover' src={imageLogin} alt="120" style={{ height: '720px' }} />
            </div>

            <div className='flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl font-bold text-center'>LOGIN</h2>

                    <div className='flex flex-col py-2'>
                        <label>Email</label>
                        <Input/>
                    </div>

                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <Input  type="password" />
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
    )
}
export default Login;