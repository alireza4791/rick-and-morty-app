import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
} from 'next';
import { store } from '../../store';
import { useTypedSelector } from '../../common/hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import Character from '../../components/character';
import * as S from './styles';
import Link from 'next/link';
import Image from 'next/image';
import BackIcon from '../../assets/images/icons/backIcon.png';
import imageLoader from '../../common/loader/imageLoader';
import { characterType } from '../../common/types/characters';

interface IProps {
  id: string;
}

const IndivisualCharacter: NextPage<IProps> = ({ id }) => {
  const { characters } = useTypedSelector((state) => state.charactersList);
  const [indivisualCharacter, setIndivisualCharacter] = useState<characterType>(
    {
      id: 0,
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: {
        name: '',
        url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: '',
      episode: [''],
      url: '',
      created: new Date(),
    }
  );

  useEffect(() => {
    findIndivisualCharacter();
  }, []);

  const findIndivisualCharacter = () => {
    characters.list.forEach((character: characterType) => {
      if (character.id === parseInt(id)) {
        setIndivisualCharacter(character);
      }
    });
  };

  return (
    <S.container>
      {indivisualCharacter.id !== 0 && (
        <S.characterContainer>
          <Character character={indivisualCharacter} />
        </S.characterContainer>
      )}
      <S.back>
        <Link href={'/'}>
          <a>
            <Image
              src={BackIcon}
              layout={'fixed'}
              alt={'go back button'}
              loader={imageLoader}
              height={'58px'}
              width={'58px'}
            />
            {/* <S.backText>Back</S.backText> */}
          </a>
        </Link>
      </S.back>
    </S.container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
    },
  };
};

export default IndivisualCharacter;
