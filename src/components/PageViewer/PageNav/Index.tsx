import { Link, useParams } from 'react-router-dom';
import * as Styled from './styled';

const PageNav = () => {
  const { page } = useParams();
  const page_num = parseInt(page as string) ?? 1;

  const numberOfPages = 257;

  return (
    <Styled.PageNav>
      {page_num > 0 && (
        <Link to={`../${page_num - 1}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.52 331.63">
            <path d="M165.82 331.28.35 165.82 165.82.35" />
          </svg>
        </Link>
      )}
      Page {page_num}/{numberOfPages}
      {page_num < numberOfPages && (
        <Link to={`../${page_num + 1}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.52 331.63">
            <path d="m.35 331.28 165.47-165.46L.35.35" />
          </svg>
        </Link>
      )}
    </Styled.PageNav>
  );
}

export default PageNav;