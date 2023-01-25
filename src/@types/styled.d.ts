import 'styled-components';

import {THEME} from '../global/styles/themes';

declare module 'styled-components'{
  /* crio meu ThemeType a partir do theme.ts */
  type ThemeType = typeof THEME; 
/* DefaultTheme pertence ao styled-components */
  export interface DefaultTheme extends ThemeType {} 
}