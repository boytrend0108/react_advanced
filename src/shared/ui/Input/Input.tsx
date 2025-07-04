import cn from 'classnames';
import cls from './Input.module.scss';
import { memo, useEffect, useRef, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';

type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'readonly'
>;

interface Props extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  value: string | number;
  placeholder?: string;
  autofocus?: boolean;
  readonly?: boolean;
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
}

const SYMBOL_WIDTH = 9; // Average width of a character in pixels

export const Input: React.FC<Props> = memo((props) => {
  const {
    className,
    type = 'text',
    onChange,
    value = '',
    placeholder,
    autofocus,
    readonly = false,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(value?.toString().length);
  const { theme } = useTheme();
  const ref = useRef<HTMLInputElement>(null);

  const ifCarerVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  function onBlur() {
    setIsFocused(false);
  }

  function onFocus() {
    setIsFocused(true);
  }

  function onSelect(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setCaretPosition(target.selectionStart || 0);
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value?.length);
  }

  return (
    <div
      className={cn(cls.inputWrapper, className, theme, {
        [cls.readonly]: readonly,
      })}
      {...otherProps}
    >
      {placeholder && (
        <label className={cls.label}>{props.placeholder + ' >'}</label>
      )}

      <div className={cls.carretWrapper}>
        <input
          ref={ref}
          type={type}
          onChange={onChangeHandler}
          value={value}
          className={cls.input}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />

        {ifCarerVisible && (
          <span
            className={cn(cls.carret, {
              [cls.readonly]: readonly,
            })}
            style={{ left: `${caretPosition * SYMBOL_WIDTH}px` }}
          />
        )}
      </div>
    </div>
  );
});
