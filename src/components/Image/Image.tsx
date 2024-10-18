import styles from './Image.module.css';

interface Props {
  image: string;
}

const Image = ({ image }: Props) => {
  return (
    <div className={styles.wrapper}>
      {image !== 'None' ? (
        <img className={styles.image} src={image} alt='News Image' />
      ) : null}
    </div>
  );
};

export default Image;
