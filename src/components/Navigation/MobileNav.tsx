import * as React from 'react';
import { Flex, Link, Stack, Text } from '@chakra-ui/react';

import { NavItem } from '../../types';
import NAV_ITEMS from '../../utils/constants/navItems';

const MobileNavItem = ({ label, href }: NavItem) => (
  <Stack spacing={4}>
    <Flex
      py={2}
      as={Link}
      href={href ?? '#'}
      justify="space-between"
      align="center"
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Text fontWeight={600} color="gray.600">
        {label}
      </Text>
    </Flex>
  </Stack>
);

const MobileNav = () => (
  <Stack bg="white" p={4} display={{ md: 'none' }}>
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
    ))}
  </Stack>
);

export default MobileNav;
