import styles from './Image.module.css';

const Image = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image !== 'None' ? (
        <img className={styles.image} src={image} alt='News Image' />
      ) : null}
    </div>
  );
};

export default Image;
