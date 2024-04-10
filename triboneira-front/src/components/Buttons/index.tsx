import { NavButtonProps } from '../../types';

function Button({ text, type, onClick }: NavButtonProps) {
  const handle = () => {
    if (onClick) {
      console.log('Button clicked');
      onClick();
    }
  };

  return (
    <button type={ type } onClick={ handle }>{ text }</button>
  );
}

export default Button;
