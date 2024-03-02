import { theme } from 'antd';
import { useMemo } from 'react';

import { useMatchMedia } from './useMatchMedia';
import { useStateSelector } from './useState';

import { getTheme } from '../state/slice/theme';

export const useThemeConfig = () => {
  const themePreference = useStateSelector(getTheme);
  const browserThemeIsDark = useMatchMedia('(prefers-color-scheme: dark)');

  const themeConfig = useMemo(() => {
    if (themePreference === 'light') return theme.defaultAlgorithm;
    if (themePreference === 'dark') return theme.darkAlgorithm;
    if (browserThemeIsDark) return theme.darkAlgorithm;
    else return theme.defaultAlgorithm;
  }, [themePreference, browserThemeIsDark]);

  return themeConfig;
};
