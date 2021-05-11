import * as React from 'react';
import { Box, Link, Stack } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

import NAV_ITEMS from '../../utils/constants/navItems';
import { NavItem } from '../../types';

const DesktopNavLink = ({ label, href }: NavItem) => (
  <Link
    as={RouteLink}
    p={2}
    to={href}
    fontSize="sm"
    fontWeight={500}
    color="gray.600"
    _hover={{
      textDecoration: 'none',
      color: 'gray.800',
    }}
  >
    {label}
  </Link>
);

const DesktopNav = () => (
  <Stack direction="row" spacing={4}>
    {NAV_ITEMS.map((navItem) => (
      <Box key={navItem.label}>
        <DesktopNavLink {...navItem} />
      </Box>
    ))}
  </Stack>
);

export default DesktopNav;
