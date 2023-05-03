import { useEffect } from 'preact/hooks';

const CookieConsent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js';
      script.async = true;

      script.onload = () => {
 
        window.cookieconsent.initialise({
          container: document.getElementById('content'),
          palette: {
            popup: { background: '#fff' },
            button: { background: '#aa0000' },
          },
          revokable: true,
          onPopupOpen: function () {
            if (this.hasConsented()) {
              this.close();
            }
          },
          onStatusChange: function (status) {
            console.log(this.hasConsented() ? 'enable cookies' : 'disable cookies');
          },
          law: {
            regionalLaw: false,
          },
          location: true,
          position: 'bottom',
        });
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null;
};

export default CookieConsent;
