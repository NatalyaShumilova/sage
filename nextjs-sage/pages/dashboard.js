import Head from 'next/head';
import { useEffect, useState } from 'react';
import {Navigation} from '../components/Navigation';
import {Home} from '../components/Home';
import {Diet} from '../components/Diet';
import {Nutrition} from '../components/Nutrition';

const screens = {
  Home: (identity) => <Home identity={identity}/>,
  "My Diet": (identity) => <Diet  identity={identity}/>,
  "My Nutrition": (identity) => <Nutrition  identity={identity}/>
}
async function getUserInfo() {
  const response = await fetch('https://ashy-dune-0d20e0d00.5.azurestaticapps.net/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

export default function Dashboard() {
  const [identity, setIdentity] = useState("");
  const [current, setCurrent] = useState("Home");


  useEffect(() => {
    getUserInfo().then(i => {
      setIdentity(i)});
  }, [])
 
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {screens[current](identity)}
       
        <Navigation screens={Object.keys(screens)} current={current} setCurrent={setCurrent} />
      </main>
    </div>
  );
}
