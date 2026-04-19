export function ThemeScript() {
  const code = `(function(){try{var key='portfolio-theme';var saved=localStorage.getItem(key);var theme=saved==='light'?'light':'dark';var root=document.documentElement;if(theme==='light'){root.classList.add('light');}else{root.classList.remove('light');}root.style.colorScheme=theme;}catch(e){document.documentElement.style.colorScheme='dark';}})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

