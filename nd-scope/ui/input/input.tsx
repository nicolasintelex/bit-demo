import React from 'react';
import { Button } from '@nitsan770/reuse-components.ui.button';
import classNames from 'classnames';
import styles from './input.module.scss';

export type InputProps = {
  buttonText: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ buttonText, className, ...rest }: InputProps) {
  return (
    <div className={classNames(styles.inputContainer, className)}>
      <input {...rest} className={styles.inputText}></input>
      <Button className={styles.button} children={buttonText} />
    </div>
  );
}