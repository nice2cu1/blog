function switchTheme() {
  const currentStyle = currentTheme();
  const iconElement = document.getElementById('github-icon');

  if (currentStyle === 'light') {
    setTheme('dark');
    if (iconElement) {
      iconElement.setAttribute('class', 'octicon');
      iconElement.setAttribute('color', '#f0f6fc');
    }
  }
  else {
    setTheme('light');
    if (iconElement) {
      iconElement.removeAttribute('color');
      iconElement.removeAttribute('class');
    }
  }
}


function themeLister(){
  let media = window.matchMedia('(prefers-color-scheme: dark)');
  let callback = (e) => {
    autoSwitchTheme();
  };
  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', callback);
  } else if (typeof media.addListener === 'function') {
    media.addListener(callback);
  }
}

function autoSwitchTheme() {
  const currentStyle = currentTheme();
  const iconElement = document.getElementById('github-icon');
  const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (!systemDarkMode && currentStyle === 'dark') {
    setTheme('light');
    if (iconElement) {
      iconElement.removeAttribute('color');
      iconElement.removeAttribute('class');
    }
  } else if (systemDarkMode && currentStyle === 'light') {
    setTheme('dark');
    if (iconElement) {
      iconElement.setAttribute('class', 'octicon');
      iconElement.setAttribute('color', '#f0f6fc');
    }
  }
}

function setTheme(style) {
  document.querySelectorAll('.isInitialToggle').forEach(elem => {
    elem.classList.remove('isInitialToggle');
  });
  document.documentElement.setAttribute('data-color-mode', style);
  localStorage.setItem('data-color-mode', style);
}

function currentTheme() {
  const localStyle = localStorage.getItem('data-color-mode');
  const systemStyle = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return localStyle || systemStyle;
}

(() => {
  setTheme(currentTheme());
})();
