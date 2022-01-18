import search from '../src/utils/search';

describe('Search', () => {
  test('Should suggest some movies names', () => {
    const results = search('Dogs');
    /**
     * Should have results
     */
    expect(Object.entries(results).length).toBeGreaterThan(1);
  });
  test('Should suggest 2 movies names', () => {
    const results = search('Dogs', 2);
    /**
     * Should have 2 results
     */
    expect(Object.entries(results).length).toBe(2);
  });
  test('Should return 0 movies names', () => {
    const results = search('teul');
    const noQuery = search('');
    /**
     * Should have 0 results
     */
    expect(Object.entries(results).length).toBe(0);
    expect(Object.entries(noQuery).length).toBe(0);
  });
});
