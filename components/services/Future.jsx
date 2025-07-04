import mainStyles from '@/styles/services/future.module.css';
import futureItems from '@/constants/futureItems';


export const Future = () => {
  return (
    <section className={mainStyles.mainContainer}>
      <h2 className={mainStyles.mainHeading}>
          WHAT WE&apos;LL PROVIDE IN<br/>THE FUTURE
      </h2>
      <div className={mainStyles.bodyContainer}>
        {futureItems.map(item => (
          <div key={item.id} className={mainStyles.card}>
            <img src={item.image} alt="Future Service" className={mainStyles.image} />
            <h3 className={mainStyles.heading}>{item.text}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

