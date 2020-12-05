import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

import { useTranslation } from 'react-i18next';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const { t } = useTranslation();
  
  return (
    <div>
      <div className={styles.row}>
        <button
          data-testid='count:increment'
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          >
          +
        </button>
        <span 
          data-testid='count:value'
          className={styles.value}
          aria-label="Value"
          >{count}</span>
        <button
          data-testid='count:decrement'
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          {t('add', { mode: 'sync'})}
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          {t('add', { mode: 'async'})}
        </button>
      </div>
    </div>
  );
}