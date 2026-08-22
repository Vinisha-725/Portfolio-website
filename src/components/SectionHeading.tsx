export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-12">
      {children}
    </h2>
  );
}
