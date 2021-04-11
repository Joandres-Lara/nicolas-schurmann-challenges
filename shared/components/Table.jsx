import styled from 'styled-components'

const Table = styled.table`
 width: 100%;
 border-collapse: collapse;
`;

export const Row = Table.Row = styled.tr`
`;

export const Cell = Table.Cell = styled.td`
 &.border{
  border: 1px solid rgba(0, 0, 0, 0.1);
 }

 &.interactable{
  cursor: pointer;

  &:hover{
   background-color: rgba(0, 0, 0, 0.1);
  }

  &.active{
   background-color: red;
  }
 }
`;

export const Body = Table.Body = styled.tbody`
`;

export const Header = Table.Header = styled.thead`
 font-weight: bold;
 text-align: center;
`;

export const Head = Table.Head = styled.th`
`;

export default Table;
