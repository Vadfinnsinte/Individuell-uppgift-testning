


import { expect } from "vitest";
import { splitTodosIntoDays } from "./list";

describe('splitTodosIntoDays', () => {
    it('should split todos into correct days', () => {
      const todos = [
        { id: 1, text: 'Task 1', day: 'måndag' },
        { id: 2, text: 'Task 2', day: 'tisdag' },
        { id: 3, text: 'Task 3', day: 'onsdag' },
      ];
      const [mo, ti, on, tor] = splitTodosIntoDays(todos);
  
      expect(mo).toEqual([{ id: 1, text: 'Task 1', day: 'måndag' }]);
      expect(ti).toEqual([{ id: 2, text: 'Task 2', day: 'tisdag' }]);
      expect(on).toEqual([{ id: 3, text: 'Task 3', day: 'onsdag' }]);
      expect(tor).toEqual([]);
    })

    it("Should handle todos with multible tasks", () => {
        const todos = [
            { id: 1, text: 'Task 1', day: 'måndag' },
            { id: 2, text: 'Task 2', day: 'tisdag' },
            { id: 3, text: 'Task 3', day: 'tisdag' }
        ]
        const [mo, ti, on] = splitTodosIntoDays(todos);
        expect(mo).toEqual([{ id: 1, text: 'Task 1', day: 'måndag' }]);
        expect(ti).toEqual([
          { id: 2, text: 'Task 2', day: 'tisdag' },
          { id: 3, text: 'Task 3', day: 'tisdag' },
        ])
        expect(on).toEqual([])
    })
});

