import React from 'react';

const Logo = () => {
  return (
    <img src="https://www.dreamstime.com/food-logo-smile-label-company-grocery-store-friendly-vector-illustration-smiling-mouth-symbol-image135565322" />
  );
};

const Header = () => {
  return (
    <div>
      <Logo />
      <h1>I am header</h1>
      <h2>I will on top</h2>
    </div>
  );
};

export default Header;
