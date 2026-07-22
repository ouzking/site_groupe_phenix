import { createContext, useContext, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

type Toast = { id: number; title: string; description?: string };
type ToastCtx = { notify: (t: Omit<Toast, 'id'>) => void };

const Ctx = createContext<ToastCtx>({ notify: () => {} });

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const notify = (t: Omit<Toast, 'id'>) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { ...t, id }]);
    setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 4200);
  };

  return (
    <Ctx.Provider value={{ notify }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="glass-card flex items-start gap-3 rounded-2xl px-5 py-4 pr-10 w-80 shadow-float"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: '#7B5209' }} />
              <div className="flex-1">
                <p className="text-sm font-semibold text-anthracite-900 dark:text-white">{t.title}</p>
                {t.description && <p className="mt-0.5 text-xs text-anthracite-500 dark:text-anthracite-300">{t.description}</p>}
              </div>
              <button
                onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))}
                className="absolute right-3 top-3 text-anthracite-400 hover:text-anthracite-700 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Ctx.Provider>
  );
}

export function useToast() {
  return useContext(Ctx);
}
