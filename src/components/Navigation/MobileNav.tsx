import React from 'react';
import { Flex, Link, Stack, Text } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

import { NavItem } from 'utils/types';
import NAV_ITEMS from 'utils/constants/navItems';

type OnClickType = { onClick: () => void };

const MobileNavItem = ({ label, href, onClick }: NavItem & OnClickType) => (
  <Stack spacing={4}>
    <Link as={RouteLink} to={href}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
        onClick={onClick}
      >
        <Text fontWeight={600} color="gray.600">
          {label}
        </Text>
      </Flex>
    </Link>
  </Stack>
);

const MobileNav = ({ onClick }: OnClickType) => (
  <Stack bg="white" p={4} display={{ md: 'none' }} shadow="2xl">
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} onClick={onClick} />
    ))}
  </Stack>
);

export default MobileNav;
