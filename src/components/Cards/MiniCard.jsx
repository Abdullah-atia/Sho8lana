function MiniCard({ children, countUpRef }) {
  return (
    <div className="border bg-light rounded  text-center p-1 mt-4"  ref={countUpRef}>
      {children}
    </div>
  );
}

export default MiniCard;
