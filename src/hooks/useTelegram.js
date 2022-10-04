const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = (e) => {
    tg.close();
  };

const onToggleButton = (e) => {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.show();
    }
  };
  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUsafe?.user,
  };
}
