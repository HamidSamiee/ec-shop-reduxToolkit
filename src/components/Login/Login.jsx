import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/AuthSlice";
   

const Login = () => {

    const dispatch=useDispatch();
    const [loginData, setLoginData] = useState({
        username:'',
        password:'',
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setLoginData({
            ...loginData,[name]:value,
        })
        console.log(loginData)
    }

    

  return (
    <section className=" w-full flex items-center justify-center" >
        <Card className="my-[8.5rem] w-96">
            <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                Sign In
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
                <Input label="Username" size="lg"  type="text" value={loginData.username} name="username" onChange={handleChange} />
                <Input label="Password" size="lg" value={loginData.password} type="password" name="password" onChange={handleChange} />
                <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={()=>dispatch(login(loginData))} variant="gradient" fullWidth onSubmit={()=>console.log('first')}>
                Sign In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                    as="a"
                    href="#signup"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                >
                    Sign up
                </Typography>
                </Typography>
            </CardFooter>
        </Card>
    </section>
  )
}

export default Login