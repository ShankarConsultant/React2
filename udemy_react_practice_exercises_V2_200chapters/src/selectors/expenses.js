
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;   // 10 >= 1
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;   // 10 <= 5
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {         return a.createdAt < b.createdAt ? 1 : -1; }
        else if(sortBy === 'amount'){   return a.amount < b.amount ? 1 : -1;            }
    })
};

