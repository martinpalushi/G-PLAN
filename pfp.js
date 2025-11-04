// Maximum allowed file size for uploads
const MAX_BYTES = 5 * 1024 * 1024;

// References to all ellements interacted with
const el = {
  avatar: document.getElementById('pfp-avatar'),
  initials: document.getElementById('pfp-initials'),
  status: document.getElementById('pfp-status'),
  file: document.getElementById('pfp-file'),
  upload: document.getElementById('pfp-upload'),
  remove: document.getElementById('pfp-remove')
};

// When "Upload Photo" is clicked, trigger the file input
el.upload.onclick = () => el.file.click();

// When "Remove Photo" is clicked, remove the current profile picture
el.remove.onclick = removePhoto;

// When a file is selected, check the file size before confirming. Stop if user cancels.
el.file.addEventListener('change', async e => {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > MAX_BYTES) { setStatus('Max size 5MB.'); return; }
  try {
    
    // Convert the file into a data URL and store the image in local storage
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

// Display the uploaded photo on the page
function showPhoto(dataUrl){
  el.avatar.src = dataUrl;
  el.avatar.style.display = 'block';
  el.initials.style.display = 'none';
}

// Remove the current photo and redisplay the GP initials 
function removePhoto(){
  localStorage.removeItem('gplan.avatar');
  el.avatar.src = '';
  el.avatar.style.display = 'none';
  el.initials.style.display = 'grid';
  setStatus('Profile photo removed.');
}

function setStatus(msg){ el.status.textContent = msg; }

// Checks if a photo is stored in local storage when the page first loads. If yes, it will be displayed.
(function init(){
  const saved = localStorage.getItem('gplan.avatar');
  if (saved) showPhoto(saved); else removePhoto();
})();


