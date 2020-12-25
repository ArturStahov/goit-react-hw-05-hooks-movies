import { Pagination } from 'antd';
import { Container } from './StyledComponent';

export default function PaginationViews({
  length,
  onHandlerChange,
  activePage,
}) {
  return (
    <Container>
      <Pagination
        defaultCurrent={activePage}
        total={length}
        defaultPageSize={20}
        onChange={pageNumber => onHandlerChange(pageNumber)}
        showSizeChanger={false}
      />
    </Container>
  );
}
