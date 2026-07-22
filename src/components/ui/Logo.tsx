type LogoProps = {
  className?: string;
  variant?: 'full' | 'mark';
  onDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const sizes = { sm: 'h-8 w-8', md: 'h-10 w-10', lg: 'h-14 w-14' };
const textSizes = { sm: 'text-base', md: 'text-[17px]', lg: 'text-xl' };

export function Logo({ className = '', variant = 'full', onDark = true, size = 'md' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizes[size]} relative shrink-0 overflow-hidden rounded-xl shadow-brand`}>
        <img
          src="/images/phenix.jpeg"
          alt="GROUPE PHÉNIX"
          className="h-full w-full object-cover"
        />
      </div>
      {variant === 'full' && (
        <div className="leading-none">
          <div className={`font-display font-bold tracking-tight ${textSizes[size]} ${onDark ? 'text-white' : 'text-anthracite-900 dark:text-white'}`}>
            GROUPE{' '}
            <span className="text-brand-gradient">PHÉNIX</span>
          </div>
          <div className={`mt-1 text-[9px] font-semibold uppercase tracking-ultra ${onDark ? 'text-white/50' : 'text-anthracite-400 dark:text-anthracite-400'}`}>
            Excellence · Innovation · Performance
          </div>
        </div>
      )}
    </div>
  );
}

export function PhenixMark({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl ${className}`}>
      <img src="/images/phenix.jpeg" alt="" className="h-full w-full object-cover opacity-80" />
    </div>
  );
}
