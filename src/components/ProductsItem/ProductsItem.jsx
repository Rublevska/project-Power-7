import {
  Title,
  CardWrapper,
  MetaWrapper,
  Text,
  Button,
  LabelRecommended,
  Decor,
  TopInfoWrapper,
  Caption,
  SvgIcon,
  TitleWrapper,
  SvgArrow,
  DetailsMetaWrapper,
  TextFull,
} from './ProductsItem.styled';
import sprite from '../../images/sprite.svg';

export const ProductCard = ({
  product: { id, title, calories, category, weight, recommended = true },
  toogleModal,
}) => {
  return (
    <CardWrapper>
      <TopInfoWrapper>
        <Decor>diet</Decor>
        <LabelRecommended $recommended={recommended}></LabelRecommended>
        <Text>
          <b>{recommended ? 'Recommended' : 'Not recommended'}</b>
        </Text>
        <Button onClick={() => toogleModal({ id, title, calories })}>
          Add
          <SvgArrow>
            <use href={`${sprite}#icon-arrow-right`}></use>
          </SvgArrow>
        </Button>
      </TopInfoWrapper>

      <TitleWrapper>
        <SvgIcon>
          <use href={`${sprite}#icon-run-exercises`}></use>
        </SvgIcon>
        <Title>{title}</Title>
      </TitleWrapper>

      <MetaWrapper>
        <DetailsMetaWrapper>
          <Caption>Calories:</Caption> <TextFull>{calories}</TextFull>
        </DetailsMetaWrapper>
        <DetailsMetaWrapper>
          <Caption>Category: </Caption> <Text>{category}</Text>
        </DetailsMetaWrapper>
        <DetailsMetaWrapper>
          <Caption>Weight:</Caption> <TextFull>{weight}</TextFull>
        </DetailsMetaWrapper>
      </MetaWrapper>
    </CardWrapper>
  );
};
