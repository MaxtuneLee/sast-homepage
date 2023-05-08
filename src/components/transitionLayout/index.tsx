import React, { forwardRef, ForwardedRef, ReactNode } from 'react';
import PageTransition from '../pageTransition';

/**
 * @description A wrapper for the page transition animation
 */
const TransitionLayout = forwardRef(function Layout(
  props: { children: ReactNode },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <PageTransition ref={ref}>
      {props.children}
    </PageTransition>
  )
})

export default TransitionLayout;
