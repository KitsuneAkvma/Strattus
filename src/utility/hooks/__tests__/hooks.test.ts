import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useSelector } from 'react-redux';

describe('App dispatch callback function', () => {
  test('It should return useDispatch hook', () => {
    const functionReturn = useAppDispatch;
    expect(functionReturn).toBe(useDispatch);
  });
});

describe('App Selector callback function', () => {
  test('It should return useSelector hook', () => {
    const functionReturn = useAppSelector;
    expect(functionReturn).toBe(useSelector);
  });
});
