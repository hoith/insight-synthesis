interface KPIMetricProps {
  label: string;
  value: string;
  subValue?: string;
}

const KPIMetric = ({ label, value, subValue }: KPIMetricProps) => {
  return (
    <div className="glass-card rounded-xl p-6 hover-scale animate-fade-in">
      <h3 className="text-sm font-medium text-neutral-500 mb-2">{label}</h3>
      <div className="space-y-1">
        <div className="text-2xl font-semibold">{value}</div>
        {subValue && <div className="text-sm text-neutral-400">{subValue}</div>}
      </div>
    </div>
  );
};

export default KPIMetric;