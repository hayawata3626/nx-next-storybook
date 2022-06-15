import { FC } from 'react';

type Props = {
  name: string;
};

export const Button: FC<Props> = ({ name }) => <button>{name}</button>;
