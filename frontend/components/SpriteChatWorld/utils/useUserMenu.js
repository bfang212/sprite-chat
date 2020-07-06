import { useState, useEffect, useRef } from 'react';

function useUserMenu(initialState = false) {
  const [isUserMenuOpen, setUserMenu] = useState(initialState);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target) && isUserMenuOpen) {
      setUserMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.addEventListener('click', handleClickOutside, true);
    };
  })

  return [ ref, isUserMenuOpen, setUserMenu ];
}

export default useUserMenu;
