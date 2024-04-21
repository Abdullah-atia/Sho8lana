import styles from "./card.module.css";
function BusinessCard() {
  return (
    <div
      className={`${styles.business} flex rounded-lg relative p-5`}
    >
      <div >
        <h2 className={`${styles.title} mb-4`}
        >Find the talent needed to get your business growing.</h2>
        <p className={`${styles.desc} m-4`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
        </div>
        
      <div className=" absolute right-0 bottom-0">
        <img src="./assets/images/men-women.png" alt="" />
      </div>
    </div>
  );
}

export default BusinessCard;
