import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BaseComponent from '../base-component';
import DefaultButton from '../buttons/default-button';
import styles from './navbar.module.css';

const NavSwitch = ({ options, defaultSelected }) => {
  const [selected, setSelected] = useState(defaultSelected);

  return (
    <BaseComponent
      // color="gray800"
      rounding="full"
      elevation="sm"
      padding="sm"
      margin='sm'
      className={styles.navswitch}

    >
      {options.map((option) => (
        <DefaultButton
          key={option}
          onClick={() => setSelected(option)}
          // variant={selected === option ? 'contained' : 'text'}
          color={selected === option ? 'light' : 'dark'}
        >
          {option}
        </DefaultButton>
      ))}
    </BaseComponent>
  );
};

NavSwitch.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultSelected: PropTypes.string.isRequired,
};

export default NavSwitch;