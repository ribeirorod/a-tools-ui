import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../base-component';
import DefaultButton from '../buttons/default-button';

const Dropdown = ({ trigger, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      {React.cloneElement(trigger, { onClick: handleToggle })}
      {isOpen && (
        <BaseComponent
          as="ul"
          color="background"
          elevation="md"
          padding="sm"
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            minWidth: '10rem',
            listStyle: 'none',
            margin: 0,
            zIndex: 1000,
          }}
        >
          {items.map((item, index) => (
            <li key={index}>
              <DefaultButton
                onClick={() => handleSelect(item)}
                sx={{ width: '100%', justifyContent: 'flex-start' }}
              >
                {item.label}
              </DefaultButton>
            </li>
          ))}
        </BaseComponent>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.element.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;