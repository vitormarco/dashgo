import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Vítor Marco</Text>
          <Text color="gray.300" fontSize="small">
            vitoradrianomarco@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Vítor Marco"
        src="https://github.com/vitormarco.png"
      />
    </Flex>
  );
};
