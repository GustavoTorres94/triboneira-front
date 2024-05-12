import { NewsSumaryProps } from '../../types';
import styles from './NewsSumary.module.css';

function NewsSumary({ news }: NewsSumaryProps) {
  const transforDate = (date: string) => {
    const reform = date.split('-');
    switch (reform[1]) {
      case '01':
        reform[1] = 'Janeiro';
        break;
      case '02':
        reform[1] = 'Fevereiro';
        break;
      case '03':
        reform[1] = 'Março';
        break;
      case '04':
        reform[1] = 'Abril';
        break;
      case '05':
        reform[1] = 'Maio';
        break;
      case '06':
        reform[1] = 'Junho';
        break;
      case '07':
        reform[1] = 'Julho';
        break;
      case '08':
        reform[1] = 'Agosto';
        break;
      case '09':
        reform[1] = 'Setembro';
        break;
      case '10':
        reform[1] = 'Outubro';
        break;
      case '11':
        reform[1] = 'Novembro';
        break;
      case '12':
        reform[1] = 'Dezembro';
        break;
      default:
        break;
    }
    return `${reform[2]} ${reform[1]}`;
  };

  return (
    <div className={ styles.newsContainer }>
      {news.map((newsItem) => (
        <div key={ newsItem.id } className={ styles.newsItem }>
          <div className={ styles.dateInfo }>
            <span><strong>{transforDate(newsItem.realeaseTime)}</strong></span>
          </div>
          <div className={ styles.newsInfo }>
            <p><strong><u>{newsItem.title}</u></strong></p>
            <p>{newsItem.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsSumary;
