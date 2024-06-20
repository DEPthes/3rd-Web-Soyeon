import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id = "header">
      <a href='next.html'>
        <img src={logo} alt="Logo showing a money bag"/>
      </a>
    <h1>Investment Calculator</h1>
  </header>
  );
}
