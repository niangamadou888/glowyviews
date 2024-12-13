interface FAQDotsProps {
  total: number;
  currentIndex: number;
  onChange: (index: number) => void;
}

const FAQDots = ({ total, currentIndex, onChange }: FAQDotsProps) => (
  <div className="mt-8 flex gap-2">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentIndex 
            ? 'bg-primary scale-125 animate-glow' 
            : 'bg-secondary'
        }`}
        onClick={() => onChange(index)}
      />
    ))}
  </div>
);

export default FAQDots;