import IMainProps from './types';
import { Container } from './styles';

const Main = ({ children, style, className }: IMainProps) => {
  return <Container {...{ style, className }}>{children}</Container>;
};

export default Main;
