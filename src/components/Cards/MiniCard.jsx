function MiniCard({ children, countUpRef }) {
  return (
    <div className="border-2 rounded-lg bg-white text-black text-center p-0.5 mt-4"  ref={countUpRef}>
      {children}
    </div>
  );
}

export default MiniCard;
