import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

interface ThanksProps {
  star: number;
}

function Thanks({ star }: ThanksProps) {
  return (
    <Flex flexDirection="column" backgroundColor="hsl(213, 19%, 18%)" p="20px" borderRadius="20px" alignItems="center">
      <Image src="/images/illustration-thank-you.svg" w="150px" mb="20px" p="8px" />
      <Box
        borderRadius="20px"
        backgroundColor="hsl(216, 12%, 8%)"
        fontSize="15px"
        color="#ac6b38"
        mb="20px"
        p="8px 15px"
      >
        You selected {star} out of 5
      </Box>
      <Heading as="h1" fontSize="20px" fontWeight="700" color="white" m="0px">
        Thank you!
      </Heading>
      <Text textAlign="center" as="p" color="hsl(217, 12%, 63%)" fontSize="15px" maxW="340px" lineHeight="150%">
        We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in
        touch!
      </Text>
    </Flex>
  );
}

export default Thanks;
