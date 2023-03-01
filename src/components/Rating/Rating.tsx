import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Flex, Heading, Text, Image } from '@chakra-ui/react';

interface RatingProps {
  submit: (isSubmit: boolean) => void;
}

function Rating({ submit }: RatingProps) {
  const [star, setStar] = useState(0);
  const [grades, setGrades] = useState([1, 2, 3, 4, 5]);

  return (
    <Flex flexDirection="column" backgroundColor="hsl(213, 19%, 18%)" p="30px" borderRadius="20px">
      <Image
        src="/public/images/icon-star.svg"
        w="15px"
        h="15px"
        mb="10px"
        backgroundColor="#20303a"
        p="8px"
        borderRadius="50%"
        boxShadow="black 0px 0px 0px 1px"
      />
      <Heading as="h1" fontSize="20px" fontWeight="700" color="white" mb="0px">
        How did we do?
      </Heading>
      <Text as="p" color="hsl(217, 12%, 63%)" fontSize="15px" maxW="330px" lineHeight="150%" mb="20px">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </Text>
      <Flex gap="20px" alignItems="center" mb="20px">
        {grades.map((item) => (
          <Button
            key={uuidv4()}
            onClick={() => setStar(item)}
            borderRadius="50%"
            flex="1 1 20%"
            p="15px 15px"
            outline="none"
            border="none"
            transition="all 0.5s ease"
            cursor="pointer"
            color="white"
            backgroundColor={star === item ? 'hsl(25, 97%, 53%)' : 'hsl(216, 12%, 54%)'}
            _hover={{
              backgroundColor: star === item ? '' : 'hsl(217, 12%, 63%)',
            }}
          >
            {item}
          </Button>
        ))}
      </Flex>
      <Button
        textTransform="uppercase"
        background="hsl(25, 97%, 53%)"
        outline="none"
        border="none"
        p="10px 8px"
        color="white"
        borderRadius="30px"
        cursor="pointer"
        transition="all 0.5s ease"
        _active={{
          color: 'hsl(25, 97%, 53%)',
          background: 'white',
        }}
        onClick={() => submit(true)}
      >
        Submit
      </Button>
    </Flex>
  );
}

export default Rating;
