interface FAQContentProps {
  title: string;
  content: string[];
}

const FAQContent = ({ title, content }: FAQContentProps) => (
  <div className="absolute top-0 left-0 w-full h-full bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-glow border-primary/20 reveal-on-scroll">
    <h3 className="text-2xl font-semibold mb-6 text-primary text-glow">
      {title}
    </h3>
    <div className="space-y-4">
      {content.map((paragraph, pIndex) => (
        <p 
          key={pIndex} 
          className="text-white leading-relaxed opacity-0 animate-[text-reveal_0.5s_ease-out_forwards]"
          style={{ animationDelay: `${pIndex * 0.1}s` }}
        >
          {paragraph}
        </p>
      ))}
    </div>
  </div>
);

export default FAQContent;