import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 96px;
    max-width: 1440px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    /* padding: 72px 0 32px 0; */
    font-size: 32px;
    line-height: 137%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 40px 0 40px 0;
`;

export const DiaryItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const DiaryCommonContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 32px;
  }
`;
