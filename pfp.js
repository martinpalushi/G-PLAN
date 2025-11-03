const MAX_BYTES = 5 * 1024 * 1024;

const el = {
  avatar: document.getElementById('pfp-avatar'),
  initials: document.getElementById('pfp-initials'),
  status: document.getElementById('pfp-status'),
  file: document.getElementById('pfp-file'),
  upload: document.getElementById('pfp-upload'),
  remove: document.getElementById('pfp-remove')
};

el.upload.onclick = () => el.file.click();
el.remove.onclick = removePhoto;

el.file.addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > MAX_BYTES) { setStatus('Max size 5MB.'); return; }
  try {
    const dataUrl = await readAsDataURL(file);
    localStorage.setItem('gplan.avatar', dataUrl);
    showPhoto(dataUrl);
    setStatus('Profile photo saved.');
  } catch {
    setStatus('Could not load photo.');
  }
});

function readAsDataURL(file){
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}

function showPhoto(dataUrl){
  el.avatar.src = dataUrl;
  el.avatar.style.display = 'block';
  el.initials.style.display = 'none';
}

function removePhoto(){
  localStorage.removeItem('gplan.avatar');
  el.avatar.src = '';
  el.avatar.style.display = 'none';
  el.initials.style.display = 'grid';
  setStatus('Profile photo removed.');
}

function setStatus(msg){ el.status.textContent = msg; }

(function init(){
  const saved = localStorage.getItem('gplan.avatar');
  if (saved) showPhoto(saved); else removePhoto();
})();

