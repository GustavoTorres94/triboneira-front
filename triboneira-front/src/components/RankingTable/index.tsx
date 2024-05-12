import { RankingTableProps } from '../../types';
import styles from './RankingTable.module.css';

function RankingTable({ title, ranking }: RankingTableProps) {
  return (
    <div className={ styles.tableContainer }>
      <h1>{title}</h1>
      <table className={ styles.table }>
        <tbody>
          {ranking.map((team) => (
            <tr key={ team.id } className={ styles.tableRoll }>
              <td className={ styles.position }>{team.position}</td>
              <td className={ styles.tableCell }>
                <img
                  src={ team.teamLogo }
                  alt={ team.teamName }
                  className={ styles.teamLogo }
                />
                <p className={ styles.teamName }>{team.teamName}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RankingTable;
