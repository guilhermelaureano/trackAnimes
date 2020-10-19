import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import React from 'react';
import Link from 'next/link';

import Card from '../src/components/Card';
import Head from '../src/components/Head';
import Footer from '../src/patterns/Footer';
import Header from '../src/patterns/Header';

export async function getStaticProps(context) {
  const animes = await fetch('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0 ')
  .then((responseServer) => {
    if (responseServer.ok) return responseServer.json();
    throw new Error('Deu problema');
  })
  .then((responseObject) => responseObject.data);

  return {
    props: {
      animes,
    },
  };
}

export default function Home(props) {
  const {animes} = props;

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

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around">
          {animes.map((anime, k) => {
            const {attributes: {ageRatingGuide, canonicalTitle, coverImage, posterImage}} = anime;
            return (
              <Col className="gutter-row" key={k}>
                <Card
                  description={ageRatingGuide}                  
                  img={posterImage.small}
                  metaImg={anime}
                  title={canonicalTitle}
                />
              </Col>
            );
          })}
        </Row>
      </main>
      <Footer />
    </div>
  );
}