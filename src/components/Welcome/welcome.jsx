import "../Welcome/welcome.scss";

const pdf = "../../../public/FullStack.pdf";
export default function Welcome() {
  return (
    <div className="sp-container">
      <div className="tittle-btn">
        <a
          className="sp-circle-link"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
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
