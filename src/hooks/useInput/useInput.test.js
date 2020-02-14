import useInput from './useInput';
import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import url from '../../constants/urls';

describe('the use input hook', () => {
    let mockAxiosGet;
    beforeEach(() => {
        mockAxiosGet = jest.spyOn(axios, 'get');
        mockAxiosGet.mockResolvedValue({data: {initialText:"unicorn"}});
    });
    it('should return an array containing the right stuff', async() => {
        const { result,waitForNextUpdate } = renderHook(() => useInput(url.url, ''));
        await waitForNextUpdate();
        expect(result.current).toBeInstanceOf(Array);
        expect(result.current[0]).toBe('unicorn');
        mockAxiosGet.mockRestore();
    });
    it('should make an api call', async() => {
        const { result,waitForNextUpdate } = renderHook(() => useInput(url.url, ''));
        await waitForNextUpdate();
        expect(mockAxiosGet).toHaveBeenCalledWith(url.url);
        act(() => {
            result.current[1]('Agnes');
        });
        expect(result.current[0]).toEqual('Agnes');
        mockAxiosGet.mockRestore();
    });
});