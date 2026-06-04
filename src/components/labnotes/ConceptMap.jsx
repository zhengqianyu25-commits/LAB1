import { Link } from 'react-router-dom';

const nodes = [
  { id: 'scarcity', x: 50, y: 12, label: 'Price Ceiling', to: '/lab-note/scarcity' },
  { id: 'attention', x: 85, y: 35, label: 'Attention', to: '/lab-note/attention-economy' },
  { id: 'cost', x: 85, y: 65, label: 'Coordination', to: '/lab-note/cost-control' },
  { id: 'labor', x: 50, y: 88, label: 'Labor', to: '/lab-note/labor-protection' },
  { id: 'externalities', x: 15, y: 65, label: 'Externalities', to: '/lab-note/externalities' },
  { id: 'creator', x: 15, y: 35, label: 'Creator', to: '/lab-note/creator-economy' },
];

const edges = [
  { from: 'scarcity', to: 'attention', label: 'price cap → secondary market' },
  { from: 'scarcity', to: 'cost', label: 'rationing without price' },
  { from: 'attention', to: 'creator', label: 'viral → monetization' },
  { from: 'cost', to: 'labor', label: 'who bears the cost?' },
  { from: 'labor', to: 'externalities', label: 'risk shifted to society' },
  { from: 'externalities', to: 'creator', label: 'public good gap' },
];

export default function ConceptMap() {
  const w = 300, h = 200;

  const getXY = (node) => ({ x: (node.x / 100) * w, y: (node.y / 100) * h });

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center mt-6 mb-4">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-[300px] shrink-0">
        {edges.map((e, i) => {
          const a = nodes.find(n => n.id === e.from);
          const b = nodes.find(n => n.id === e.to);
          if (!a || !b) return null;
          const pa = getXY(a), pb = getXY(b);
          return (
            <g key={i}>
              <line x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke="var(--color-border)" strokeWidth="1" strokeDasharray="3,2" />
              <text x={(pa.x + pb.x) / 2} y={(pa.y + pb.y) / 2 - 4} textAnchor="middle" fontSize="6" fill="var(--color-text-muted)" opacity="0.6">{e.label}</text>
            </g>
          );
        })}
        {nodes.map(n => {
          const p = getXY(n);
          return (
            <Link key={n.id} to={n.to}>
              <circle cx={p.x} cy={p.y} r="20" fill="var(--color-accent-dim)" stroke="var(--color-accent)" strokeWidth="1.5" className="transition-all duration-300 hover:fill-[var(--color-accent)]" />
              <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="7" fontWeight="600" fill="var(--color-text)" fontFamily="system-ui" className="transition-colors duration-300">{n.label}</text>
            </Link>
          );
        })}
      </svg>
      <div className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        <p className="mb-3 dark-bright">Six concepts. One framework. They connect:</p>
        <ul className="space-y-1.5 text-xs">
          {edges.map(e => {
            const a = nodes.find(n => n.id === e.from);
            const b = nodes.find(n => n.id === e.to);
            return (
              <li key={e.from + e.to} className="flex items-center gap-2 dark-bright opacity-70">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--color-accent)' }} />
                <span style={{ color: 'var(--color-accent)' }} className="font-semibold">{a?.label}</span>
                <span className="opacity-50">&rarr;</span>
                <span style={{ color: 'var(--color-accent)' }} className="font-semibold">{b?.label}</span>
                <span className="opacity-40">— {e.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
