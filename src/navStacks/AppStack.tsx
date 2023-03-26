import React, {FC} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import PreLoginNavStack from './PreLogin';

interface Props {};

const AppNavStack: FC<Props> = (): JSX.Element => {
  return (
    <NavigationContainer>
        <PreLoginNavStack />
      </NavigationContainer>
  );
};

export default AppNavStack;