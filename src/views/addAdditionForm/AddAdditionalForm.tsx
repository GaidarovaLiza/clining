import { Chips } from '../../components/chips/Chips';
import { iconList } from '../../data/additionals';

export const AddAdditionslForm = () => {
  return (
    <div>
      <Chips label={'Дополнительные услуги'} value={iconList} />
    </div>
  );
};
