import {
  Flex,
  Image,
  Spacer,
  useColorModeValue,
  SlideFade,
} from '@chakra-ui/react';
import LanguageSwitcher from '../components/language-switcher';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import useLanguage from '../hooks/use-language';
import LinkIcon from '../components/link-icon';
import PageComponent from '../components/page';
import thea from '../assets/cv-bilde.jpeg';
import { MdEmail } from 'react-icons/md';
import React from 'react';

function IndexPage() {
  const textColor = useColorModeValue('#404067', '#D3CDF9');
  const isNorwegian = useLanguage();

  return (
    <Flex
      height='100vh'
      alignItems='center'
      justifyContent='center'
      background={'#272727'}
    >
      <SlideFade offsetY={-20} in={true}>
        <PageComponent
          header={isNorwegian ? '✨HEI DU✨' : '✨HI THERE✨'}
          desc={
            isNorwegian
              ? ' Mitt navn er Thea Jenny Kolnes. Jeg tar bachelor i Datateknologi💻 i Bergen på UIB.'
              : 'My name is Thea Jenny Kolnes. I am currently studying Computer Technology💻 in Bergen at UIB.'
          }
          nextPage='/about'
        >
          <Image
            src={thea.src}
            alignSelf='center'
            borderRadius='full'
            boxSize='150px'
            fallbackSrc='https://via.placeholder.com/150'
            alt='Bilde av meg'
          />
          <Flex mt='2' direction='row'>
            <Spacer />
            <LinkIcon
              link={'https://www.linkedin.com/in/thea-jenny-kolnes-a79821231/'}
              label={'Linkedin-en min'}
              color={textColor}
              icon={FaLinkedin}
            />
            <LinkIcon
              link={'https://github.com/tjekol'}
              label={'Githubben min'}
              color={textColor}
              icon={FaGithub}
            />
            <LinkIcon
              link={'mailto:thea.jenny02@gmail.com'}
              label={'Send mail til meg'}
              color={textColor}
              icon={MdEmail}
            />
            <Spacer />
          </Flex>
          <LanguageSwitcher />
        </PageComponent>
      </SlideFade>
    </Flex>
  );
}

export default IndexPage;
