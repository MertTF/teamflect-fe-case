// https://github.com/mantinedev/mantine/blob/c087030bbc67a895cb39475b0494ed5a6dc5e7ab/packages/%40mantine/hooks/src/use-isomorphic-effect/use-isomorphic-effect.ts
import { useEffect, useLayoutEffect } from 'react';

// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect removes it by replacing useLayoutEffect with useEffect during ssr
export const useIsomorphicEffect =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect;
