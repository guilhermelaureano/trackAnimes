import 'antd/dist/antd.css';
import Link from 'next/link'

import Head from '../src/components/Head'
import Footer from '../src/patterns/Footer';
import Header from '../src/patterns/Header';

function Sobre() {
  return (
    <div>
      <Head title="Track Animes" />
      <Header />
      <main style={{margin: '40px'}}>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/sobre">
          <a>Sobre o projeto</a>
        </Link>
      </li>
      </ul>
      </main>
      <Footer />
    </div>
  )
}

export default Sobre;