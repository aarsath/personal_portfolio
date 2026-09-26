import { useState } from 'react';
import HeroImg from '../assets/arsath.jfif';

const PASSWORD = 'Arsath123';

function ImageEditor({ label, image, fallback, onChange }) {
  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
    event.target.value = '';
  };

  return (
    <div className="admin-image-editor">
      <div className="admin-image-heading">
        <strong>{label}</strong>
        <p>Choose a clear, high quality image for this section.</p>
      </div>
      <div className="admin-image-preview">
        {image || fallback ? <img src={image || fallback} alt={`${label} preview`} /> : <div className="admin-image-placeholder" aria-hidden="true">＋</div>}
        <div className="admin-image-actions">
          <label className="image-upload-button">
            <span>↑</span> Upload image
            <input type="file" accept="image/*" onChange={handleFile} />
          </label>
          {image && <button className="image-reset-button" type="button" onClick={() => onChange('')}>Use default image</button>}
        </div>
      </div>
      <p className="admin-hint">JPG, PNG, GIF, or WebP. Saved with your portfolio in this browser.</p>
    </div>
  );
}

export default function Admin({ portfolio, setPortfolio }) {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem('portfolio-admin') === 'true');
  const [password, setPassword] = useState('');
  const [resumeUploadError, setResumeUploadError] = useState('');
  const [draft, setDraft] = useState(portfolio);
  const updateProfile = (field, value) => setDraft({ ...draft, profile: { ...draft.profile, [field]: value } });
  const updateProject = (index, field, value) => setDraft({ ...draft, projects: draft.projects.map((project, i) => i === index ? { ...project, [field]: value } : project) });
  const updateCertificate = (index, field, value) => setDraft({ ...draft, certificates: (draft.certificates || []).map((certificate, i) => i === index ? { ...certificate, [field]: value } : certificate) });
  const uploadResume = (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setResumeUploadError('Choose a PDF file.');
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      setResumeUploadError('Choose a PDF smaller than 3 MB so it can be saved in this browser.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setDraft((current) => ({ ...current, resumePdf: reader.result, resumePdfName: file.name }));
      setResumeUploadError('');
    };
    reader.onerror = () => setResumeUploadError('The PDF could not be read. Please try again.');
    reader.readAsDataURL(file);
  };
  const save = () => setPortfolio(draft);

  if (!authenticated) return <main className="admin-shell"><form className="admin-login" onSubmit={(event) => { event.preventDefault(); if (password === PASSWORD) { sessionStorage.setItem('portfolio-admin', 'true'); setAuthenticated(true); } }}><p className="eyebrow">Portfolio control</p><h1>Admin login</h1><p>Enter the dashboard password to manage your content.</p><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" autoFocus /><button className="btn" type="submit">Unlock dashboard</button><a href="/">Back to portfolio</a></form></main>;
  return <main className="admin-shell"><div className="admin-header"><div><p className="eyebrow">Portfolio control</p><h1>Manage content</h1><p>Changes are saved in this browser automatically.</p></div><div><a className="admin-link" href="/">View portfolio</a><button className="btn" onClick={save}>Save changes</button></div></div>
    <div className="admin-grid"><section className="admin-panel"><h2>Profile information</h2>
      <ImageEditor label="Profile photo" image={draft.profile.image} fallback={HeroImg} onChange={(value) => updateProfile('image', value)} />
      {[['name', 'Name'], ['role', 'Role'], ['email', 'Email'], ['phone', 'Phone'], ['github', 'GitHub URL'], ['linkedin', 'LinkedIn URL'], ['instagram', 'Instagram URL']].map(([field, label]) => <label key={field}>{label}<input value={draft.profile[field]} onChange={(event) => updateProfile(field, event.target.value)} /></label>)}<label>Bio<textarea rows="5" value={draft.profile.bio} onChange={(event) => updateProfile('bio', event.target.value)} /></label></section>
      <section className="admin-panel"><h2>Skills</h2><textarea rows="8" value={draft.skills.join('\n')} onChange={(event) => setDraft({ ...draft, skills: event.target.value.split('\n').map((item) => item.trim()).filter(Boolean) })} placeholder="One skill per line" /><p className="admin-hint">Use one skill per line.</p></section>
      <section className="admin-panel admin-projects"><h2>Resume</h2>
        <label>Professional summary<textarea rows="4" value={draft.resumeSummary || ''} onChange={(event) => setDraft({ ...draft, resumeSummary: event.target.value })} /></label>
        <label>Education<textarea rows="4" value={(draft.education || []).join('\n')} onChange={(event) => setDraft({ ...draft, education: event.target.value.split('\n').map((item) => item.trim()).filter(Boolean) })} placeholder="One education entry per line" /></label>
        <label>Certifications<textarea rows="7" value={(draft.certifications || []).join('\n')} onChange={(event) => setDraft({ ...draft, certifications: event.target.value.split('\n').map((item) => item.trim()).filter(Boolean) })} placeholder="One certification per line" /></label>
        <label>Resume PDF URL<input value={draft.resumePdf?.startsWith('data:') ? '' : draft.resumePdf || ''} onChange={(event) => setDraft({ ...draft, resumePdf: event.target.value, resumePdfName: '' })} placeholder="Optional PDF URL" /></label>
        <label className="image-upload-button"><span aria-hidden="true">↑</span> Upload replacement PDF<input type="file" accept="application/pdf,.pdf" onChange={uploadResume} /></label>
        <p className="admin-hint">Current file: {draft.resumePdf ? (draft.resumePdfName || 'Resume PDF') : 'No resume PDF selected'}</p>
        {resumeUploadError && <p className="admin-hint" role="alert">{resumeUploadError}</p>}
        {draft.resumePdf && <button className="delete-button" type="button" onClick={() => setDraft({ ...draft, resumePdf: '', resumePdfName: '' })}>Remove current PDF</button>}
        <p className="admin-hint">Use one education item or certification per line. Uploaded PDFs must be under 3 MB to fit browser storage.</p>
      </section>
      <section className="admin-panel admin-projects"><div className="admin-section-title"><h2>Projects</h2><button className="admin-link" type="button" onClick={() => setDraft({ ...draft, projects: [...draft.projects, { title: 'New project', description: 'New project', tech: 'Technology', link: 'https://' }] })}>+ Add project</button></div>{draft.projects.map((project, index) => <div className="project-editor" key={index}><div className="admin-section-title"><strong>Project {index + 1}</strong><button className="delete-button" type="button" onClick={() => setDraft({ ...draft, projects: draft.projects.filter((_, i) => i !== index) })}>Delete</button></div>
        <ImageEditor label="Project image" image={project.image} onChange={(value) => updateProject(index, 'image', value)} />
        {[['title', 'Title'], ['description', 'Description'], ['tech', 'Tech tags'], ['link', 'Project URL']].map(([field, label]) => <label key={field}>{label}<input value={project[field] || ''} onChange={(event) => updateProject(index, field, event.target.value)} /></label>)}</div>)}</section>
      <section className="admin-panel admin-projects"><div className="admin-section-title"><h2>Certifications</h2><button className="admin-link" type="button" onClick={() => setDraft({ ...draft, certificates: [...(draft.certificates || []), { id: `certificate-${Date.now()}`, title: 'New certification', issuer: 'Issuing organization', date: '', image: '' }] })}>+ Add certification</button></div>
        {(draft.certificates || []).map((certificate, index) => <div className="project-editor" key={certificate.id || index}><div className="admin-section-title"><strong>Certification {index + 1}</strong><button className="delete-button" type="button" onClick={() => setDraft({ ...draft, certificates: draft.certificates.filter((_, i) => i !== index) })}>Delete</button></div>
          <ImageEditor label="Certificate image" image={certificate.image} onChange={(value) => updateCertificate(index, 'image', value)} />
          {[['title', 'Title'], ['issuer', 'Issuer'], ['date', 'Date']].map(([field, label]) => <label key={field}>{label}<input value={certificate[field] || ''} onChange={(event) => updateCertificate(index, field, event.target.value)} /></label>)}
        </div>)}
      </section>
    </div></main>;
}
