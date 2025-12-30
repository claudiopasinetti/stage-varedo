// Meta Pixel ID
const PIXEL_ID = '1063589709210238';

// Inizializza Meta Pixel
export const initMetaPixel = () => {
  // Evita doppia inizializzazione
  if (window.fbq) return;

  // Facebook Pixel Code
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );

  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');

  console.log('✅ Meta Pixel inizializzato:', PIXEL_ID);
};

// Traccia evento Lead
export const trackLead = (data = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Swim Like a Dolphin - Stage 18 Gennaio 2026',
      ...data,
    });
    console.log('✅ Meta Pixel: Lead tracciato', data);
  } else {
    console.warn('⚠️ Meta Pixel non disponibile');
  }
};

// Setup listener per eventi Tally
export const setupTallyListener = () => {
  const handleTallyMessage = (event) => {
    // Verifica che il messaggio provenga da Tally
    if (event.origin !== 'https://tally.so') return;

    try {
      const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;

      // Verifica se è un evento di submission
      if (
        data.event === 'Tally.FormSubmitted' ||
        data.payload?.event === 'submit' ||
        data.type === 'submit'
      ) {
        console.log('📝 Tally form submitted:', data);
        trackLead({
          event_source: 'tally',
          form_id: data.payload?.formId || 'D4KryE',
        });
      }
    } catch (error) {
      console.error('Errore parsing messaggio Tally:', error);
    }
  };

  window.addEventListener('message', handleTallyMessage);

  console.log('✅ Tally listener configurato');

  // Funzione di cleanup
  return () => {
    window.removeEventListener('message', handleTallyMessage);
  };
};
