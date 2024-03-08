import * as s from './DayExercisesItem.styled';
import icons from '../../images/sprite/sprite.svg';
import { DayCommonItemTitle } from '../DayCommonItemTitle/DayCommonItemTitle';

export const DayExerciseItem = ({ isFirstItem, value }) => {
  return (
    <s.ItemExerciseWrapper>
      <s.ProductsContainer>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Body Part
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>
            {value.exerciseId.bodyPart}
          </s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Equipment
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>
            {value.exerciseId.equipment}
          </s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Name
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>
            {value.exerciseId.name}
          </s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Target
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>
            {value.exerciseId.target}
          </s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Burned cal..
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>
            {value.exerciseId.burnedCalories}
          </s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Time
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>
            {value.exerciseId.time}
          </s.DayExerciseItemContent>
        </s.ListItem>
      </s.ProductsContainer>
      <s.DeleteButton>
        <s.DeleteIcon>
          <use href={`${icons}#trash`}></use>
        </s.DeleteIcon>
      </s.DeleteButton>
    </s.ItemExerciseWrapper>
  );
};

// export const DayExerciseItem = () => {
//   return (
//     <s.ProductsContainer>
//       <s.ListItem>
//         <DayCommonItemTitle>Body Part</DayCommonItemTitle>
//         <s.DayItemBodyPartContent>Waist</s.DayItemBodyPartContent>
//       </s.ListItem>
//       <s.ListItem>
//         <DayCommonItemTitle>Equipment</DayCommonItemTitle>
//         <s.DayItemEquipmentContent>Black bread</s.DayItemEquipmentContent>
//       </s.ListItem>
//       <s.ListItem>
//         <DayCommonItemTitle>Name</DayCommonItemTitle>
//         <s.DayItemNameContent>Black bread</s.DayItemNameContent>
//       </s.ListItem>
//       <s.ListItem>
//         <DayCommonItemTitle>Target</DayCommonItemTitle>
//         <s.DayTargetContent>200</s.DayTargetContent>
//       </s.ListItem>
//       <s.ListItem>
//         <DayCommonItemTitle>Burned cal..</DayCommonItemTitle>
//         <s.DayCaloriesContent>200</s.DayCaloriesContent>
//       </s.ListItem>
//       <s.ListItem>
//         <DayCommonItemTitle>Time</DayCommonItemTitle>
//         <s.DayTimeContent>200</s.DayTimeContent>
//       </s.ListItem>

//       <s.DeleteButton>
//         <s.DeleteIcon>
//           <use href={`${icons}#icon-trash`}></use>
//         </s.DeleteIcon>
//       </s.DeleteButton>
//     </s.ProductsContainer>
//   );
// };
