import React, { useState } from 'react';
import {
    Button, Card, CardContent, Grid, TextField, Typography, Box, FormControl,
    OutlinedInput, InputAdornment, IconButton
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import lock from '../../assets/lock.png';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const history = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [data, setData] = useState([]);
    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    });

    const getData = (e) => {
        // console.log(e.target.value)
        const { value, name } = e.target;
        // console.log(value,name)
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
    const addData = (e) => {
        e.preventDefault();

        const getUserArr = localStorage.getItem("userCredential");
        console.log(getUserArr);

        const { email, password } = inpval;

        if (email === "") {
            alert("email field is required")
        } else if (!email.includes("@")) {
            alert("enter valid email address")
        } else if (password === "") {
            alert("password field is required")
        } else if (password.length < 6) {
            alert("password length greater than 6")
        } else {

            if (getUserArr && getUserArr.length) {
                const userData = JSON.parse(getUserArr);
                // const userLogin = userData.email === email && userData.password === password ;

                if (userData.email === email && userData.password === password) {
                    alert("user login sucessfully")
                    history("/medicalCenter")
                } else {
                    alert("invalid details")

                }
            }

        }
    }
    return (
        <Grid container sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: "#e0f7fa"
        }}>
            <Grid item lg={4} md={5} sm={7} xs={12} m={3} >
                <Card >
                    <CardContent  >
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <Box>
                                <img src={lock} alt='lock' />
                            </Box>
                            <Box sx={{ margin: '5px' }}>
                                <Typography variant='h4' sx={{ fontSize: '20px', fontWeight: 'bold', color: "#00796b" }}>
                                    Login
                                </Typography>
                                <Typography sx={{ color: "#00796b" }}>Please enter your login information.</Typography>
                            </Box>
                        </Box>
                        <Box mt={2}>
                            <Typography sx={{ color: "#00796b" }}>Email</Typography>
                            <TextField variant='outlined' name="email" value={inpval.email} onChange={getData}
                                placeholder='Email' fullWidth />
                        </Box>
                        <Box mt={2}>
                            <Typography sx={{ color: "#00796b" }}>Password</Typography>
                            <FormControl fullWidth variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    placeholder='Password'
                                    // value={inpval.password} 
                                    onChange={getData}
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{ display: 'grid', justifyContent: 'start' }} mt={2} >
                            <Typography sx={{ color: "#00796b" }}>Your strong password</Typography>
                            <Box>
                                <Button onClick={addData} variant="contained"
                                    sx={{ width: "80px", color: 'white', marginTop: '15px', backgroundColor: '#00796b', "&:hover": { bgcolor: '#004d40' } }} >
                                    Login</Button>
                            </Box>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Login