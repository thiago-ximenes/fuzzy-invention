import {act, renderHook} from "@testing-library/react";
import {useDebounce} from "@/hooks/use-debounce";

jest.useFakeTimers();

describe('useDebounce', () => {
    it('should call the callback after the delay', () => {
        const callback = jest.fn();
        const { result } = renderHook(() => useDebounce({ delayInMs: 500, callback }));

        act(() => {
            result.current('test');
        });

        expect(callback).not.toHaveBeenCalled();

        act(() => {
            jest.advanceTimersByTime(500);
        });

        expect(callback).toHaveBeenCalledWith('test');
    });

    it('should cancel the previous timeout when called again', () => {
        const callback = jest.fn();
        const { result } = renderHook(() => useDebounce({ delayInMs: 500, callback }));

        act(() => {
            result.current('test1');
        });

        act(() => {
            result.current('test2');
        });

        expect(callback).not.toHaveBeenCalled();

        act(() => {
            jest.advanceTimersByTime(500);
        });

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('test2');
    });
});