import { renderHook, act } from '@testing-library/react-hooks'
import {useInput} from '../hooks/useInput'
import axios from 'axios'

jest.mock('axios', () => ({
    get: jest.fn(() =>({data: {"initialText":"unicorn"}}))
}));


describe('the useInput hook', () => {
    
    it('should make the api call to fetch the default value and set it in the state', async () => {
      const {
          result,
          waitForNextUpdate
      } = renderHook(() => useInput());
      await waitForNextUpdate();
      expect(axios.get).toHaveBeenCalled();
      expect(result.current[0]).toEqual('unicorn');
  });
    it('should update the state when the setValue function is called', async () => {
      const {
          result,
          waitForNextUpdate
      } = renderHook(() => useInput());
      await waitForNextUpdate();
      expect(result.current[0]).toEqual('unicorn');
      act(() => {
          result.current[1]('test-value-2');
      });
      expect(result.current[0]).toEqual('test-value-2');
  });
});