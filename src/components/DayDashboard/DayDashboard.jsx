import { useSelector } from 'react-redux';
import {
  selectBurnedCalories,
  selectConsumedCalories,
  selectDoneExercisesTime,
} from '../../redux/diary/diarySelectors';
import { selectUser } from '../../redux/auth/authSelectors';
import icons from '../../images/sprite/sprite.svg';
import { DashboardCard } from './DashboardCard/DashboardCard';
import * as s from './DayDashboard.styled';
import {
  findSuccesColor,
  findAttentionColor,
} from '../../Helpers/GlobalOperations';

export const DayDashboard = () => {
  const user = useSelector(selectUser);
  let burnedCalories = useSelector(selectBurnedCalories);
  let consumedCalories = useSelector(selectConsumedCalories);
  let doneExercisesTime = useSelector(selectDoneExercisesTime);
  let timeSport = Number(user.timeSport) || 110;
  let sportRemaining = timeSport - doneExercisesTime;
  let caloriesRemaining = Math.round(user.bmr) - consumedCalories;

  return (
    <s.DashboardWrapper>
      <s.DashboardList>
        <DashboardCard
          subtitle="Daily calorie intake"
          icon={`${icons}#food`}
          $bgColor="orange"
          $cardTextColor="white"
        >
          {Math.round(user.bmr)}
        </DashboardCard>
        <DashboardCard
          subtitle="Daily physical activity"
          icon={`${icons}#dumbbell`}
          $bgColor="orange"
          $cardTextColor="white"
        >
          {`${timeSport} min`}
        </DashboardCard>
        <DashboardCard subtitle="Сalories consumed" icon={`${icons}#apple`}>
          {consumedCalories}
        </DashboardCard>
        <DashboardCard subtitle="Сalories burned" icon={`${icons}#fire`}>
          {burnedCalories}
        </DashboardCard>
        <DashboardCard
          subtitle="Calories remaining"
          icon={`${icons}#bubble`}
          $borderColor={findAttentionColor(
            Math.round(user.bmr),
            consumedCalories
          )}
        >
          {caloriesRemaining}
        </DashboardCard>
        <DashboardCard
          subtitle="Sports remaining"
          icon={`${icons}#figure`}
          $borderColor={findSuccesColor(timeSport, doneExercisesTime)}
        >
          {`${sportRemaining} min`}
        </DashboardCard>
      </s.DashboardList>
      <s.InfoWrapper>
        <s.SvgInfo>
          <use href={`${icons}#exclamation`}></use>
        </s.SvgInfo>
        <s.CommonInformation>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </s.CommonInformation>
      </s.InfoWrapper>
    </s.DashboardWrapper>
  );
};
