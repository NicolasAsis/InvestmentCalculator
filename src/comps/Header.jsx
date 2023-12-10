export default function Header({ img, heading }) {
  return(
  <header id="header">
    <img src={img} alt="Money bag with coins" />
    <h1>{heading}</h1>
  </header>
  );
}
