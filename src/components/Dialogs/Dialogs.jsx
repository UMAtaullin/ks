import React from 'react';
import cls from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={cls.dialogs_page}>
      <div className={cls['dialogs_item']}>
        <div>Земфира</div>
        <div>Раушания</div>
        <div>Мансур</div>
      </div>
      <div className={cls['messages_item']}>
        <div>Я приеду в понедельник в 4 утра</div>
        <div>Сегодня ничего не делала, но очень устала</div>
        <div>Без понятия что сказать</div>
      </div>
    </div>
  )
}

export default Dialogs