import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Vítor Marco</Text>
        <Text color="gray.300" fontSize="small">
          vitoradrianomarco@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Vítor Marco"
        src="https://github.com/vitormarco.png"
      />
    </Flex>
  );
};
