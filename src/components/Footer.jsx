import React from 'react';

function Footer() {
  return (
    <div className='mt-2 text-muted small text-center'>
      &copy; Intocode Coding Bootcamp, {new Date().getFullYear()}.
    </div>
  );
}

export default Footer;
