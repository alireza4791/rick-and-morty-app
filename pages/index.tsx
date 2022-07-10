import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import useActions from '../common/hooks/useActions';
import { useEffect, useState } from 'react';
import * as S from '../styles/indexStyles';
import { charactersListService } from '../services/characters';
import frontCard from '../assets/images/rickandmorty.png';
import { characterType } from '../common/types/characters';
import Character from '../components/character';
import imageLoader from '../common/loader/imageLoader';
import { charactersApiData } from '../common/types/characters';

interface IProps {
  data: charactersApiData;
}

const Home: NextPage<IProps> = ({ data }) => {
  const { charactersListAction } = useActions();

  useEffect(() => {
    charactersListAction(data?.results);
  });
  const renderCharacters = () => {
    return data?.results.map((character: characterType) => {
      return (
        <Link href={`characters/${character.id}`} key={character.id}>
          <a className='cardLink'>
            <S.characterCardContainer>
              <div className='card'>
                <div className='front'>
                  <Image
                    src={frontCard}
                    layout={'fixed'}
                    alt={'rick and morty'}
                    loader={imageLoader}
                    width={'350px'}
                    height={'450px'}
                  />
                </div>
                <div className='back'>
                  <Character character={character} />
                </div>
              </div>
            </S.characterCardContainer>
          </a>
        </Link>
      );
    });
  };

  return (
    <S.container>
      <Head>
        <title>rick and morty api</title>
        <meta
          name='description'
          content='a simple next.js app made using the rick and morty api'
        />
      </Head>
      <S.charactersContainer>{renderCharacters()}</S.charactersContainer>
    </S.container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response: any = await charactersListService();

  return {
    props: {
      data: response.data,
    },
  };
};

export default Home;
