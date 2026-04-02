// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Works } from './components/Works/Works'
import { Goals } from './components/Gloals/Goals'
import { Invite } from './components/Invite/Invite'
import { Layout } from './components/Layout'
import { Members } from './components/Members/Memebers'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Goals />
        <Invite />
        <Works />
        <Members />
      </Layout>
    </>
  )
}

export default App
