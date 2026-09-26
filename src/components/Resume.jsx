export default function Resume({ education = [], certifications = [], summary = '', pdf = '' }) {
  return (
    <section id="Resume" aria-labelledby="resume-title">
      <div className="resume-inner">
        <div className="resume-heading">
          <div>
            <p className="eyebrow">Background &amp; credentials</p>
            <h2 id="resume-title">Resume</h2>
          </div>
          {pdf && <a className="btn resume-download" href={pdf} download="Abdul-Arsath-Resume.pdf">Download PDF <span aria-hidden="true">↓</span></a>}
        </div>
        <p className="resume-intro">{summary}</p>
      </div>
    </section>
  );
}
