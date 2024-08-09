"use client"

import useAuth from '../lib/hooks';
import AlertAuth from '../components/AlertAuth';

export default function DashboardHome (){

const {user, loading} = useAuth()


if (loading) {
  return  <AlertAuth
            text="Loading..."
            /> 
}
         
  return (
    <div>  
       {user ? (
          <div>
            <h1>Welcome to the Dashboard</h1>
          </div>
        ) : (
        <AlertAuth
        text="Non authorized"
        />
        )}
 </div>
  );
}

