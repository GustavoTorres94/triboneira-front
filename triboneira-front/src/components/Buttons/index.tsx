import { NavButtonProps } from '../../types';

function Button({ text, type }: NavButtonProps) {
  return (
    <button type={ type }>{ text }</button>
  );
}

export default Button;
