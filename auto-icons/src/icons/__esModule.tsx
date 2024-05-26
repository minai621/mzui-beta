// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import __esModuleSvg from '@ant-design/icons-svg/lib/asn/__esModule';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const __esModule = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={__esModuleSvg} />;


const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(__esModule);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = '__esModule';
}

export default RefIcon;