
// Expiration date validation function

export const isExpired = (date:any) => {
  if (!date || !/^\d{2}\/\d{2}$/.test(date)) return true;
  const [month, year] = date.split('/').map(Number);
  if (!month || !year) return true;

  const today = new Date();
  const currentYear = today.getFullYear() % 100; // Son iki haneyi alır
  const currentMonth = today.getMonth() + 1; // 0 tabanlı olduğu için 1 ekliyoruz

  // Eğer yıl geçmişse ya da yıl aynı ama ay geçmişse
  return year < currentYear || (year === currentYear && month < currentMonth);
};