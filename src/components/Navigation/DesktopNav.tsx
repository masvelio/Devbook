import * as React from 'react';
import { Box, Link, Popover, PopoverTrigger, Stack } from '@chakra-ui/react';

import NAV_ITEMS from '../../utils/constants/navItems';
import { NavItem } from '../../types';

const DesktopNavLink = ({ label, href }: NavItem) => (
  <Link
    p={2}
    href={href ?? '#'}
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
        <Popover trigger="hover" placement="bottom-start">
          <PopoverTrigger>
            <DesktopNavLink {...navItem} />
          </PopoverTrigger>
        </Popover>
      </Box>
    ))}
  </Stack>
);

export default DesktopNav;
