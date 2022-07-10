import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';

import imageLoader from '../../common/loader/imageLoader';
import * as S from './styles';
import { characterType } from '../../common/types/characters';

interface IProps {
  character: characterType;
}

const Character: NextPage<IProps> = ({ character }) => {
  return (
    <S.character key={character.id}>
      <S.name>{character.name}</S.name>
      <S.imageContainer>
        <Image
          src={character.image}
          alt={character.name}
          width='200'
          height='200'
          loader={imageLoader}
          unoptimized
          className='avatar'
        />
      </S.imageContainer>
      <S.details>
        <S.status>
          Status:{' '}
          <S.text className={character.status}>{character.status}</S.text>
        </S.status>
        <S.species>
          Species:{' '}
          <S.text className={character.species}>{character.species}</S.text>
        </S.species>
        <S.gender>
          Gender:{' '}
          <S.text className={character.gender}>{character.gender}</S.text>
        </S.gender>
        <a href={character?.origin.url} target='_blank' rel='noreferrer'>
          <S.origin>
            Origin:{' '}
            <S.text className={character?.origin.name}>
              {character?.origin.name}
            </S.text>
          </S.origin>
        </a>
        <a href={character.location.url} target='_blank' rel='noreferrer'>
          <S.location>
            Location:{' '}
            <S.text className='location'>{character.location.name}</S.text>
          </S.location>
        </a>
      </S.details>
    </S.character>
  );
};

export default Character;
