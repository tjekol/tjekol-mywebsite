import {
  IconButton,
  Icon,
  Flex,
  Spacer,
  useColorModeValue,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import PageComponent from '@/components/page';

const IndexPage = () => {
  const textColor = useColorModeValue('#404067', '#D3CDF9');

  return (
    <PageComponent
      header={"✨HI THERE✨"}
      desc={
        'My name is Thea Jenny Kolnes. I am currently studying Computer Technology💻 in Bergen at UIB.'
      }
    >
      <Flex m="2" direction="row">
        <Spacer />
        <LinkBox
          transition=".1s ease-out"
          _hover={{ transform: 'scale(1.30)' }}
        >
          <LinkOverlay
            href="https://www.linkedin.com/in/thea-jenny-kolnes-a79821231/"
            aria-label="Linkedin-en min"
            isExternal
          >
            <Icon as={FaLinkedin} boxSize="7" color={textColor} />
          </LinkOverlay>
        </LinkBox>

        <LinkBox
          mr="5"
          ml="5"
          transition=".1s ease-out"
          _hover={{ transform: 'scale(1.30)' }}
        >
          <LinkOverlay
            href="https://github.com/tkol02"
            aria-label="Githubben min"
            isExternal
          >
            <Icon as={FaGithub} boxSize="7" color={textColor} />
          </LinkOverlay>
        </LinkBox>

        <LinkBox
          transition=".1s ease-out"
          _hover={{ transform: 'scale(1.30)' }}
        >
          <LinkOverlay
            href="mailto:thea.jenny02@gmail.com"
            aria-label="Send mail til meg"
            isExternal
          >
            <Icon as={MdEmail} boxSize="7" color={textColor} />
          </LinkOverlay>
        </LinkBox>

        <Spacer />
      </Flex>

      <Flex justifyContent="right">
        <LinkBox>
          <LinkOverlay href="/about">
            <IconButton
              width="15"
              aria-label="next page"
              icon={<HiOutlineArrowSmRight />}
            />
          </LinkOverlay>
        </LinkBox>
      </Flex>
    </PageComponent>
  );
};

export default IndexPage;
