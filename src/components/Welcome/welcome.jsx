import "../Welcome/welcome.scss";

export default function Welcome() {
  return (
    <div className="sp-container">
      <div className="tittle-btn">
        <a
          className="sp-circle-link"
          href="../../../public/FullStack.pdf"
          download="FullStack.pdf"
        >
          CV
        </a>
      </div>
      <div className="tittle">
        <p className="text">
          Con la vista siempre en el cielo
          <span>Carlos Gómez</span>
          &mdash; Fullstack developer &mdash;
        </p>
      </div>
    </div>
  );
}
