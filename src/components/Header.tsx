import { ArrowLeft, Moon, Search, Sun, Type } from 'lucide-react';
import { UiSettings } from '../hooks/useStudyProgress';

interface HeaderProps {
  title: string;
  showBack: boolean;
  onBack: () => void;
  onOpenSearch: () => void;
  settings: UiSettings;
  onToggleTheme: () => void;
  onCycleFontSize: () => void;
}

const FONT_LABEL: Record<UiSettings['fontSize'], string> = {
  sm: 'Küçük',
  md: 'Normal',
  lg: 'Büyük',
};

export function Header({
  title,
  showBack,
  onBack,
  onOpenSearch,
  settings,
  onToggleTheme,
  onCycleFontSize,
}: HeaderProps) {
  return (
    <header className="top-header">
      <div className="top-header-inner">
        <div className="header-left">
          {showBack ? (
            <button
              type="button"
              className="icon-btn"
              onClick={onBack}
              aria-label="Geri dön"
            >
              <ArrowLeft size={18} />
            </button>
          ) : (
            <span className="brand-badge">ATA 121</span>
          )}
          <span className="header-title">{title}</span>
        </div>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onOpenSearch}
            aria-label="Tüm derslerde ara"
            title="Ara"
          >
            <Search size={17} />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onCycleFontSize}
            aria-label={`Yazı boyutu: ${FONT_LABEL[settings.fontSize]}`}
            title={`Yazı boyutu: ${FONT_LABEL[settings.fontSize]}`}
          >
            <Type size={16} />
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label="Tema değiştir"
            title={settings.theme === 'light' ? 'Koyu Tema' : 'Açık Tema'}
          >
            {settings.theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
        </div>
      </div>
    </header>
  );
}
