import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [money, setMoney] = useState(0);
  const [members, setMembers] = useState(0);

  const buttonClicked = () => {
    setMoney(money + 1);
  }

  const buyMember = () => {
    if (money >= 25) {
      setMembers(members + 1);
      setMoney(money - 25);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setMoney(money + members * 0.1)
    }, 1000);

    return () => clearInterval(interval);
  }, [money]);

  return (
    <>
      <Head>
        <title>Yakuza</title>
        <meta name="description" content="Yakuza management game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        Click to earn money: <button onClick={buttonClicked}>Click</button><br />

        Current money: ${money}<br />

        Buy Yakuza member to collect 0.1$/sec: $25 | {members}/{(members * 0.1).toFixed(1)}<br />
        <button onClick={buyMember}>Buy member</button>

        Buy Yakuza lietuenant to collect 1$/sec: $240 | {liautenant}
      </main>
    </>
  )
}
