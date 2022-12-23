import "../Welcome/welcome.scss";

export default function Welcome() {
  return (
    <div className="sp-container">
      <div className="tittle-btn">
        <a
          className="sp-circle-link"
          href="https://media.licdn.com/dms/document/C4D2DAQE0LbbBP6eSxw/profile-treasury-document-pdf-analyzed/0/1670369275599?e=1672272000&v=beta&t=FtHG93UbytZDW5BQ99zGDJoIS5APgVumynXoEgbLZIs"
          target="_blank"
          rel="noopener noreferrer"
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
