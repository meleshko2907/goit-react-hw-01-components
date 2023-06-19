import styled from '@emotion/styled';

export const ListItem = styled.li`
  align-items: center;
  border: 1px solid #ababab;
  border-radius: 2px;
  box-shadow: 2px 2px 2px #d8e0ea;
  display: flex;
  gap: 15px;
  height: 110px;
  margin-bottom: 15px;
  width: 100%;
`;

export const Img = styled.img`
  display: block;
  width: 50px;
  height: 50px;
`;

export const Dot = styled.span`
  border-radius: 50%;
  height: 25px;
  margin-left: 16px;
  margin-right: 16px;
  width: 25px;
  background-color: ${props => {
    if (props.isActive === 'true') {
      return 'green';
    } else if (props.isActive === 'false') {
      return 'red';
    }
  }};
`;