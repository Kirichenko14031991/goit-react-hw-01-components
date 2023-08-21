import styled from '@emotion/styled';

export const Table = styled.table`
margin: 0 auto;
  width: 700px;
  text-transform: uppercase;
`;

export const TableHeader = styled.th`
  height: 40px;
  border: 0,1px solid lightgray;
  background-color: #54c7ec;
  color: white;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #92e0d0;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
  border: 0,1px solid lightgray;
`;
