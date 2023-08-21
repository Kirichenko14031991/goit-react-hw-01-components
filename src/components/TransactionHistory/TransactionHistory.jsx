import PropTypes from 'prop-types';
import {Table, TableHeader, TableRow, TableData} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <TableRow key={item.id}>
              <TableData>{item.type}</TableData>
              <TableData>{item.amount}</TableData>
              <TableData>{item.currency}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
};
