import { startTransition, useState } from 'react';
import { Input } from '../../components/Input/Input';
import { DefaultButton } from '../../components/defaultButton/DefaultButton';
import { Typography } from '../../components/typography/Typography';

import style from './SendForm.module.scss';

const SendForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (event: any) => {
    startTransition(() => {
      setName(event.target.value);
    });
  };

  const handlePhoneChange = (event: any) => {
    startTransition(() => {
      setPhone(event.target.value);
    });
  };

  const handleAddressChange = (event: any) => {
    startTransition(() => {
      setAddress(event.target.value);
    });
  };

  return (
    <form className={style.form}>
      <Typography children={'Контактные данные'} variant="h1" />
      <Typography
        children={'Заполните контактные данные и наш оператор свяжется с Вами для уточнения деталей.'}
        variant="h2"
      />
      <Input label="Ваше имя" onChange={handleNameChange} value={name} variant="outlined" key={1} />
      <Input label="Контактный телефон" onChange={handlePhoneChange} value={phone} variant="outlined" key={2} />
      <Input label="Адрес" onChange={handleAddressChange} value={address} variant="outlined" key={3} />
      <DefaultButton variant="fulfilled" text="Отправить" size="medium" className={style.button} />
    </form>
  );
};

export default SendForm;
