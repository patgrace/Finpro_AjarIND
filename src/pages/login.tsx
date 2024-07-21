import React from 'react';
import { Box, Grid } from '@mui/material';
import LoginForm from '@/app/components/Auth/LoginForm';
import Image from "next/image"

const LoginPage: React.FC = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <Image src="/images/loginvector.png" alt="Graduation" width={350} height={300}  />
      </Grid>
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <LoginForm />
      </Grid>
    </Grid>
  );
};


export default LoginPage;