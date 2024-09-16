import PropTypes from 'prop-types';
import React from 'react';
import BaseComponent from '../base-component';
import DefaultButton from '../buttons/default-button';
import NavSwitch from './nav-switch';
import styles from './navbar.module.css';

const NavBar = ({ title, onDocsClick, onFeedbackClick, onUserClick, ...props }) => {
  return (
    <BaseComponent
      as="nav"
      color="background"
      elevation="none"
      padding="md"
    className={styles.navbar}
      {...props}
      sx={{
        ...props.sx
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <Logo /> */}
        <h1 style={{ marginLeft: '1rem', fontSize: '1.2rem' }}>{title}</h1>
      </div>
      
      <NavSwitch
        options={['Dashboard', 'Workbench', 'Settings']}
        defaultSelected="Workbench"
      />
      
      <div className={styles.navbuttons} >
        <DefaultButton onClick={onDocsClick} variant="text">Docs</DefaultButton>
        <DefaultButton onClick={onFeedbackClick} variant="text">Feedback</DefaultButton>
        <DefaultButton onClick={onUserClick} variant="icon">
          {/* Replace with actual user icon */}
          U
        </DefaultButton>
      </div>
    </BaseComponent>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  onDocsClick: PropTypes.func.isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
  onUserClick: PropTypes.func.isRequired,
};

export default NavBar;