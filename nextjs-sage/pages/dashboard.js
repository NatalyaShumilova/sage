import Head from 'next/head';
import { useEffect, useState } from 'react';
import {FloatingBox} from '../components/FloatingBox'
import {Navigation} from '../components/Navigation'

async function getUserInfo() {
  const response = await fetch('https://ashy-dune-0d20e0d00.5.azurestaticapps.net/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

export default function Dashboard() {
  const [identity, setIdentity] = useState("");

  useEffect(() => {
    getUserInfo().then(i => {
      setIdentity(i)});
  }, [])
 
console.log(identity)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
            Dashboard
        </h1>
        <p>
          {identity.userDetails}
        </p>
        <FloatingBox>{identity.userId}</FloatingBox>
        <Navigation/>

        
      </main>
    </div>
  );
}
