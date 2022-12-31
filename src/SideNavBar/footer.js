import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
        <small>© 2018- {year} DUST Industry Inc. All Rights Reserved. Terms & Conditions | Privacy Policy</small>
    </footer>
  );
};

export default Footer;