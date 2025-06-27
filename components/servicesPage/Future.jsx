import mainStyles from '@/styles/servicesPage/future.module.css';

const futureItems = [
  { id: 1, image: '/future1.png', text: 'Tailored services to empower your academic journey.' },
  { id: 2, image: '/future1.png', text: 'Tailored services to empower your academic journey.' },
  { id: 3, image: '/future1.png', text: 'Tailored services to empower your academic journey.' },
  { id: 4, image: '/future1.png', text: 'Tailored services to empower your academic journey.' },
  { id: 5, image: '/future1.png', text: 'Tailored services to empower your academic journey.' },
];

export const Future = () => {
  return (
    <section className={mainStyles.mainContainer}>
      <h2 className={mainStyles.mainHeading}>
        WHAT WE’LL PROVIDE IN<br/>THE FUTURE
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

