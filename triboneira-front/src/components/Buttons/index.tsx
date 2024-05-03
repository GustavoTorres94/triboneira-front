import { NavButtonProps } from '../../types';

function Button({ text, type, onClick, isDisabled }: NavButtonProps) {
  const handle = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={ type }
      onClick={ handle }
      disabled={ isDisabled }
    >
      { text }
    </button>
  );
}

export default Button;
