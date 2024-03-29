import { LinkBox, LinkOverlay, Text, Box } from '@chakra-ui/react';

function LinkButton({
  title,
  link,
  boxColor,
  underlineHover,
  hoverColor,
  isExternalLink,
  scaleHover,
  fontStyle,
}: {
  title: string;
  link?: string;
  boxColor: string;
  underlineHover?: boolean;
  hoverColor: string;
  isExternalLink: boolean;
  scaleHover?: boolean;
  fontStyle?: string;
}) {
  return (
    <LinkBox
      transition={scaleHover ? '.1s ease-in' : undefined}
      _hover={{
        transform: scaleHover && 'scale(1.1)',
        textDecoration: underlineHover && 'underline',
        color: hoverColor,
      }}
    >
      <LinkOverlay href={link} isExternal={isExternalLink}>
        <Box rounded={5} bg={boxColor}>
          <Text
            align='center'
            fontStyle={fontStyle ? fontStyle : undefined}
            p='6px'
            color={hoverColor}
          >
            {title}
          </Text>
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
}

export default LinkButton;
