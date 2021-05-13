/* eslint-disable no-underscore-dangle */
// @ts-nocheck

// component from https://gist.github.com/csandman/c687a9fb4275112f281ab9a5701457e4
import React from 'react';
import Select, { components as selectComponents } from 'react-select';
import {
  Flex,
  Tag,
  TagCloseButton,
  TagLabel,
  Divider,
  CloseButton,
  Center,
  Box,
  Portal,
  StylesProvider,
  useMultiStyleConfig,
  useStyles,
  useTheme,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const chakraStyles = {
  input: (provided) => ({
    ...provided,
    color: 'inherit',
    lineHeight: 1,
    fontSize: '14px',
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0.125rem 1rem',
    fontSize: '14px'
  }),
  control: () => {},
  menuList: () => ({}),
  option: () => ({}),
  multiValue: () => {},
  multiValueLabel: () => {},
  multiValueRemove: () => {},
  group: () => {},
};

const chakraComponents = {
  // Control components
  Control: ({ children, innerRef, innerProps, isDisabled, isFocused }) => {
    const inputStyles = useMultiStyleConfig('Input');
    return (
      <StylesProvider value={inputStyles}>
        <Flex
          ref={innerRef}
          sx={{
            ...inputStyles.field,
            p: 0,
            overflow: 'hidden',
            h: 'auto',
            minH: 6,
          }}
          {...innerProps}
          {...(isFocused && { 'data-focus': true })}
          {...(isDisabled && { disabled: true })}
        >
          {children}
        </Flex>
      </StylesProvider>
    );
  },
  MultiValueContainer: ({
    children,
    innerRef,
    innerProps,
    data: { isFixed },
  }) => (
    <Tag
      ref={innerRef}
      {...innerProps}
      m="0.125rem"
      variant={isFixed ? 'solid' : 'subtle'}
    >
      {children}
    </Tag>
  ),
  MultiValueLabel: ({ children, innerRef, innerProps }) => (
    <TagLabel ref={innerRef} {...innerProps}>
      {children}
    </TagLabel>
  ),
  MultiValueRemove: ({ children, innerRef, innerProps, data: { isFixed } }) => {
    if (isFixed) {
      return null;
    }

    return (
      <TagCloseButton ref={innerRef} {...innerProps}>
        {children}
      </TagCloseButton>
    );
  },
  IndicatorSeparator: ({ innerRef, innerProps }) => (
    <Divider
      ref={innerRef}
      {...innerProps}
      orientation="vertical"
      opacity="1"
    />
  ),
  ClearIndicator: ({ innerRef, innerProps }) => (
    <CloseButton ref={innerRef} {...innerProps} size="sm" mx={2} />
  ),
  DropdownIndicator: ({ innerRef, innerProps }) => {
    const { addon } = useStyles();

    return (
      <Center
        ref={innerRef}
        {...innerProps}
        sx={{
          ...addon,
          h: '100%',
          borderRadius: 0,
          borderWidth: 0,
          cursor: 'pointer',
        }}
      >
        <ChevronDownIcon h={5} w={5} />
      </Center>
    );
  },
  // Menu components
  MenuPortal: ({ innerRef, innerProps, children }) => (
    <Portal ref={innerRef} {...innerProps}>
      {children}
    </Portal>
  ),
  Menu: ({ children, ...props }) => {
    const menuStyles = useMultiStyleConfig('Menu');
    return (
      <selectComponents.Menu {...props}>
        <StylesProvider value={menuStyles}>{children}</StylesProvider>
      </selectComponents.Menu>
    );
  },
  MenuList: ({ innerRef, innerProps, children, maxHeight }) => {
    const { list } = useStyles();
    return (
      <Box
        sx={{
          ...list,
          maxH: `${maxHeight}px`,
          overflowY: 'auto',
        }}
        ref={innerRef}
        {...innerProps}
      >
        {children}
      </Box>
    );
  },
  GroupHeading: ({ innerProps, children }) => {
    const { groupTitle } = useStyles();
    return (
      <Box sx={groupTitle} {...innerProps}>
        {children}
      </Box>
    );
  },
  Option: ({ innerRef, innerProps, children, isFocused, isDisabled }) => {
    const { item } = useStyles();
    return (
      <Box
        as="button"
        sx={{
          ...item,
          w: '100%',
          textAlign: 'left',
          bg: isFocused ? item._focus.bg : 'transparent',
          ...(isDisabled && item._disabled),
        }}
        ref={innerRef}
        {...innerProps}
        {...(isDisabled && { disabled: true })}
      >
        {children}
      </Box>
    );
  },
};

const MultiSelect = ({
  name = '',
  styles = {},
  components = {},
  theme = {},
  ...props
}) => {
  const chakraTheme = useTheme();

  const placeholderColor = useColorModeValue(
    chakraTheme.colors.gray[400],
    chakraTheme.colors.whiteAlpha[400]
  );

  return (
    <Select
      name={name}
      components={{
        ...chakraComponents,
        ...components,
      }}
      styles={{
        ...chakraStyles,
        ...styles,
      }}
      theme={(baseTheme) => ({
        ...baseTheme,
        borderRadius: chakraTheme.radii.md,
        colors: {
          ...baseTheme.colors,
          neutral50: placeholderColor, // placeholder text color
          neutral40: placeholderColor, // noOptionsMessage color
          ...theme.colors,
        },
        spacing: {
          ...baseTheme.spacing,
          ...theme.spacing,
        },
      })}
      {...props}
    />
  );
};

export default MultiSelect;
