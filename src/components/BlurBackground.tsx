import React from 'react';
import { Icon, IconProps, useBreakpointValue } from '@chakra-ui/react';

const BlurBackground = (props: IconProps) => (
  <Icon
    width={useBreakpointValue({ base: '100%', md: '40vw', lg: '100vw' })}
    zIndex="-1"
    height={['400px', '860px']}
    viewBox="0 0 528 560"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="71" cy="61" r="111" fill="#2980B9" />
    <circle cx="244" cy="106" r="139" fill="#74ebd5" />
    <circle cy="291" r="139" fill="#6DD5FA" />
    <circle cx="80.5" cy="189.5" r="101.5" fill="#373B44" />
    <circle cx="196.5" cy="317.5" r="101.5" fill="#74ebd5" />
    <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
    <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
  </Icon>
);

export default BlurBackground;
