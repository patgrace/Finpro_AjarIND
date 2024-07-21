import React from 'react';
import { Box, Grid } from '@mui/material';
import RegisterForm from '@/app/components/Auth/RegisterForm';
import Image from "next/image"


const RegisterPage: React.FC = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <Image src="/images/regisvector.png" alt="Graduation" width={350} height={300}  />
      </Grid>
      <Grid item xs={12} md={6} display="flex" justifyContent="center">
        <RegisterForm />
      </Grid>
    </Grid>
  );
};

export default RegisterPage;