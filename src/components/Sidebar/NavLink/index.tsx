import Link from 'next/link';
import {
  Icon,
  Text,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import { ElementType } from 'react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize={20} />
        <Text ml={4} fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
};
