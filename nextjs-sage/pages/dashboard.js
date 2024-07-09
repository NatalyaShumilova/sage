import Head from 'next/head';
import { useState } from 'react';
import {FloatingBox} from '../components/FloatingBox'

async function getUserInfo() {
  const response = await fetch('https://ashy-dune-0d20e0d00.5.azurestaticapps.net/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

export default function Dashboard() {
  const [identity, setIdentity] = useState("");
  getUserInfo().then(i => {
    console.log(i)
    setIdentity(i?.userDetails)});
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
          {identity}
        </p>
        <FloatingBox>Alert</FloatingBox>

        
      </main>
    </div>
  );
}
